import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add-modify/add.component';
import { ModifyComponent } from './add-modify/modify.component';
import { BulkComponent } from './bulk/bulk.component';
import { AboutComponent } from './about/about.component';
import { AudioPlayComponent } from './component/audio-play/audio-play.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgImageSliderModule } from 'ng-image-slider';
import { LightboxComponent } from './component/lightbox/lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,ModifyComponent,
    AboutComponent,
    AudioPlayComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule,NgImageSliderModule,
    AppRoutingModule,HttpClientModule,FormsModule,NgxImageZoomModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
