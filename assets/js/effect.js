const effectObj = {
    effect1: {  //파란 애디션
        tmpl: (num) => {
            const tmpl = document.createElement('div');
            tmpl.classList.add('num-wrapper');
            tmpl.classList.add('effect1');
            tmpl.innerHTML = `
                <div class="num">${num}</div>
                <div class="effect-obj1">
                    <div class="effect-obj1-1" style="box-shadow: 0 0 5px blue, inset 0 0 10px blue;"></div>
                </div>
            `;
            return tmpl;
        }
    },
    effect2: {  //랜덤컬러 무지개 에디션
        tmpl: (num) => {
            const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
            const color = colorArr[getRandomNum(0, colorArr.length - 1)];
            
            function getRandomNum(mn, mx){return Math.floor(Math.random() * (mx - mn + 1)) + mn;};
            const tmpl = document.createElement('div');
            tmpl.classList.add('num-wrapper');
            tmpl.classList.add('effect1');
            tmpl.innerHTML = `
                <div class="num">${num}</div>
                <div class="effect-obj1">
                    <div class="effect-obj1-1" style="box-shadow: 0 0 5px ${color}, inset 0 0 10px ${color};"></div>
                </div>
            `;
            return tmpl;
        }
    },
    effect3: { 
        tmpl: (num) => {
            const tmpl = document.createElement('div');
            tmpl.classList.add('num-wrapper');
            tmpl.classList.add('effect2');
            tmpl.innerHTML = `
            <div class="effect-obj1 num">${num}</div>
            <div class="effect-obj2 num">${num}</div>
            `;
            return tmpl;
        }
    },
    effect4: { 
        tmpl: (num) => {
            const tmpl = document.createElement('div');
            tmpl.classList.add('num-wrapper');
            tmpl.classList.add('effect3');
            tmpl.innerHTML = `<div class="effect-obj1 num">${num}</div>`;
            return tmpl;
        }
    }
}

// function getRandomNum(mn, mx){return Math.floor(Math.random() * (mx - mn + 1)) + mn;};
// const qs = function(t){return document.querySelector(t);}
// const qsa = function(t){return document.querySelectorAll(t);}



