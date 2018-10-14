import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PostsListComponent,
    DemoWrapperComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
