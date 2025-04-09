import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConfirmResponse } from './confirm-dlg.config';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EndTicketRequest } from '@wow/core/interfaces';


@Component({
  selector: 'wow-confirm-dlg',
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './confirm-dlg.component.html',
  styleUrl: './confirm-dlg.component.scss'
})
export class ConfirmDialog {
  dialogRef = inject(MatDialogRef<ConfirmDialog, ConfirmResponse & EndTicketRequest>);

  codeAtentionControl = new FormControl<string>('', [Validators.required]);
  zendeskTicketControl = new FormControl<string>('', [Validators.required]);
  zendeskUrlControl = new FormControl<string>('', [Validators.required]);


  endBarSupport(): void {
    this.dialogRef.close({
      isConfirmed: true,
      codeAtention: this.codeAtentionControl.value,
      zendeskTicket: this.zendeskTicketControl.value,
      zendeskUrl: this.zendeskUrlControl.value
    });
  }
}
