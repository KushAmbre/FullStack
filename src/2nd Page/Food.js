import React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  const navigate = useNavigate();

  function ButterC() {
    navigate('/food/ButterChicken');
  }

  function CBiryani() {
    navigate('/food/ChickenBiryani');
  }

  function PTM() {
    navigate('/food/PaneerTikkaMasala');
  }

  function ClassicMP() {
    navigate('/food/ClassicMargheritaPizza');
  }

  function PF() {
    navigate('/food/PrawnsFry');
  }

  const pageStyle = {
    backgroundColor: 'lightblue', // Set your preferred background color here
  };

  return (
    <div style={pageStyle}>
      <h1 className='KK'>KK Recipe Court</h1>
      <div style={{ textAlign: 'center' }}>
        <img
          className='KK'
          src="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"
          style={{ width: '400px', height: '300px', margin: '0 auto'}}
          alt="..."
        />
      </div>
      <div className="GK">
        <h5 className="card-title">Butter Chicken</h5>
        <button onClick={ButterC} className="btn btn-primary">Recipe</button>
      </div>
      <br/>
      <br/>



      <div style={{ textAlign: 'center' }}>
      <img
        src="https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani.jpg"
        className="KK"
        style={{ width: '400px', height: '300px', margin: '0 auto' }}
        alt="..."
      />
      </div>
      <div className="GK">
        <h5 className="card-title">Chicken Biryani</h5>
        <button onClick={CBiryani} className="btn btn-primary">Recipe</button>
      </div>
      <br/>
      <br/>


      <div style={{ textAlign: 'center' }}>
      <img
        src="https://www.nehascookbook.com/wp-content/uploads/2022/11/Paneer-tikka-masala-WS-500x500.jpg"
        className="KK"
        style={{ width: '400px', height: '300px', margin: '0 auto'}}
        alt="..."
      />
      </div>
      <div className="GK">
        <h5 className="card-title">Paneer Tikka Masala</h5>
        <button onClick={PTM} className="btn btn-primary">Recipe</button>
      </div>
      <br/>
      <br/>


      <div style={{ textAlign: 'center' }}>
      <img
        src="https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800"
        className="KK"
        style={{ width: '400px', height: '300px', margin: '0 auto'}}
        alt="..."
      />
      <div className="GK">
        <h5 className="card-title">Classic Margherita Pizza</h5>
        <button onClick={ClassicMP} className="btn btn-primary">Recipe</button>
      </div>
      </div>
      <br/>
      <br/>
      


      <div style={{ textAlign: 'center' }}>
      <img
        src="https://i.pinimg.com/736x/da/90/f7/da90f7ea6699c2a31aeac9855065f1db.jpg"
        className="KK"
        style={{ width: '400px', height: '300px', margin: '0 auto' }}
        alt="..."
      />
      <div className="GK">
        <h5 className="card-title">Prawns Fry</h5>
        <button onClick={PF} className="btn btn-primary">Recipe</button>
      </div>
      </div>
    </div>
  );
};

export default Food;
