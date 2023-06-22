import React from 'react';
import './home.css';
import AMP from '../img/AMP.png'
import Banner from '../Components/Banner'

function MainPage() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <center>
      <br /><br /><br />
        <div className="card">
          <img src={AMP} alt="" />
          <div className="card-body">
            {/* <h5 className="card-title">Título de la tarjeta</h5> */}
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error libero,
                laborum magni nulla, ratione possimus nemo corrupti porro ullam qui blanditiis. Id beatae a assumenda eaque neque minima ipsam sunt.</p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default MainPage;
