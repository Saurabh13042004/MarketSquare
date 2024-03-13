const products = [
    {
      name: 'Airpods Wireless Bluetooth Headphones',
      image: 'https://imgs.search.brave.com/ph_QWds11GqtPBWX00IqDmF-sABZ_QLp87gip7yQkDk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFYakU1N1ZMdkwu/anBn',
      description: 'Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers an immersive listening experience. Built-in microphone allows you to take calls while working.',
      brand: 'Apple',
      category: 'Electronics',
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      
      name: 'Samsung 4K UHD Smart TV',
      image: 'https://imgs.search.brave.com/31MEVedU-KV7Ic7WuGmHOGy_e2w8-PgK9wq02VVSZVQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFXOFN0dWwzd0wu/anBn',
      description: 'Enjoy stunning visuals with this Samsung 4K UHD Smart TV. It features a crystal-clear display, smart functionality, and seamless connectivity for an immersive viewing experience.',
      brand: 'Samsung',
      category: 'Electronics',
      price: 599.99,
      countInStock: 5,
      rating: 4,
      numReviews: 25,
    },
    {
      
      name: 'Canon EOS Rebel T7 DSLR Camera',
      image: 'https://imgs.search.brave.com/ylwJGoKSriRGSPy2YJrRKAk8m0dFFtNlRJN9vAn-lZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFXMUt2TEgzc0wu/anBn',
      description: 'Capture high-quality images and videos with the Canon EOS Rebel T7 DSLR Camera. It boasts advanced features, including a 24.1 Megapixel CMOS sensor and DIGIC 4+ Image Processor, for stunning results.',
      brand: 'Canon',
      category: 'Electronics',
      price: 499.99,
      countInStock: 8,
      rating: 4.6,
      numReviews: 18,
    },
    {
      
      name: 'Apple MacBook Pro',
      image: 'https://imgs.search.brave.com/aPWv4lMiCvwSWNmA1N4-656VVs957YWukvudYD0q8nE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL2lu/L21hYy9ob21lL2lt/YWdlcy9vdmVydmll/dy9hdWdtZW50L3dv/cmxkX21hY193YXRj/aF9fZGNrbjFvcnJw/a3FlX3hsYXJnZS5q/cGc',
      description: 'Experience unparalleled performance with the Apple MacBook Pro. Featuring a stunning Retina display, powerful processors, and all-day battery life, it\'s perfect for work and creative projects.',
      brand: 'Apple',
      category: 'Electronics',
      price: 1299.99,
      countInStock: 3,
      rating: 4.9,
      numReviews: 30,
    },
    {
      
      name: 'Nike Air Zoom Pegasus 38 Running Shoes',
      image: 'https://imgs.search.brave.com/YLDy8YgomkgP9-9AGoqfgIVYC8J5vRPeMhCLzzjA_AQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFwZkJmSmpuWkwu/anBn',
      description: 'Elevate your running experience with Nike Air Zoom Pegasus 38 Running Shoes. Featuring responsive cushioning and a breathable design, they provide comfort and support mile after mile.',
      brand: 'Nike',
      category: 'Sports & Outdoors',
      price: 119.99,
      countInStock: 15,
      rating: 4.7,
      numReviews: 22,
    },
    {
      
      name: 'Sony PlayStation 5 Gaming Console',
      image: 'https://imgs.search.brave.com/aqNCrHNBGoXUA8CNLkve74JmbzZXqUZU8pL2KrVXG8A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtV0hYWThoeUwu/anBn',
      description: 'Immerse yourself in next-gen gaming with the Sony PlayStation 5 Gaming Console. Featuring lightning-fast load times, stunning graphics, and innovative DualSense controller, it delivers an unparalleled gaming experience.',
      brand: 'Sony',
      category: 'Electronics',
      price: 499.99,
      countInStock: 7,
      rating: 4.9,
      numReviews: 35,
    },
    {
      
      name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
      image: 'https://imgs.search.brave.com/q8b_s__dTsXhTJTNDmsSEcTv3M-QvLrPHZg__YNVD3I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5rb2hsc2ltZy5j/b20vaXMvaW1hZ2Uv/a29obHMvMzA1NjQ2/N19BTFQ_d2lkPTM5/MCZoZWk9MzkwJm9w/X3NoYXJwZW49MQ',
      description: 'Simplify meal prep with the Instant Pot Duo 7-in-1 Electric Pressure Cooker. With seven cooking functions and advanced safety features, it\'s perfect for creating delicious meals with ease.',
      brand: 'Instant Pot',
      category: 'Home & Kitchen',
      price: 79.99,
      countInStock: 12,
      rating: 4.6,
      numReviews: 20,
    },
    {
      
      name: 'Apple Watch Series 6',
      image: 'https://imgs.search.brave.com/pRdnfEgWJp8VeHRyPLVkU2DNUPSKmqQyYPExeifgZwU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS9wcm9kdWN0/X3BhZ2VzLzE5OS1o/ZXJvLmpwZz89MTcw/OTQ5NDMxNw',
      description: 'Stay connected and track your fitness goals with the Apple Watch Series 6. Featuring advanced health monitoring, a stunning Retina display, and seamless integration with your iPhone, it\'s your ultimate companion.',
      brand: 'Apple',
      category: 'Electronics',
      price: 399.99,
      countInStock: 6,
      rating: 4.8,
      numReviews: 15,
    },
    {
      
      name: 'Yeti Rambler 30 oz Tumbler',
      image: 'https://imgs.search.brave.com/oiz_YkSo60rLbS7k-taAuJ4dgG7v0yDV4jbH_6JJGz0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxU2F1UkhKN1BM/LmpwZw',
      description: 'Keep your drinks at the perfect temperature with the Yeti Rambler 30 oz Tumbler. Whether hot or cold, its double-wall vacuum insulation ensures your beverages stay just the way you like them.',
      brand: 'Yeti',
      category: 'Home & Kitchen',
      price: 34.99,
      countInStock: 20,
      rating: 4.7,
      numReviews: 10,
    },
    {
      
      name: 'Amazon Echo Dot (4th Gen) Smart Speaker',
      image: 'https://imgs.search.brave.com/lxIWeqssxmPVF0duzi0q9LRT9MNgQcQVFXsTbhPMyVs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGVh/cmJ1eS1jbG91ZC5u/eWMzLmRpZ2l0YWxv/Y2VhbnNwYWNlcy5j/b20vbWVkaWEvNDg4/NS9BbWF6b24tRWNo/by1Eb3QuanBn',
      description: 'Control your smart home and enjoy crisp, clear sound with the Amazon Echo Dot (4th Gen) Smart Speaker. With Alexa built-in, it\'s your voice-controlled assistant for music, news, and more.',
      brand: 'Amazon',
      category: 'Electronics',
      price: 49.99,
      countInStock: 0,
      rating: 4.5,
      numReviews: 28,
    }
  ];
  
  export default products;
  