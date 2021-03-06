import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductService } from './shared/product.service';
import { LoginComponent } from './login/login.component';
import {ServerrequestsService} from './servicerequests.service';
import { BookItemComponent } from './book-item/book-item.component';
import { BookModificationComponent } from './book-modification/book-modification.component';
import { HomeEComponent } from './home-e/home-e.component';
import { NavbarEComponent } from './navbar-e/navbar-e.component';
import { ReviewItemComponent } from './review-item/review-item.component';
import { SubmitNewBookComponent } from './submit-new-book/submit-new-book.component';
import { ReviewService } from './shared/review.service';
import { BookService } from './shared/books.service';
import { FilterPipe } from './filter.pipe';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { MybooksComponent } from './mybooks/mybooks.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SearchComponent,
    NavbarComponent,
    LoginComponent,
    BookItemComponent,
    BookModificationComponent,
    BookDetailComponent,
    HomeEComponent,
    NavbarEComponent,
    ReviewItemComponent,
    SubmitNewBookComponent,
    FilterPipe,
    WelcomeComponent,
    MybooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule, 
    RouterModule.forRoot([
      {path: '', /*redirectTo: '/login', pathMatch: 'full'},*/component: WelcomeComponent},
      {path: 'books', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'mybooks', component: MybooksComponent},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'books/:bookId', component: BookItemComponent},
      {path: 'homee', component: HomeEComponent}
    ])
  ],
  providers: [ProductService, ServerrequestsService, BookService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
