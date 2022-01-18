import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeroComponent, PostsComponent, SidebarComponent, HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
