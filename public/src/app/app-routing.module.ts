import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetsNewComponent } from './pets/pets-new/pets-new.component';
import { PetsInfoComponent } from './pets/pets-info/pets-info.component';
import { PetsEditComponent } from './pets/pets-edit/pets-edit.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'pets/new', component: PetsNewComponent },
  { path: 'pets/info/:id', component: PetsInfoComponent },
  { path: 'pets/edit/:id', component: PetsEditComponent },
  { path: '', pathMatch: 'full', component: PetsComponent },
  { path: '**', redirectTo: '/pets' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
