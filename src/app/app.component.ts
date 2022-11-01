import { Component, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly activeTheme$ = inject(ThemeService).activeTheme$;
}
