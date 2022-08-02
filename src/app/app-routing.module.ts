import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: ChannelPageComponent },
  { path: '/client', component: ClientPageComponent },
  { path: '/header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
