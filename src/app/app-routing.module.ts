import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCotegoryPageComponent } from './add-cotegory-page/add-cotegory-page.component';
import { ChannelAddPageComponent } from './channel-add-page/channel-add-page.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { EditCategoryPageComponent } from './edit-category-page/edit-category-page.component';
import { EditingChannalPageComponent } from './editing-channal-page/editing-channal-page.component';

const routes: Routes = [
  { path: '', component: ChannelPageComponent },
  { path: 'client', component: ClientPageComponent },
  { path: 'addChannel', component: ChannelAddPageComponent },
  { path: 'addCategory', component: AddCotegoryPageComponent },
  { path: 'editChannel', component: EditingChannalPageComponent },
  { path: 'editCategory', component: EditCategoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
