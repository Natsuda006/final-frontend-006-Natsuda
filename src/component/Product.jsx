import React from "react";
import avatar from "../assets/images/1.jpg";
import avatar2 from "../assets/images/2.jpg";
import avatar3 from "../assets/images/3.jpg";
import avatar4 from "../assets/images/4.jpg";

const ProductsBox = () => (
  <section className="section" id="project">
    <div className="top-header">
      <h1>Popular Products</h1>
    </div>
    <div className="products-container">
      {/* Product 1 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar} alt="1." />
        </div>
        <h3>Blush</h3>
        <p>บัชออน ให้ลุคหวานใส สดใส ดูเป็นธรรมชาติ.</p>
        <p className="price">599 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือ
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar2} alt="Liquid Soap" />
        </div>
        <h3> Dior Addict Lip Glow</h3>
        <p>ลิปบาล์มสีชมพู</p>
        <p className="price">$45 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือสินค้าเลย
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar3} alt="Hand Wash" />
        </div>
        <h3>Chanel Perfume</h3>
        <p>น้ำหอมชาแนลเป็นสัญลักษณ์ของความหรูหราและความเป็นเลิศในวงการน้ำหอม </p>
        <p className="price">4990 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือ
          </button>
        </div>
      </div>

      {/* Product 4 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar4} alt="Cleansing Foam" />
        </div>
        <h3>Chanel Coco
        </h3>
        <p>น้ำหอม Chanel Coco เป็นน้ำหอมที่สะท้อนถึงความหรูหราและสง่างาม ด้วยกลิ่นหอมที่มีเอกลักษณ์และซับซ้อนประกอบไปด้วยดอกไม้และเครื่องเทศ </p>
        <p className="price">1,500 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsBox;
