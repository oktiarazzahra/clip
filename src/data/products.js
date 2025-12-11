
// Daftar produk untuk aplikasi CLIPCHIP
// Setiap produk memiliki: ID unik, nama, harga, gambar, dan deskripsi

const products = [
  { 
    id: 1, 
    name: 'Flower Hair Claw', 
    price: 15000, 
    image: import.meta.env.BASE_URL + 'images/flower.jpg',
    description: 'A charming hair claw with delicate flower patterns. Perfect for adding a cute touch to your everyday look.'
  },
  { 
    id: 2, 
    name: 'Blue Bloom Hair Claw', 
    price: 55000, 
    image: import.meta.env.BASE_URL + 'images/blue-bloom.jpg',
    description: 'A cream-colored hair claw decorated with pastel blue flowers. Made from durable acrylic for a touch of elegance and charm.'
  },
  { 
    id: 3, 
    name: 'Twisted Pearl Hair Claw', 
    price: 30000, 
    image: import.meta.env.BASE_URL + 'images/pearl.jpg',
    description: 'An elegant twisted design adorned with pearl accents. Adds sophistication to any hairstyle.'
  },
  { 
    id: 4, 
    name: 'Mint Marble Hair Claw', 
    price: 55000, 
    image: import.meta.env.BASE_URL + 'images/mint.jpg',
    description: 'A refreshing mint-colored marble pattern hair claw. Stylish and perfect for a trendy look.'
  },
  { 
    id: 5, 
    name: 'Koi Dream Hair Claw', 
    price: 39000, 
    image: import.meta.env.BASE_URL + 'images/koi.jpg',
    description: 'Featuring adorable koi fish design. A unique and playful accessory for your hair.'
  },
  { 
    id: 6, 
    name: 'Starfish Pearl Hair Claw', 
    price: 70000, 
    image: import.meta.env.BASE_URL + 'images/starfish.jpg',
    description: 'A luxurious starfish design with pearl embellishments. Perfect for special occasions.'
  },
  { 
    id: 7, 
    name: 'Rainbow Twist Hair Claw', 
    price: 59000, 
    image: import.meta.env.BASE_URL + 'images/rainbow.jpg',
    description: 'A vibrant rainbow twisted design that brings color and joy to your hairstyle.'
  },
  { 
    id: 8, 
    name: 'Shell Glow Hair Claw', 
    price: 35000, 
    image: import.meta.env.BASE_URL + 'images/shell.jpg',
    description: 'A cute shell-shaped hair claw with a subtle glow effect. Perfect for beach vibes.'
  }
  
]

export default products
export const getProductById = (id) => products.find(p => p.id === parseInt(id))
