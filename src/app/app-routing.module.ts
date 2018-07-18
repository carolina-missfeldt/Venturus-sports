import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: {
          breadcrumb: 'Users'
        }
      },
      {
        path: 'photos',
        component: PhotosComponent,
        data: {
          breadcrumb: 'Photos'
        }
      }
    ]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
