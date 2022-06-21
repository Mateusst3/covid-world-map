import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
