import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export default class StuffService {
    private data: number;
    private stuff: Subject<number>
    
    constructor() {
        this.stuff = new Subject<number>();
        this.data = Math.floor(Math.random() * 100);

        setInterval(_ => {
            this.data = Math.floor(Math.random() * 100);
            this.stuff.next(this.data);
        }, 1000);
    }

    public getStuff(): number {
        return this.data;
    }

    public listen(): Observable<number> {
        return this.stuff.asObservable();
    }
}
