import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 03052021:COMMENTARIO:NDAC: Rutas principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
