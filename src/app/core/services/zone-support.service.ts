import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZoneSupport } from '@wow/core/interfaces';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '@wow/env/environment';
import { ApiResponse } from '@wow/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ZoneSupportService {

  private http = inject(HttpClient);
  refresh$ = new BehaviorSubject<ZoneSupport[]>([]);

  getAll(state?: number) {
    return this.http.get<ApiResponse<ZoneSupport[]>>(`${ environment.api.barConstruccion }/zones?state=${ state ?? '' }`).pipe(
      map(res => {
        if (res && res.data) {
          return res.data.map(item => new ZoneSupport(item));
        }
        return [];
      })
    );
  }

  getById(id: number) {
    return this.http.get<ApiResponse<ZoneSupport>>(`${ environment.api.barConstruccion }/zones/${ id }`);
  }

  create(request: ZoneSupport) {
    return this.http.post<ApiResponse<ZoneSupport>>(`${ environment.api.barConstruccion }/zones`, request);
  }

  cancel(zoneId: number) {
    return this.http.post<ApiResponse<ZoneSupport>>(`${ environment.api.barConstruccion }/zones/${ zoneId }/cancel`, null);
  }

  startSupport(zoneId: number) {
    return this.http.post<ApiResponse<ZoneSupport>>(`${ environment.api.barConstruccion }/zones/${ zoneId }/start-support`, null);
  }

  endSupport(zoneId: number, request: { code_atention: string, zendesk_zone: string, zendesk_url: string }) {
    return this.http.post<ApiResponse<ZoneSupport>>(`${ environment.api.barConstruccion }/zones/${ zoneId }/end-support`, request);
  }

  refresh(res: ZoneSupport[]): void {
    this.refresh$.next(res);
  }

}
