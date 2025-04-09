import { HttpClient } from '@angular/common/http';
import { DEPARTMENT_TYPES, TRONCAL_TYPES, Zone, NODE_TYPES } from '@wow/core/interfaces';
import { inject, Injectable, signal } from '@angular/core';
import { ApiResponse } from '@wow/shared/interfaces';
import { environment } from '@wow/env/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  zones = signal<Zone[]>([]);
  documentTypes = signal<{ id: number; name: string }[]>(DEPARTMENT_TYPES);
  issueTypes = signal<{ id: number; name: string }[]>(TRONCAL_TYPES);
  solicitudeTypes = signal(NODE_TYPES);
  processTypes = signal<{ id: number; name: string }[]>([]);
  // cexTypes = signal<{ id: number; name: string }[]>(CEX_TYPES);

  private http = inject(HttpClient);

  constructor() {
    this.getZones();
    // this.loadZoneCoverage();
    
  }

  private getZones() {
    this.zones.set([
      {
        id: 1,
        name: 'Atenciones',
        path: ['atenciones'],
        children: [
          {
            id: 1,
            name: 'Atenciones',
            icon: 'inbox',
            path: ['/atenciones']
          },
          // {
          //   id: 2,
          //   name: 'Reportes',
          //   icon: 'poll',
          //   path: ['/reportes', 'reportes']
          // }
        ]
      },
      // {
      //   id: 2,
      //   name: 'Reportes',
      //   path: ['reportes']
      // }
    ])
  }

  // getSubZones(zoneId: number) {
  //   return this.zones().find(zone => zone.id === zoneId);
  // }

  // private loadZoneCoverage(): void {
  //   if (this.zoneCorevage().length === 0) {
  //     this.getAll().subscribe();
  //   }
  // }

  // getAll() {
  //   return this.http.get<ApiResponse<{ id: number; name: string }[]>>(`${environment.api.barConstruccion}/zone-coverage`).pipe(
  //     tap(res => this.zoneCorevage.set(res.data ?? []))
  //   );
  // }
}
