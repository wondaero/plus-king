const effectObj = {
    effect1: {
        tmpl: (num) => {
            const tmpl = document.createElement('div');
            tmpl.classList.add('num-wrapper');
            tmpl.classList.add('effect1');
            tmpl.innerHTML = `
                <div class="num">${num}</div>
                <div class="effect-obj" style="border: 3px solid blue; border-radius: 50%;"></div>
            `;
            return tmpl;
        },
        effect: (target) => {
            return function(){
                const target = target.querySelector('.effect-obj');
                target.style.transform = 'scale'


                console.log(target);
            }
        }
    }
}