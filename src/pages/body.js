import headerImage from '../assets/images/header-backdrop.webp';
import backgroundFlower from '../assets/images/left_hero_flowers.webp';
import $ from "jquery";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://lh5.googleusercontent.com/p/AF1QipMjKywFAAWkBQsMZskKpyDK_xbAuhgKxYy0S-Pa=s1046-k-no" },
  { url: "https://lh3.ggpht.com/p/AF1QipOpC9yThRQ_bKl4_MtInN6hxnTyNRr1yg5BK-Ul=s1024" },
  { url: "https://lh5.googleusercontent.com/p/AF1QipPlw5wIVfUv-kIDo9zKVvTtVJk1F_RsePKKyVRf=s1016-k-no" },
  { url: "https://lh5.googleusercontent.com/p/AF1QipPABPN_Hdb7koYVMkYZZDLd42zAd4_khr9N0NvE=s1016-k-no" },
  { url: "https://lh5.googleusercontent.com/p/AF1QipOOACjTCSui8MtBttVbTnB5LKCL-n5BaxXSbK3B=s676-k-no" },
];

function Body() {

  var scrolledDown = false;

  window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    if (scrolled > 50 && !scrolledDown) {
      console.log('Page scrolled down.');
      scrolledDown = true;
      // Perform your desired actions here
    }

    if (scrolled <= 50 && scrolledDown) {
      console.log('Page back to the top.');
      scrolledDown = false;
      // Perform your desired actions here
    }
  });

  return (
    <div className="homepage">
      <span className="flower-background" style={{backgroundImage: `url(${backgroundFlower})` }}></span>
      <div className="hero">
        <img className="header-backdrop" src={headerImage} alt=""/>
        <h1>Hillside Beauty</h1>
        <div className="under-header">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-paper-heart" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
            </svg>
            Email Me
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-telephone-forward" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
            </svg>
            Call Now
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            Get Directions
          </span>
        </div>
        <p className="intro-paragraph">Hillside Beauty is a cosy and zen garden salon, providing numerous beauty treatments. Find our price list below. </p>
        <a className="cta-button" href="tel:07730477966" >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
          </svg>
          Call to book
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-calendar-heart" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
          </svg>
        </a>
      </div>
      <div id="homepage_slider" className="homepage_slider_wrapper">
        <SimpleImageSlider
          width={800}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
      <div className="price_list">
        <div class="col">
          <div class="col-wrapper">
            <h2>
              Hands & Feet
            </h2>
            <p><strong>Gel Mani £22</strong></p>
            <p><strong>Gel Pedi £22</strong></p>
            <p>(Shape, cuticle tidy, gel application, cuticle oil, hand/foot cream)</p>
            <p>Option of HEMA Free Gel</p>
            <br/>
            <p><strong>Builder Gel Mani £25</strong></p>
            <p>(A more durable and long lasting gel base for nails that need extra strength, can be infilled every 2-4 weeks)</p>
            <p>Option of HEMA Free Gel</p>
            <br/>
            <p><strong>Gel Reapplication £27</strong></p>
            <p><strong>Builder Gel Infill £30</strong></p>
            <br/>
            <p><strong>Hard Gel Extensions £30</strong></p>
            <p><strong>Hard Gel Extension Infill £37</strong></p>
            <p>(Hard gel on half-cover tips)</p>
            <br/>
            <p><strong>Luxury Gel Mani £30</strong></p>
            <p><strong>Luxury Gel Pedi £30</strong></p>
            <p>(File, cuticle tidy, gel polish, foot/hand soak, dead skin removal, exfoliation, mask in heated boots/mitts, massage)</p>
            <p><strong>Luxury Mani without Gel £25</strong></p>
            <p><strong>Luxury Pedi without Gel £25</strong></p>
            <br/>
            <p><strong>Gel Removal and Mini Mani £15</strong></p>
            <p>(Removal of gel, clip, file, cuticle tidy, foot/hand cream and cuticle oil)</p>
            <p><strong>Gel Removal No Re-application £7</strong></p>
            <p>(Removal of gel only)</p>
            <br/>
            <p><strong>Nail Repair per Nail £2</strong></p>
            <p><strong>Nail Art per Nail 50p - £2</strong></p>
          </div>
        </div>

        <div class="col">
          <div class="col-wrapper">
            <h2>
              Lashes & Brows
            </h2>
            <p><strong>RefectoCil Eyelash Tint £10*</strong></p>
            <p><strong>RefactoCil Eyebrow Tint £7*</strong></p>
            <p>(An eyelash/eyebrow tint of your chosen colour, lasts 2-4 weeks)</p>
            <br/>
            <p><strong>Last Base Eyelash Perm and Tint £30*</strong></p>
            <p>(A perm of your natural lashes and black tint, lasts 4-6 weeks)</p>
            <br/>
            <p><strong>Nouveau Natural Eyelash Extensions £40</strong></p>
            <br/>
            <p><strong>Nouveau Hybrid Eyelash Extensions £50 </strong></p>
            <p>(More volume and thickness)</p>
            <br/>
            <p><strong>Eyelash Infil £20-£35</strong></p>
            <p>(Recommended every 2-4 weeks. Price varies on amount of lashes needing to infill)</p>
            <br/>
            <p><strong>Lash Extension Removal £15</strong></p>
            <br/>
            <p>*Patch test required at least 48 hours prior to treatment.</p>
          </div>
        </div>

        <div class="col">
          <div class="col-wrapper">
            <h2>
              Beauty Therapy
            </h2>
            <p><strong>30 Min. Back and Shoulder Massage £25</strong></p>
            <br />
            <p><strong>1 Hours Full Body Massage £45</strong></p>
            <p>(Décolleté, hands, arms, feet, legs, abdomen, back and shoulders)</p>
            <br />
            <p><strong>30 Min. Shoulder, Scalp, and Sinus Massage £25</strong></p>
            <p>(With essential oil therapy)</p>
            <br />
            <p><strong>1 Hour 30 Min. Relaxing Facial with Touch Therapy £40</strong></p>
            <p>(Cleanse, exfoliation, face mask, hand and foot mask in heated boots and mitts, face massage, hand and foot massage, tone, face cream)</p>
            <br />
            <p><strong>45 Min. Mini Facial £25</strong></p>
            <p>(Cleanse, exfoliation, face massage, mask, tone, face cream, products to suit your skin type and treatment goals)</p>
            <br />
            <p><strong>45 Min. Retinol Facial £30</strong></p>
            <p>(A specialised facial to improve the appearance of fine lines and wrinkles as well as acne scars and blemishes by deeply exfoliating the skin)</p>
            <p>Not suitable for sensitive skin</p>
            <br />
            <p><strong>Hopi Ear Candling £20</strong></p>
            <p>(Relieves conditions of ears, nose and throat. Removes impurities and wax from the ears)</p>
          </div>
        </div>

        <div class="col">
          <div class="col-wrapper">
            <h2>
              Waxing
            </h2>
            <p><strong>Eyebrow £7</strong></p>
            <br />
            <p><strong>Upper Lip £7</strong></p>
            <br />
            <p><strong>Chin £7</strong></p>
            <br />
            <p><strong>Full face £15</strong></p>
            <p>(Exl. Eyebrows)</p>
            <br />
            <p><strong>Half leg £15</strong></p>
            <p><strong>Full Leg £25</strong></p>
            <br />
            <p><strong>Under Arm £10</strong></p>
            <br />
            <p><strong>Arm £15</strong></p>
            <br />
            <p><strong>Bikini £15</strong></p>
          </div>
        </div>

      </div>
    </div>
  );

}

export default Body;
