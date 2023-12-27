import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { AccountComponent } from './components/account/account.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AccountComponent,
    NavbarComponent,
    SpecializationsComponent,
    ProfileComponent,
    PaymentsComponent,
    MyCoursesComponent,
    EditProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: 'courses', component: CoursesComponent},
            {
                path: 'account', component: AccountComponent,
                children: [
                    {path: '', component: ProfileComponent},
                    {path: 'edit-profile', component: EditProfileComponent},
                    {path: 'payment', component: PaymentsComponent},
                    {path: 'courses', component: MyCoursesComponent}
                ]
            },
            {path: 'specialization', component: SpecializationsComponent},
        ]),
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        FormsModule,
        MatMenuModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
