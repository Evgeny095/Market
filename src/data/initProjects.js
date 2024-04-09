import prew_1 from '../img/projects/pr_preview_1.jpg';
import prew_2 from '../img/projects/pr_preview_2.png';
import prew_3 from '../img/projects/pr_preview_3.png';
import prew_4 from '../img/projects/pr_preview_4.png';
import prew_5 from '../img/projects/pr_preview_5.png';
import prew_6 from '../img/projects/pr_preview_6.png';
import prew_7 from '../img/projects/pr_preview_7.jpg';

import img_11 from '../img/projects/full/pr_1.1.jpg'
import img_12 from '../img/projects/full/pr_1.2.jpg'
import img_13 from '../img/projects/full/pr_1.3.jpg'

import img_21 from '../img/projects/full/pr_2.1.jpg'
import img_22 from '../img/projects/full/pr_2.2.png'

import img_31 from '../img/projects/full/pr_3.1.jpg'
import img_32 from '../img/projects/full/pr_3.2.jpg'
import img_33 from '../img/projects/full/pr_3.3.jpg'

import img_41 from '../img/projects/full/pr_4.1.jpg'
import img_42 from '../img/projects/full/pr_4.2.jpg'
import img_43 from '../img/projects/full/pr_4.3.jpg'

import img_51 from '../img/projects/full/pr_5.1.jpg'
import img_52 from '../img/projects/full/pr_5.2.jpg'
import img_53 from '../img/projects/full/pr_5.3.jpg'

import img_61 from '../img/projects/full/pr_6.1.jpg'
import img_62 from '../img/projects/full/pr_6.2.jpg'

import img_71 from '../img/projects/full/pr_7.1.jpg'
import img_72 from '../img/projects/full/pr_7.2.jpg'

const init_Projects = [
    {
        id: 1,
        img: prew_1,
        header: 'Частный дом',
        description: 'Компания успешно завершила строительство проекта частного дома, обеспечивая высокое качество работы и удовлетворение потребностей клиента',
        picturesForGallery: [img_11, img_12, img_13],
        category: 2
    },
    {
        id: 2,
        img: prew_4,
        header: 'Дом ЖК Изумрудный лес',
        description: 'Доставка материалов на строительство и отделку домов в ЖК Изумрудный лес',
        picturesForGallery: [img_41, img_42, img_43],
        category: 3
    },
    {
        id: 3,
        img: prew_5,
        header: 'Подбор и доставка материалов',
        description: 'Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке',
        picturesForGallery: [img_51, img_52, img_53],
        category: 2
    },
    {
        id: 4,
        img: prew_3,
        header: 'Администрация города',
        description: 'Реставрация административного здания города',
        picturesForGallery: [img_31, img_32, img_33],
        category: 1
    },
    {
        id: 5,
        img: prew_2,
        header: 'Аэропорт города',
        description: 'Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке',
        picturesForGallery: [img_21, img_22],
        category: 1
    },
    {
        id: 6,
        img: prew_6,
        header: 'Дом ЖК "Мой городок"',
        description: 'Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке',
        picturesForGallery: [img_61, img_62],
        category: 3
    },
    {
        id: 7,
        img: prew_7,
        header: 'Отель в лесу"',
        description: 'Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке',
        picturesForGallery: [img_71, img_72],
        category: 2
    },
    {
        id: 8,
        img: prew_6,
        header: 'Дом ЖК "Мой городок"',
        description: 'Комплекс услуг по доставке товара на Ваш строительный объект. Комплекс услуг по доставке',
        picturesForGallery: [img_61, img_62],
        category: 3
    },

]

export { init_Projects }