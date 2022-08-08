import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientPageComponent } from './add-client-page/add-client-page.component';
import { AddCotegoryPageComponent } from './add-cotegory-page/add-cotegory-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ChannelAddPageComponent } from './channel-add-page/channel-add-page.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { EditCategoryPageComponent } from './edit-category-page/edit-category-page.component';
import { EditingChannalPageComponent } from './editing-channal-page/editing-channal-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'channel', component: ChannelPageComponent },
  { path: 'addChannel', component: ChannelAddPageComponent },
  { path: 'editChannel', component: EditingChannalPageComponent },
  { path: 'addCategory', component: AddCotegoryPageComponent },
  { path: 'editCategory', component: EditCategoryPageComponent },
  { path: 'client', component: ClientPageComponent },
  { path: 'addclient', component:  AddClientPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
