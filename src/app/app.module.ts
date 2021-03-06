import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './home/nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleItemComponent } from './articles/article-list/article-item/article-item.component';
import { TagsComponent } from './tags/tags.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NewArticlesComponent } from './new-articles/new-articles.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'article/:slug', component: ArticleDetailComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'newarticle', component: NewArticlesComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'edit/:slug', component: NewArticlesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleItemComponent,
    TagsComponent,
    ArticleDetailComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NewArticlesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
