import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vertera_global_new';
}
