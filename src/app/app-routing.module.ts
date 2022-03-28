import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { GalleryResolverService } from './gallery/gallery-resolver.service';


const appRoutes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'gallery', component: GalleryComponent,

    children: [
      { path: 'new', component: GalleryEditComponent, canActivate: [AuthGuard], },
      {
        path: ':id', component: GalleryDetailComponent, canActivate: [AuthGuard],
        resolve: [GalleryResolverService]
      },
      {
        path: ':id/edit', component: GalleryEditComponent, canActivate: [AuthGuard],
        resolve: [GalleryResolverService]
      }
    ]
  },
  { path: 'auth', component: AuthComponent }
];






@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }


