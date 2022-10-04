import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientPageComponent } from './add-client-page/add-client-page.component';
import { AddCotegoryPageComponent } from './add-cotegory-page/add-cotegory-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGuard } from './auth.guard';
import { ChannelAddPageComponent } from './channel-add-page/channel-add-page.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { EditCategoryPageComponent } from './edit-category-page/edit-category-page.component';
import { EditingChannalPageComponent } from './editing-channal-page/editing-channal-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'channel', component: ChannelPageComponent, canActivate: [AuthGuard] },
  { path: 'addChannel', component: ChannelAddPageComponent, canActivate: [AuthGuard] },
  { path: 'editChannel', component: EditingChannalPageComponent, canActivate: [AuthGuard] },
  { path: 'addCategory', component: AddCotegoryPageComponent, canActivate: [AuthGuard] },
  { path: 'editCategory', component: EditCategoryPageComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientPageComponent, canActivate: [AuthGuard] },
  { path: 'addclient', component: AddClientPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
