import houses from '../../../houses/houses.json';
import Glide from '@glidejs/glide';
import '../../../assets/img/houses';

export class HouseModal {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.js-galleryLinks__button');
        if (buttons.length > 0) {
            buttons.forEach(button => button.addEventListener('click', this.handleButtonClick));
        }
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        this.button = e.currentTarget;
        this.number = Number(this.button.dataset.house);
        this.house = houses[this.number];
        this.createModal();
        this.showModal();
    };

    createModal = () => {
        this.modalWrapper = document.createElement('div');
        this.modalWrapper.classList.add('houseModal__wrapper');

        this.modal = document.createElement('div');
        this.modal.classList.add('houseModal');

        this.overlay = document.createElement('div');
        this.overlay.classList.add('houseModal__overlay');
        this.overlay.addEventListener('click', this.handleCloseModal);

        this.modalWrapper.append(this.overlay);
        this.modalWrapper.append(this.modal);

        this.createHeader();
        this.createSlider();
        this.createContent();
    };

    createHeader = () => {
        this.header = document.createElement('header');
        this.header.classList.add('houseModal__header');

        this.createTitle();
        this.createCloseButton();

        this.modal.append(this.header);
    };

    createTitle = () => {
        const modalInfo = document.createElement('h2');
        modalInfo.textContent = `Информация о домике №${this.number + 1}`;
        modalInfo.classList.add('houseModal__header-info');
        this.header.append(modalInfo);
    };

    createCloseButton = () => {
        const closeButton = document.createElement('div');
        closeButton.classList.add('houseModal__header-close');
        this.header.append(closeButton);
        closeButton.addEventListener('click', this.handleCloseModal);
    };

    createSlider = () => {
        const slider = document.createElement('div');
        slider.classList.add('houseModal__slider');

        const glide = document.createElement('div');
        glide.classList.add('glide', 'js-glide-modal');
        slider.append(glide);

        const track = document.createElement('div');
        track.classList.add('glide__track');
        track.dataset.glideEl = 'track';
        glide.append(track);

        const slides = document.createElement('ul');
        slides.classList.add('glide__slides');
        this.house.images.forEach(src => {
            const item = document.createElement('li');
            item.classList.add('glide__slide');

            const img = document.createElement('img');
            img.src = src;
            item.append(img);

            slides.append(item);
        });

        track.append(slides);

        this.modal.append(slider);
    };

    createContent = () => {
        this.modalContent = document.createElement('div');
        this.modalContent.classList.add('houseModal__content');
        this.createContentName();
        this.createContentBeds();
        this.createContentDescription();
        this.modal.append(this.modalContent);
    };

    createContentName = () => {
        const nameWrapper = document.createElement('div');

        const modalName = document.createElement('div');
        modalName.textContent = 'Наименование:';
        modalName.classList.add('houseModal__title');
        nameWrapper.append(modalName);

        const modalNameText = document.createElement('div');
        modalNameText.textContent = this.house.name;
        modalNameText.classList.add('houseModal__title-text');
        nameWrapper.append(modalNameText);

        this.modalContent.append(nameWrapper);
    };

    createContentBeds = () => {
        const bedsWrapper = document.createElement('div');

        const modalBeds = document.createElement('div');
        modalBeds.textContent = 'Кол-во спальных мест:';
        modalBeds.classList.add('houseModal__title');
        bedsWrapper.append(modalBeds);

        const modalBedsText = document.createElement('div');
        modalBedsText.textContent = this.house.beds;
        modalBedsText.classList.add('houseModal__title-text');
        bedsWrapper.append(modalBedsText);

        this.modalContent.append(bedsWrapper);
    };

    createContentDescription = () => {
        const descriptionWrapper = document.createElement('div');

        const modalDescription = document.createElement('div');
        modalDescription.textContent = 'Описание:';
        modalDescription.classList.add('houseModal__title');
        descriptionWrapper.append(modalDescription);

        if (this.house.subDescription) {
            const subDescription = document.createElement('div');
            subDescription.textContent = this.house.subDescription;
            subDescription.classList.add('houseModal__title-text');
            descriptionWrapper.append(subDescription);
        }

        const modalList = document.createElement('ul');
        modalList.classList.add('houseModal__list');
        this.house.description.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.classList.add('houseModal__list-item');
            listItem.textContent = item;
            modalList.append(listItem);
        });
        descriptionWrapper.append(modalList);

        this.modalContent.append(descriptionWrapper);
    };

    handleCloseModal = () => {
        this.modalWrapper.classList.remove('houseModal__wrapper_active');
        const body = document.querySelector('body');
        body.removeChild(this.modalWrapper);
    };

    showModal = () => {
        const body = document.querySelector('body');
        body.append(this.modalWrapper);
        this.modalWrapper.classList.add('houseModal__wrapper_active');
        new Glide('.js-glide-modal').mount();
    };
}
