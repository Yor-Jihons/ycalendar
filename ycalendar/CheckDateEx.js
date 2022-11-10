"use strict";

class CheckDateEx{

    #date;

    constructor( year, month, day ){
        this.#date = new Date( year, month, day, 1, 1, 1, 1 );
    }

    equals( d ){
        if( this.#date.getFullYear() == d.#date.getFullYear()
        && this.#date.getMonth() == d.#date.getMonth()
        && this.#date.getDate() == d.#date.getDate() ) return true;
    return false;
    }

    toString(){
        return this.#date.toDateString();
    }
}
