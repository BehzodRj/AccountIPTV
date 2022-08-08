import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { HeaderComponent } from './header/header.component';
import { ChannelAddPageComponent } from './channel-add-page/channel-add-page.component';
import { AddCotegoryPageComponent } from './add-cotegory-page/add-cotegory-page.component';
import { EditingChannalPageComponent } from './editing-channal-page/editing-channal-page.component';
import { EditCategoryPageComponent } from './edit-category-page/edit-category-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AddClientPageComponent } from './add-client-page/add-client-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientPageComponent,
    ChannelPageComponent,
    HeaderComponent,
    ChannelAddPageComponent,
    AddCotegoryPageComponent,
    EditingChannalPageComponent,
    EditCategoryPageComponent,
    AuthPageComponent,
    AddClientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
