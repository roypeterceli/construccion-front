import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SettingService, ZoneSupportService } from '@wow/core/services';
import { Zone, ZoneSupport } from '@wow/core/interfaces';
import { MatDialog } from '@angular/material/dialog';
// import { SaveZoneSupportDlgComponent } from './components/save-zone-support-dlg/save-zonet-support-dlg.component';
import { AlertDialogService } from '@wow/shared/components/alert';

@Component({
  selector: 'wow-support-page',
  imports: [
    // RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    // RouterLink,
    // RouterLinkActive
  ],
  templateUrl: './support.page.html',
})
export class SupportPage{
  // subZones = signal<Zone[] | null | undefined>([]);
  // settingService = inject(SettingService);
  // private readonly zoneService = inject(ZoneSupportService);
  // private readonly router = inject(Router);
  // private readonly dialog = inject(MatDialog);
  // private readonly alertService = inject(AlertDialogService);

  // ngOnInit(): void {
  //   this.getSubZones();
  // }

  // openSaveZoneDlg(): void {
  //   const dialogRef = this.dialog.open(SaveZonesSupportDlgComponent, {
  //     role: 'dialog',
  //     panelClass: ['dialog-panel-fullscreen', 'dialog-panel-position-end', 'md:w-1/2', 'lg:w-1/3', 'w-full']
  //   });

  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res) {
  //       this.successMessage(res);
  //     }
  //   });
  // }

  // public getZoneFilter(state?: number): void {
  //   this.zoneService.getAll(state).subscribe(res => {
  //     if (res) {
  //       this.zoneService.refresh(res);
  //     }
  //   });
  // }

  // private successMessage(zone: ZoneSupport): void {
  //   const alertRef = this.alertService.success({
  //     title: `Ticket creado: ${ zone.code }`,
  //     message: 'El ticket ha sido creado exitosamente',
  //     actionButtonsAlign: 'end',
  //     confirmButton: { text: 'Ver ticket', style: 'flat' },
  //     cancelButton: { text: 'Cerrar' }
  //   })

  //   alertRef.afterClosed().subscribe(res => {
  //     if (res && res.isConfirmed) {
  //       this.router.navigate(['/atenciones', zone.id, 'detalles']).then();
  //     }
  //   })
  // }

  // private getSubZones(): void {
  //   const subZones = this.settingService.getSubZones(1);
  //   this.subZones.set(subZone?.children);
  // }

}
