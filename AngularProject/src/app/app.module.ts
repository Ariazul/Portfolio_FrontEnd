import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { MailcolumnComponent } from './components/mailcolumn/mailcolumn.component';
import { AboutsectionComponent } from './components/aboutsection/aboutsection.component';
import { SkillssectionComponent } from './components/skillssection/skillssection.component';
import { EducationComponent } from './components/education/education.component';
import { WorksectionComponent } from './components/worksection/worksection.component';
import { WorkmusicComponent } from './components/workmusic/workmusic.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsectionComponent } from './components/contactsection/contactsection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    MailcolumnComponent,
    AboutsectionComponent,
    SkillssectionComponent,
    EducationComponent,
    WorksectionComponent,
    WorkmusicComponent,
    FooterComponent,
    ContactsectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
