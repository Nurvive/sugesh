import Glide, {Breakpoints} from '@glidejs/glide';
import gallery from '../../static/gallery/gallery.json';

export class GalleryBlock {
    constructor() {
        this.glide = document.querySelector('.js-galleryBlock');

        if (this.glide) {
            this.glideClass = new Glide(this.glide, {
                perView: 2,
                breakpoints: {
                    1070: {
                        perView: 1
                    }
                }
            });
            this.list = document.querySelector('.js-galleryBlock__slides');
            this.currrent = gallery[0].name;
            this.init();
        }
    }

    init() {
        console.log(gallery);
        const buttons = gallery.map((item) => item.name);
        this.createButtons(buttons);
        const object = gallery.find((item) => item.name === this.currrent);
        this.createSlides(object.slides);
        this.createBullets(object.slides);
        this.glideClass.mount();
    }

    creating() {
        const object = gallery.find((item) => item.name === this.currrent);
        this.createSlides(object.slides);
        this.createBullets(object.slides);
        this.glideClass = new Glide(this.glide, {
            perView: 2,
            breakpoints: {
                1070: {
                    perView: 1
                }
            }
        });
        this.glideClass.mount();
    }

    removeBullets() {
        const bullets = document.querySelector('.js-galleryBlock__bullets');
        bullets?.remove();
    }

    removeSlides() {
        const slides = document.querySelectorAll('.js-galleryBlock__slide');
        slides.forEach((slide) => {
            slide.remove();
        });
    }

    createButtons(buttons) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('galleryBlock__buttons', 'js-galleryBlock__buttons');

        buttons.forEach((button, i) => {
            const newButton = document.createElement('button');
            newButton.classList.add('galleryBlock__button');

            if (i === 0) {
                newButton.classList.add('galleryBlock__button_active');
            }
            newButton.textContent = button;
            buttonContainer.append(newButton);
            newButton.addEventListener('click', this.changeSet);
        });

        this.glide.prepend(buttonContainer);
    }

    createBullets(bullets) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('glide__bullets', 'galleryBlock__bullets', 'js-galleryBlock__bullets');
        buttonContainer.dataset.glideEl = 'controls[nav]';

        bullets.forEach((button, i) => {
            const newButton = document.createElement('button');
            newButton.classList.add('glide__bullet', 'galleryBlock__bullet');
            newButton.dataset.glideDir = `=${i}`;
            newButton.textContent = i + 1;
            buttonContainer.append(newButton);
        });

        this.glide.append(buttonContainer);
    }

    createSlides(slides) {
        slides.forEach((slide) => {
            const newSlide = document.createElement('li');
            newSlide.classList.add('glide__slide', 'galleryBlock__slide', 'js-galleryBlock__slide');

            const wrapper = document.createElement('div');
            wrapper.classList.add('galleryBlock__item');
            slide.forEach((image) => {
                const newImg = document.createElement('img');
                const imgWrapper = document.createElement('div')
                imgWrapper.classList.add('galleryBlock__img-wrapper')
                newImg.loading = 'lazy';
                newImg.src = image;
                imgWrapper.append(newImg)
                wrapper.append(imgWrapper);
            });
            newSlide.append(wrapper);
            this.list.append(newSlide);
        });
    }

    changeSet = (event) => {
        const buttons = document.querySelector('.js-galleryBlock__buttons');
        Array.from(buttons.children).forEach((button) => {
            button.classList.remove('galleryBlock__button_active');
        });
        event.target.classList.add('galleryBlock__button_active');
        this.currrent = event.target.textContent;
        this.removeBullets();
        this.removeSlides();

        this.glideClass.destroy();
        this.creating();
    };
}
