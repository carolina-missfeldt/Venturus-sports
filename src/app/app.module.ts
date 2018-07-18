import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './resources/services/user.service';
import { PhotoService } from './resources/services/photo.service';
import { AlbumService } from './resources/services/album.service';
import { PostService } from './resources/services/post.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PanelComponent } from './components/panel/panel.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PanelBottomComponent } from './components/registration/panel-bottom/panel-bottom.component';
import { RegistrationFormComponent } from './components/registration/registration-form/registration-form.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    BreadcrumbComponent,
    PanelComponent,
    RegistrationComponent,
    PanelBottomComponent,
    RegistrationFormComponent,
    PhotosComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    PostService,
    AlbumService,
    PhotoService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
