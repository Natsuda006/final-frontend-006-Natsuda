import React from "react";
import avatar from "../assets/images/6.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Natsuda shop</span>
        </div>
        <div className="featured-name">
        ยินดีตอนรับคุณลูกค้าทุกท่านสู่ Natsuda shop เรามีทั้ง <span className="TypedText"></span>
        </div>
        <div className="featured-text-info">
          <p className="featured-description">  
            เว็บไซต์นี้เป็นเว็ปไซต์ที่รวบรวมเครื่องสำอางและน้ำหอมไว้มากมายจากร้าน Natsuda shop ขอให้คุณลูกค้าเลือกซื้อได้เลยค่ะ
          </p>
        </div>

        <div className="featured-text-btn">
        <button className="btn">
          <a href="#project" className="btn">
            <i className="uil uil-shopping-cart-alt"></i> Shop Now
          </a></button>
          <button className="btn">
          <a href="#about" className="btn">
            <i className="uil uil-angle-double-down"></i> Know More
          </a></button>
        </div>


        {/* ปุ่มโซเชียลมีเดีย */}
        <div className="social_icons">
          <div className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=61567145003305"
              className="icon social-icon"
            >
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#" className="icon social-icon">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#" className="icon social-icon">
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};


export default FeaturedBox;
