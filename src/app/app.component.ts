import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'wow-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>'
})
export class AppComponent {
}
