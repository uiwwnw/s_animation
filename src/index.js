import './style.scss';

class Event {
    repeat_method() {
        if (this._el[this._times] === undefined) {
            return false;
        }
        this._el[this._times].classList.add('active');
        if (this._el[this._times - 1] === undefined) {
            return false;
        }
        this._el[this._times - 1].classList.remove('active');
        // console.log(this._el);
    }
}

class Repeat extends Event {
    constructor() {
        super();
        this._sto;
        this._finTimes = 1;
        this._times = 0;
        this._done = false;
    }
    repeat() {
        if (!this._done === false || this._times < this._finTimes) {
            const _this = this;
            clearTimeout(_this._sto);
            _this._sto = setTimeout(function () {
                // console.log(_this._times);
                _this.repeat_method();
                _this.repeat();
                _this.return();
                _this._times += 1;
            }, _this._arrAttr[this._times]);
        }
    }
    return() {
        return this._times;
    }
}

class Animation extends Repeat {
    constructor() {
        super();
        this._arrAttr = [];
        this._el = document.getElementsByTagName('div');
        this._finTimes = this._el.length;
    }
    method() {
        this.repeat();
    }
    spoid() {
        for(var i = 0; i < this._el.length; i ++) {
            this._arrAttr[i] = this._el[i].getAttribute('data-time');
        }
        return this._arrAttr;
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

const start = new Animation;
start.method();
start.spoid();
// const e = new active;
// console.log(e)
// e.method(1000);
// const a = new sto();
// a.return()
// console.log(a.return())
// a.method()
