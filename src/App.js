import './App.css';
import patternLeft from './images/bg-pattern-1.svg';
import patternRight from './images/bg-pattern-2.svg';
import patternThree from './images/bg-pattern-3.svg';
import lightLogo from './images/logo-light.svg';
import heroImg from './images/image-hero.webp';
import founderImg from './images/image-founder.webp';
import darkLogo from './images/logo-dark.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';


function App() {
  return (
    <>
      <div className='header-section'>

        {/* Logo & Apply for access button */}
        <div className='logo-section'>
          <img src={lightLogo} alt=""/>
          <h4>Apply for access</h4>
        </div>

        {/* Call to action & patterns */}
        <div className='call-to-action'>
          <div className='patternLeft'>
            <img src={patternThree} alt=""/>
          </div>
          <div className='headingAndButton'>
            <h1>Data <span>tailored</span> to your needs.</h1>
            <button type="submit">Learn more</button>
          </div>
          <div className='patternRight'>
            <img src={patternRight} alt=""/>
          </div>
        </div>
        <img className='heroImg' src={heroImg} alt=""/>
      </div>

      <div className='product-description'>
        <div>
          <p className='numbering'>1</p>
          <h3 className='description-heading'>Actionable insights</h3>
          <p className='description'>Optimize your products, improve customer satisfaction
             and stay ahead of the competition with our product data analytics.</p>
        </div>
        <div>
          <p className='numbering'>2</p>
          <h3 className='description-heading'>Data-driven decisions</h3>
          <p className='description'>Make data-driven decisions with our product data analytics. 
             Our AI-generated reports help you unlock insights hidden in 
             your product data. </p>
        </div>
        <div>
          <p className='numbering'>3</p>
          <h3 className='description-heading'>Always affordable</h3>
          <p className='description'>Always afforable pricing that scales with your business. Get top-quality 
             product data analytics services without hidden costs or unexpected fees.</p>
        </div>
      </div>
      <div className='founder'>
        <img src={founderImg} alt=""/>
        <div className='founder-intro'>
          <h1>Be the first to test</h1>
          <p>Hi, I'm Louis Graham, the founder of the company. Book a demo
             call with me to become a beta tester for our app and kickstart 
             your company. Apply for access below and I'll be in touch to schedule 
             a call.</p>
             <button type="sumbit">Apply for access</button>
        </div>
        <img className='patternThree' src={patternLeft} alt=""/>
      </div>

      <div className='footer'>
        <img className='dark-logo' src={darkLogo} alt=""/>
        <div className='social-links'>
          <img className='facebook' src={facebook} alt=""/>
          <img className='twitter' src={twitter} alt=""/>
          <img className='instagram' src={instagram} alt=""/>
        </div>
      </div>


    </>
  );
}

export default App;
