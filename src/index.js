import './style.scss';

class El {
    constructor() {
        this._sto;
        this._idx;
        this._finTimes = 1;
        this._times = 0;
        this._arrAttr = {};
        this._arrAttr.time = [];
        this._arrAttr.transition = [];
        this._arrAttr.transform = [];
        this._arrAttr.exTransform = [];
        this._el = document.getElementsByTagName('div');
        this._finTimes = this._el.length;
    }
}

class Event extends El {
    repeat_method() {
        if (this._el[this._times] === undefined) {
            return false;
        }
        this._el[this._times].classList.add('active');
        (this._arrAttr.transform[this._times] !== null) && (this._el[this._times].querySelector('p').setAttribute('style', 'transform:' + this._arrAttr.transform[this._times]));
        if (this._el[this._times - 1] === undefined) {
            this._el[this._finTimes - 1].classList.remove('active');
            return false;
        }
        this._el[this._times - 1].classList.remove('active');
        if (this._times === this._finTimes) {

        }
        // console.log(this._el);
    }
    chk_idx() {
        this._idx = this._times;
        return this._idx;
    }
}

class Repeat extends Event {
    constructor() {
        super();
        this._done = true;
    }
    repeat() {
        // console.log(this._done);
        if (this._done === false) { return false; }
        if (this._times < this._finTimes) {
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
    stop() {
        this._done = false;
    }
    continue() {
        this._times = this._idx || 0;
        this._done = true;
    }
    restart() {
        this._times = 0;
        this._done = true;
    }
}

class Animation extends Repeat {
    method() {
        this.repeat();
    }
    spoid() {
        for (var i = 0; i < this._el.length; i++) {
            this._arrAttr.time[i] = this._el[i].getAttribute('data-time');
            this._arrAttr.transition[i] = this._el[i].getAttribute('data-transition');
            this._arrAttr.transform[i] = this._el[i].getAttribute('data-transform');
            this._arrAttr.exTransform[i] = this._el[i].getAttribute('data-ex-transform');
            this._el[i].querySelector('p').setAttribute('style', 'transform:' + this._arrAttr.exTransform[i]);
        }
        // console.log(this._arrAttr);
        return this._arrAttr;
    }
}

const start = new Animation;
start.method();
start.spoid();

// document.getElementById('stop').onclick = function () {
//     alert('에니메이션이 멈춥니다.');
//     start.chk_idx();
//     start.stop();
// }

// document.getElementById('reStart').onclick = function () {
//     alert('에니메이션이 다시 시작합니다.');
//     // console.log(start.method.constructor())
//     start.continue();
//     start.method();
// }

// document.getElementById('newStart').onclick = function () {
//     alert('에니메이션이 새로 시작합니다.');
//     // console.log(start.method.constructor())
//     start.reset();
//     start.method();
//     start.spoid();
// }