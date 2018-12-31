import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { PetsComponent } from './pets/pets.component';
import { PetsNewComponent } from './pets/pets-new/pets-new.component';
import { PetsInfoComponent } from './pets/pets-info/pets-info.component';
import { PetsEditComponent } from './pets/pets-edit/pets-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsNewComponent,
    PetsInfoComponent,
    PetsEditComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
