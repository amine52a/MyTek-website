import iphone from './images/iphone.jpg';
import phone from './images/kdim.png';
import samsung from './images/samsung.jpg' ;
import air from './images/AirPods_Pro_2nd-Gen-1.png'
import aa from './images/OIP.jpg'
import kase from './images/OIP (1).jpg'

export const Product = [
 
  {
    name: 'Iphone 11',
  
    image: iphone, // Replace with actual image URL
    price: '1100 dt',
    category: 'Phone', 
     
  } ,
  {
    name: 'Home phone',
    image: phone,
    price: '89.99 dt',
    category: 'Phone', 
    // Add category here
  },
  {
    name: 'Iphone case',
    image: aa ,
    price: '10 dt',
    category: 'Accessories',  // Example of another category
  },
  {
    name: 'Product 4',
    image: 'https://via.placeholder.com/150',
    price: '39.99',
    category: 'Accessories',  // Example of another category
  },
  {
    name: 'Case Iphone',
    image: kase  ,
    
    price: '20 dt',
    category: 'Accessories',  
    // Example of another category
    
  },
  
  
  {
    name: 'Samsung Galaxy S21',
    image: samsung ,
    price: '1799 dt',
    category: 'Phone',  // Add category here
  },




  {
    name: 'Inkas-T02',
    image: air ,
    price: '29 dt',
    category: 'Airpods',  // Add category here
  },
 
];
