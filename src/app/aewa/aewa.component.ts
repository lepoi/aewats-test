import { Component, Input, Output, EventEmitter } from '@angular/core';

import IAewa from './../../interfaces/aewa';

@Component({
    selector: 'aewa',
    templateUrl: 'aewa.component.html',
    styleUrls: ['aewa.component.sass']
})

export default class AewaComponent {
    @Input() aewa: IAewa;
    @Output() aewaEvent: EventEmitter<object>;

    constructor() {
        this.aewaEvent = new EventEmitter<object>();
    }
}