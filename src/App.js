import './App.css';
import image from './assets/images/image-equilibrium.jpg'
import ether from './assets/images/icon-ethereum.svg'
import clock from './assets/images/icon-clock.svg'
import avatar from './assets/images/image-avatar.png'




function App() {
  return (
    <div className="App">
     <div className="card">
       <div className="image_container">
         <img src={image} alt="" />
       </div>
       <div className="details">
         <span className="name">Equilibrium #3429</span>
         <p className="desc">Our Equilibrium collection promotes balance and calm.</p>
         <div className="row">
            <div className="ether_block">
              <img src={ether} alt="" className="ether_img" />
              <span className="amount">0.041ETH</span>
            </div>
            <div className="duration_block">
              <img src={clock} alt="" className="timer" />
              <span className="time">3days left</span>
            </div>
         </div>
         <hr />
          <div className="owner">
            <img src={avatar} alt="" className="owner_img" />
            <span className="text">Creation of<span className="creator">Jules Wyvern</span></span>
          </div>
       </div>
     </div>
    </div>
  );
}

export default App;
