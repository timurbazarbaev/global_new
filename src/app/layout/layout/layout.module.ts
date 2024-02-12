import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, WrapperComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
