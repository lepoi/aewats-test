import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import HomeComponent from './home/home.component';
import Home1Component from './home/home1/home1.component';
import Home2Component from './home/home2/home2.component';
import Screen1Component from './screen1/screen1.component';

import AewaComponent from './aewa/aewa.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'home1', component: Home1Component },
        { path: 'home2', component: Home2Component }
    ] },
    { path: 'screen1', component: Screen1Component }
];

@NgModule({
    declarations: [
        HomeComponent,
        Home1Component,
        Home2Component,
        Screen1Component,
        AewaComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
