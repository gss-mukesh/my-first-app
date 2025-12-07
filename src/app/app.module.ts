import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { FormsModule } from '@angular/forms';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EmpPreviewComponent } from './emp-preview/emp-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpViewComponent,
    EmpPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
