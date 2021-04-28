import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';

import {
  PlusOutline,
  CaretLeftFill,
  SaveFill,
  SolutionOutline,
  ProfileOutline,
} from '@ant-design/icons-angular/icons';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { HomeComponent } from './home/home.component';
const icons: IconDefinition[] = [
  PlusOutline,
  CaretLeftFill,
  SaveFill,
  SolutionOutline,
  ProfileOutline,
];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CreateSurveyComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
