import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import StuffService from './../../services/stuff/stuff.service';

@Component({
    selector: 'aewats-home-1',
    templateUrl: './home1.component.html',
    styleUrls: ['./home1.component.sass']
})

export default class Home1Component implements OnInit {
    constructor(private stuffService: StuffService) {}

    ngOnInit() {}
}
