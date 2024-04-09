import icon_service_1 from '../img/services/service_1.svg';
import icon_service_1_white from '../img/services/service_1_white.svg';
import icon_service_2 from '../img/services/service_2.svg';
import icon_service_2_white from '../img/services/service_2_white.svg';
import icon_service_3 from '../img/services/service_3.svg';
import icon_service_3_white from '../img/services/service_3_white.svg';
import icon_service_4 from '../img/services/service_4.svg';
import icon_service_4_white from '../img/services/service_4_white.svg';


//<ServicesItem link='/services/service-1' icon_white={service_1_white} icon={service_1} header="Шеф-монтаж">Демонстрация секретов успешного строительства</ServicesItem>

const initServices=[
    {
        id:1,
        link:"/services/service-1",
        header:"Шеф-монтаж",
        children:"Демонстрация секретов успешного строительства",
        icon:icon_service_1,
        icon_white:icon_service_1_white
    },
    {
        id:2,
        link:"/services/service-2",
        header:"Кладка кирпича",
        children:"Кладка кирпича и блоков Pototherm",
        icon:icon_service_2,
        icon_white:icon_service_2_white
    },
    {
        id:3,
        link:"/services/service-3",
        header:"Сезонное хранение",
        children:"Хранение стройматериалов приобретенных зимой",
        icon:icon_service_3,
        icon_white:icon_service_3_white
    },
    {
        id:4,
        link:"/services/service-4",
        header:"Доставка стройматериалов ",
        children:"Комплекс услуг по доставке товара на Ваш строительный объект",
        icon:icon_service_4,
        icon_white:icon_service_4_white
    },
]

export {initServices}