import Glide from '@glidejs/glide';

export class Slider {
    constructor() {
        const sliders = document.querySelectorAll('.js-glide');
        if (sliders.length) {
            sliders.forEach((slider) => new Glide(slider).mount());
        }
    }
}
