import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import StuffService from './../../services/stuff/stuff.service';

@Component({
    selector: 'aewats-home-2',
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.scss']
})

export class Home2Component implements OnInit {
    constructor(private stuffService: StuffService) {}

    ngOnInit() {}
}
