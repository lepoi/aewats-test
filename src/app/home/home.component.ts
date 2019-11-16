import { Component } from '@angular/core';

@Component({
    selector: 'aewats-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})

export default class HomeComponent {
    value: string;

    constructor() {
        this.value = 'Hola';
    }
}
