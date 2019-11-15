import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import StuffService from './../../services/stuff/stuff.service';

@Component({
    selector: 'aewats-home-1',
    templateUrl: './home1.component.html',
    styleUrls: ['./home1.component.scss']
})

export class Home1Component implements OnInit {
    public stuff: number;
    public stuffObservable: Observable<number>;

    constructor(private stuffService: StuffService) {
        this.stuffObservable = this.stuffService.listen();
    }

    ngOnInit() {
        this.stuff = this.stuffService.getStuff();
        this.stuffObservable.subscribe(data => this.stuff = data);
    }
}
