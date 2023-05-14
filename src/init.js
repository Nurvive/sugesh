import {Header} from './blocks/Header/Header';
import {Slider} from './blocks/Slider/Slider';
import {HouseModal} from './pages/gallery/HouseModal/HouseModal';
import {GalleryBlock} from './blocks/GalleryBlock/GalleryBlock';
import {Menu} from './pages/cafe/Menu/Menu';

(() => {
    new Header();
    new Slider();
    new HouseModal();
    new GalleryBlock();
    new Menu();
})();
