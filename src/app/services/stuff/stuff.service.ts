import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export default class StuffService {
    public stuff: number;
    
    constructor() {
        this.stuff = Math.floor(Math.random() * 100);

        setInterval(
            _ => this.stuff = Math.floor(Math.random() * 100),
            1000
        );
    }
}
