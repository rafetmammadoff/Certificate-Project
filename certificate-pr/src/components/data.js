
import f1 from '../assets/img/f1.jpg'
import f7 from '../assets/img/f7.jpg'
import f12 from '../assets/img/f12.jpg'
import f13 from '../assets/img/f13.jpg'
import f21 from '../assets/img/f21.jpg'
import f22 from '../assets/img/f22.jpg'
import f23 from '../assets/img/f23.jpg'
import f31 from '../assets/img/f31.jpg'
import f32 from '../assets/img/f32.jpg'
import f41 from '../assets/img/f41.jpg'
import f42 from '../assets/img/f42.jpg'
import f51 from '../assets/img/f51.jpg'
import f52 from '../assets/img/f52.jpg'
import f61 from '../assets/img/f61.jpg'
import f62 from '../assets/img/f62.jpg'
import f81 from '../assets/img/f81.jpg'
import f82 from '../assets/img/f82.jpg'
import f83 from '../assets/img/f83.jpg'
import f91 from '../assets/img/f91.jpg'
import f92 from '../assets/img/f92.jpg'
import f101 from '../assets/img/f101.jpg'
import f102 from '../assets/img/f102.jpg'
import f103 from '../assets/img/f103.jpg'

const data ={
    productData:[
        {
            id:1,
            img1:f1,
            img2: f12,
            img3:f13,
            about:"eli",
            price: 924
        },
        {
            id:2,
            img1:f1,
            img2: f21,
            img3:f22,
            about:"nurlan",
            price: 4
        },
        {
            id:3,
            img1:f1,
            img2: f21,
            img3:f22,
            about:"rafet",
            price: 94
        },
        {
            id:4,
            img1:f1,
            img2: f21,
            img3:f22,
            about:"rafet",
            price: 94
        },
        {
            id:5,
            img1:f1,
            img2: f21,
            img3:f22,
            about:"rafet",
            price: 94
        },
        {
            id:6,
            img1:f1,
            img2: f21,
            img3:f22,
            about:"rafet",
            price: 94
        }
    ]
}


const twoDimensionArray = [];

while(data.productData.length > 0){
    twoDimensionArray.push(data.productData.splice(0,2));
}
// [[{},{}],[{},{}], [{},{}]]

export default twoDimensionArray;