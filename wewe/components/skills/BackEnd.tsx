import React from "react";

const BackEnd: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level"></span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Secualize</h3>
              <span className="skills__level"></span>
            </div>
          </div>
          <div className="skills__data">
         
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
        {/* ====== */}
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level"></span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
          <i className="bx bx-badge-check"></i>
            <div>
              
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
          <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level"></span>
            </div>
          </div>
          <div className="skills__data">
     
            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
