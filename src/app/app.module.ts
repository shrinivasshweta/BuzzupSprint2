import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule,MatRippleModule, MatNavList } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent
    ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatRippleModule,
    NgMatSearchBarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
