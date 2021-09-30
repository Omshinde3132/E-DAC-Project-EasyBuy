import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'omkar',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'manish',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
        
        name: 'MI Slim Shirt',
        category: 'T-shirts',
        image: '/images/p1.jpg',
        price: 120,
        countInStock:10,
        brand: 'MI',
        rating: '4.5',
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'CSK Slim Shirt',
        category: 'T-shirts',
        image: '/images/p2.jpg',
        price: 100,
        countInStock:20,
        brand: 'CSK',
        rating: '4.0',
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'RCB Slim Shirt',
        category: 'T-shirts',
        image: '/images/p3.jpeg',
        price: 130,
        countInStock:0,
        brand: 'RCB',
        rating: '4.5',
        numReviews: 10,
        description: 'high quality product',
    },
    {
       
        name: 'DD Slim Shirt',
        category: 'T-shirts',
        image: '/images/p4.jpeg',
        price: 140,
        countInStock:14,
        brand: 'DD',
        rating: '4.7',
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'KKR Slim Shirt',
        category: 'T-shirts',
        image: '/images/p5.jpeg',
        price: 150,
        countInStock:12,
        brand: 'KKR',
        rating: '4.5',
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'RR Slim Shirt',
        category: 'T-shirts',
        image: '/images/p6.jpeg',
        price: 160,
        countInStock:11,
        brand: 'RR',
        rating: '4.5',
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'CSK Slim Shirt 2',
        category: 'T-shirts',
        image: '/images/p7.jpg',
        price: 170,
        countInStock:12,
        brand: 'CSK2',
        rating: '4.5',
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'DD Slim Shirt2',
        category: 'T-shirts',
        image: '/images/p8.jpeg',
        price: 200,
        countInStock:11,
        brand: 'DD',
        rating: '4.5',
        numReviews: 10,
        description: 'high quality product',
    },

],
};

export default data;
