import { ResolveFn } from '@angular/router';
import { ZoneSupport } from '@wow/core/interfaces';
import { inject } from '@angular/core';
import { ZoneSupportService } from '@wow/core/services';
import { map } from 'rxjs';

export const zoneByIdResolver: ResolveFn<ZoneSupport> = (route, state) => {
  const zoneSupportService = inject(ZoneSupportService);
  const id = route.paramMap.get('zoneId');
  if (!id) {
    throw new Error('Zone id not found in url');
  }

  return zoneSupportService.getById(Number(id)).pipe(
    map(res => new ZoneSupport(res.data!))
  );
};
