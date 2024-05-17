import category1 from '../assets/logo.png'
import fruits from '../assets/fruits.jpeg'
import veggies from '../assets/veggies.jpeg'
import crupi from '../assets/crupi.jpeg'
import bread from '../assets/bread.jpeg'

export const goodsCategories = [
    {
        id: 0,
        category: [
            {
                categoryName: 'Фрукты',
                img: fruits,
            }
        ]
    },
    {
        id: 1,
        category: [
            {
                categoryName: 'Овощи',
                img: veggies,
            }
        ]
    },
    {
        id: 2,
        category: [
            {
                categoryName: 'Крупы',
                img: crupi,
            }
        ]
    },
    {
        id: 3,
        category: [
            {
                categoryName: 'Выпечка',
                img: bread,
            }
        ]
    }
]