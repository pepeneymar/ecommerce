import React, { useState } from 'react';
import Product from '@/medel/Product';

function HomePage() {
  const [products, setProducts] = useState([
    new Product(1, ' ตัวอย่าง a ', 10),
    new Product(2, ' ตัวอย่าง b', 20),
  ]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };
  return (
    <div>
       <ul>
        {products.map((product) => (
          <li key={product.id}>
            สินค้า{product.name} ราคา {product.price} บาท
            <button onClick={() => deleteProduct(product.id)}>ลบรายการ</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.elements.name.value;
          const price = parseFloat(e.target.elements.price.value);
          if (name && !isNaN(price)) {
            addProduct(new Product(products.length + 1, name, price));
          }
        }}
      >
        <input type="text" placeholder="ชื่อสินค้า" name="name" />
        <input type="number" placeholder="ราคา" name="price" />
        <button type="submit">เพิ่มสินค้า</button>
      </form>
    </div>
  );
}

export default HomePage;
