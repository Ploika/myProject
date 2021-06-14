import { InterceptorService } from './services/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { PostersPreviewComponent } from './components/posters-preview/posters-preview.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { PosterPreviewDetailsComponent } from './components/poster-preview-details/poster-preview-details.component';
import { GenresComponent } from './components/genres/genres.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { GenreComponent } from './components/genre/genre.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { GenreCurrentListComponent } from './components/genre-current-list/genre-current-list.component';
import { GenreCurrentDetailsComponent } from './components/genre-current-details/genre-current-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'PosterPreviewDetails', component: PosterPreviewDetailsComponent},
  {path: ':id', component: GenresListComponent},
  {path: ':id/genreCurrentDetails', component: GenreCurrentDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailsComponent,
    StarsRatingComponent,
    PostersPreviewComponent,
    PosterPreviewComponent,
    PosterPreviewDetailsComponent,
    GenresComponent,
    UserInfoComponent,
    GenreComponent,
    GenresListComponent,
    GenreCurrentListComponent,
    GenreCurrentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
