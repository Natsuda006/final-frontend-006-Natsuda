import React from "react";
import avatar11 from "../assets/images/1.jpg";
import avatar21 from "../assets/images/3.jpg";
const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Us</h1>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="col">
          <div className="about-info">
            <h3>About Us</h3>
            <p>
            Natsuda shop เรามุ่งมั่นที่จะนำเสนอเครื่องสำอางและน้ำหอมคุณภาพสูงจากแบรนด์ชั้นนำทั่วโลก เพื่อเสริมความงามและความมั่นใจให้กับทุกคน เราคัดสรรผลิตภัณฑ์ที่ดีที่สุดเพื่อช่วยบำรุงผิวพรรณและสร้างเสน่ห์ในทุกๆ วัน
            </p>
          </div>
        </div>
        <div className="featured-image">
        <div className="image">
          <img src={avatar11} alt="avatar11" />
        </div>
      </div>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="featured-image">
        <div className="image">
          <img src={avatar21} alt="avatar21" />
        </div>
      </div>
        <div className="col">
          <div className="about-info">
            <h3>About Our Product</h3>
            <p>
            ร้านของเราเรานำเสนอผลิตภัณฑ์เครื่องสำอางและน้ำหอมคุณภาพสูงที่คัดสรรมาอย่างดีเพื่อเพิ่มความงามและเสน่ห์ให้กับคุณ ตั้งแต่เครื่องสำอางที่ช่วยดูแลผิวพรรณไปจนถึงน้ำหอมที่ให้กลิ่นหอมยาวนาน เราพร้อมที่จะทำให้คุณมั่นใจในทุกๆ วัน


            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutBox;
