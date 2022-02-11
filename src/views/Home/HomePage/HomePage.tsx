import Header from 'components/molecules/Header';
// import MoodSelector from 'components/organisms/MoodSelector';
import React from 'react';
import 'scss/app.scss';

function HomePage() {
  return (
    <>
      <main className="container">
        <Header></Header>
        <div className='content'>

          <div className='content__info'>
            <h1>Own your future.<br />Build your portfolio.</h1>
            <p>Invest in stocks, funds and crypto.<br />Join a community of over 2 million people.</p>
            <form method="post" action="/sign-up" className="form-nexmo" noValidate={true}>
              <div className="span-input">
                <label htmlFor="phone-number-P8r" className="sr-only">Enter your phone number</label>
                <input className="input-text phone-number" id="phone-number-P8r" name="phone_P8r" placeholder="+1 (212) 123 4567" type="text" />

                  <label htmlFor="phone-validate-P8r" className="sr-only">
                    Verify your phone number</label>
                  <input className="sr-only phone-valdidate" id="phone-validate-P8r" name="phone_validate_P8r" type="text" placeholder="Verify your phone number" />
                  </div>

                  <div className="span-submit">
                    <button type="submit">
                      Text Me The App        </button>
                  </div>
                </form>

                <a href="/features" target="_top" aria-label="Tell me everything" className="btn-features">Tell me everything</a>
                <div className="span-as-seen">
                  <h3>As seen in</h3>
                  <div className="as-seen-logo">
                    <span className="image-svg">
                      <img src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/logo-fortune.svg" alt="Logo Fortune" />
                    </span>
                    <span className="image-svg">
                      <img src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/logo-variety.svg" alt="Logo Variety" />
                    </span>
                    <span className="image-svg">
                      <img src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/logo-forbes.svg" alt="Logo Forbes" />
                    </span>                
                  </div>
                </div>
              </div>



              <div className='content__video'>
                <div className='video__wrapper'>
                  <video 
                    loop={false}  
                    muted={true}
                    autoPlay={true}
                    poster="https://public.com/wp-content/uploads/2021/11/homepage-poster-1024x576.jpg" 
                    width="1920" 
                    height="1080" 
                    data-vidmd-src="https://public.com/wp-content/uploads/2021/11/public-homepage-16x9-30.mp4" 
                    data-vidmd-mime="video/mp4" 
                    className="autoplay lazy-loaded"
                  > 
                    <source src="https://public.com/wp-content/uploads/2021/11/public-homepage-16x9-30.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
          </div>
      </main>
    </>
  );
}

export default HomePage;
