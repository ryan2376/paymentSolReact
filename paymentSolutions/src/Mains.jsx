import React from "react";
import bgimg from "./assets/bgimgnobg.png";


export default function Mains() {
    
  return (
    <section className="main-content">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input type="text" id="name" name="name" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Log In</button>
        </form>
        <img className="bg-image" src={bgimg} alt="Background" />

      </div>
      <div className="topics">
        <h1>About Us</h1>
        <div>
          "I didn't realize this earlier, but now I'm sure of it. With each day, I love you more. You're my one and only princess charming, that's if there's anything like that. I love the perfect blend that makes you up as a woman, my woman. Just like the first time we met, you still successfully make my heart race and send signals to my brain. I love that I am spending the rest of my life with you, that's the fulfillment of an age-long dream I've had since we met. You have created beautiful times and experiences for us, and I am just glad that my life is with yours every day. I love you so much, darling, you're my baby girl no matter how old we grow together."
        </div>
        <h1>Services</h1>
        <div>
          "He that finds a wife has found a good thing, but I think it should be 'He that finds a good woman has found heaven' because that's what you make me feel. My life is blessed to have you. My home is blessed to have you in it. With each new day, I love you more than the previous days. You compliment me and bring out the best that I've got to offer. Having you close to me is the best feeling ever. It will cost me nothing to promise you that I will love you forever and ever because you're deserving of that and more. With you in my arms and in my heart, there's nothing in the world that I cannot face. And I will do just anything for you. That's the extent of my love for you, every day."
        </div>
      </div>
    </section>
  );
}