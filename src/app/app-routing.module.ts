import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CallbackComponent } from "./pages/callback/callback.component";
import { AuthGuard } from "./auth/auth.guard";
import { AdminGuard } from "./auth/admin.guard";
import { AdminComponent } from './pages/admin/admin.component';
import { EventComponent } from "./pages/event/event.component";
import { CreateEventComponent } from "./pages/admin/create-event/create-event.component";
import { UpdateEventComponent } from "./pages/admin/update-event/update-event.component";
import { MyRsvpsComponent } from "./pages/my-rsvps/my-rsvps.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'event/new',
        component: CreateEventComponent
      },
      {
        path: 'event/update/:id',
        component: UpdateEventComponent
      }
    ]
  },
  {
    path: 'my-rsvps',
    component: MyRsvpsComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'event/:id',
    component: EventComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthGuard,
    AdminGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
