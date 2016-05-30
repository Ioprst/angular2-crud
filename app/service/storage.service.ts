import {Injectable} from '@angular/core';

@Injectable()

export class LocalStorage {
    private _localStorage: any;

    constructor() {
        if (!window.localStorage)
            throw new Error("No localstorage");
        this._localStorage = window.localStorage;
    }

    public set(key: string, value: string): void {
        this._localStorage.setItem(key, JSON.stringify(value));
    }

    public get(key: string): string {
        var data = this._localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}