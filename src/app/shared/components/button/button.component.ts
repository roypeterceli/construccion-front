import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'wow-button',
  imports: [
    MatButtonModule,
    MatIconModule,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class WowButton {

  icon = input<string>();
  color = input<'primary' | 'secondary' | 'danger'>('primary');
  type = input<'flat' | 'basic' | 'raised' | 'stroked'>('flat');

}
