import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KartaPreviewComponent } from './components/karta-preview/karta-preview.component';

const routes: Routes = [
  { path: 'karta', component: KartaPreviewComponent },
  { path: 'karta/:id', component: KartaPreviewComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
