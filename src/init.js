import {Header} from './blocks/Header/Header';
import {Accordion} from './blocks/Accordion/Accordion';
import {Slider} from './blocks/Slider/Slider';
import {Location} from './pages/path/Location/Location';
import {HouseModal} from './pages/gallery/HouseModal/HouseModal';

(() => {
    new Header();
    new Accordion();
    new Slider();
    new Location();
    new HouseModal();
})();
