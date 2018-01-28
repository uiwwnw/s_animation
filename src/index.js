import './style.scss';

class active {
    constructor(time) {
        this.el = document.getElementsByTagName('div')[0]
        this._time = time;
    }
    method() {
        this.el.classList.add('active');
    }
}

class rep {
    repeat() {
        this.method();
    }
}



// class sto extends active {
//     constructor() {
//         super();
//         this._sto = 0;
//         // this._time = 500;
//     }
//     return() {
//         const th = this;
//         // console.log(this.method());
//         clearTimeout(this._sto);
//         this._sto = setTimeout(function() {
//             th.method();
//         }, this._time);
//     }
// }

// const e = new active;
// console.log(e)
// e.method(1000);
// const a = new sto();
// a.return()
// console.log(a.return())
// a.method()
