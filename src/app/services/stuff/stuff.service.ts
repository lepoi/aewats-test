import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StuffService {
    lastTick: number;
    stuff: number;

    constructor() {
        this.lastTick = new Date().getDate();
    }

    getStuff() {
        const newTick: number = new Date().getDate();
        
        if (newTick - this.lastTick > 1000) {
            this.stuff = Math.random();
            this.lastTick = newTick;
        }

        return this.stuff;
    }
}