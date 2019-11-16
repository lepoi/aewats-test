import { Component, OnInit } from '@angular/core';

import AewaComponent from './../aewa/aewa.component';
import IAewa from './../../interfaces/aewa';

import data from './../../assets/data/aewas.json';

@Component({
    selector: 'aewats-screen1',
    templateUrl: './screen1.component.html',
    styleUrls: ['./screen1.component.sass']
})

export default class Screen1Component implements OnInit {
    private aewas: IAewa[];

    constructor() {}
    
    ngOnInit() {
        this.aewas = data;
    }
}
