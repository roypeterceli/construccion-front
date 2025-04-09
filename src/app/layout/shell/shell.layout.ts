import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WowAvatarMenu, WowMenubar } from '@wow/shared/components/menu';
import { SettingService } from '@wow/core/services';

@Component({
  selector: 'wow-shell-layout',
  imports: [
    RouterOutlet,
    WowMenubar,
    WowAvatarMenu,
  ],
  templateUrl: './shell.layout.html',
  styleUrl: './shell.layout.scss',
})
export class ShellLayout {
  settingService = inject(SettingService);

}
