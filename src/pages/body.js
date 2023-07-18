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
    </div>
  );

}

export default Body;
