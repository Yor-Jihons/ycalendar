"use strict";


(function(){
    window.NameSpace1 = window.NameSpace1 || {};

    window.NameSpace1.CheckDateList = class{
        #dateExs;

        constructor(){
            this.#dateExs = new Array();
        }

        add( d ){
            this.#dateExs.push( d );
        }

        clear(){
            this.#dateExs.splice( 0 );
        }

        at( target ){
            for( let i = 0; i < this.#dateExs.length; i++ ){
                if( this.#dateExs[i].equals( target ) == true ){
                    return this.#dateExs[i];
                }
            }
        return null;
        }

        /**
         * 
         * @param {*} target the object of the class DateEx, which you want to search.
         * @returns Returns true if this object has the target, otherwise return false.
         */
        has( target ){
            return(this.at( target ) == null ? false : true);
        }

        print(){
            var txt = "";
            for( let i = 0; i < this.#dateExs.length; i++ ){
                txt += this.#dateExs[i].toString() + "\n";
            }
            alert( txt );
        }
    }

})();
