import './style.scss';

class repeat {
    constructor(time) {
        this._sto;
        this._time = time;
        this._times = 0;
        this._done = false;
    }
    repeat(method) {
        if (!this._done) {
            const _this = this;
            clearTimeout(_this._sto);
            _this._sto = setTimeout(function() {
                _this._times += 1;
                _this.repeat(method);
            }, _this._time);
        }
    }
}

class spoidAttr {
    constructor() {
        this._arrAttr={};
    }
    spoid(el, arr) {
        arr.forEach(function() {
            this._arrAttrel.arr.getAttribute(arr);
        });
        return this._arrAttr;
    }
}

class active extends repeat {
    constructor() {
        super();
        this._el = document.getElementsByTagName('div');
    }
    method() {
        this._time = 3000;
        this.repeat(this._el[0].classList.add('active'));
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

const e = new active;
e.method();
// const e = new active;
// console.log(e)
// e.method(1000);
// const a = new sto();
// a.return()
// console.log(a.return())
// a.method()
