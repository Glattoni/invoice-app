import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonsModule } from '../modules/buttons/buttons.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, AngularSvgIconModule, ButtonsModule],
  exports: [SidebarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
