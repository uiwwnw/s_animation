import './style.scss';

class Event {
    repeat_method() {
        if (this._el[this._times] === undefined) {
            return false;
        }
        this._el[this._times].classList.add('active');
        (this._arrAttr.transform[this._times]!==null)&&(this._el[this._times].setAttribute('style', 'transform:' + this._arrAttr.transform[this._times]));
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
            }, _this._arrAttr.time[this._times]);
        }
    }
    return() {
        return this._times;
    }
}

class Animation extends Repeat {
    constructor() {
        super();
        this._arrAttr = {};
        this._arrAttr.time = [];
        this._arrAttr.transition = [];
        this._arrAttr.transform = [];
        this._arrAttr.exTransform = [];
        this._el = document.getElementsByTagName('div');
        this._finTimes = this._el.length;
    }
    method() {
        this.repeat();
    }
    spoid() {
        for(var i = 0; i < this._el.length; i ++) {
            this._arrAttr.time[i] = this._el[i].getAttribute('data-time');
            this._arrAttr.transition[i] = this._el[i].getAttribute('data-transition');
            this._arrAttr.transform[i] = this._el[i].getAttribute('data-transform');
            this._arrAttr.exTransform[i] = this._el[i].getAttribute('data-ex-transform');
            this._el[i].setAttribute('style', 'transform:'+this._arrAttr.exTransform[i]);
        }
        // console.log(this._arrAttr);
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
