import React from "react";
import avatar from "../assets/images/11.jpg";
import avatar2 from "../assets/images/22.jpg";
import avatar3 from "../assets/images/33.jpg";


const ContactBox = () => (
  <section className="section" id="contact">
    <div className="top-header">
      <h3>Customer Review</h3>
      <span>คุณสามารถอ่านรีวิวจากลูกค้าที่เคยใช้บริการจากเราได้</span>
    </div>

    <div className="project-container">
      <div className="projects-box">
        <i className="uil uil-laughing"></i>
        <h3>มี่มี่</h3>
        <label>บริการดีมากๆ</label>
        <div className="projects-image">
          <img src={avatar} alt="jane" />
        </div>
      </div>
      <div className="projects-box">
        <i className="uil uil-laughing"></i>
        <h3>ดีดี้</h3>
        <label>จัดของส่งเร็วมากๆ</label>
        <div className="projects-image">
          <img src={avatar2} alt="doe" />
        </div>
      </div>
      <div className="projects-box">
        <i className="uil uil-laughing"></i>
        <h3>มาช่า</h3>
        <label>มีแต่ของดีๆ</label>
        <div className="projects-image">
          <img src={avatar3} alt="louis" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactBox;
