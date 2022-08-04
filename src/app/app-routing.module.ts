import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCotegoryPageComponent } from './add-cotegory-page/add-cotegory-page.component';
import { ChannelAddPageComponent } from './channel-add-page/channel-add-page.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { EditingChannalPageComponent } from './editing-channal-page/editing-channal-page.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: ChannelPageComponent },
  { path: 'client', component: ClientPageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'channelAdd', component: ChannelAddPageComponent },
  { path: 'addCotegory', component: AddCotegoryPageComponent },
  { path: 'EditingChanna', component: EditingChannalPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
