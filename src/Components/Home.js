import "../CSS/Home.css";
import React from "react";

export const Home = () => {
  let x = document.getElementById("testimonial");
  let arr = [
    "S & Co. is doing what other brokerage firms have never done before. By disrupting the market with engaging real estate content and leveraging data, branding, and amplification to redefine the paths in which buyers and sellers connect, we’re providing an elevated service experience that positions our clients, partners, and agents for success.",
    "Working with S & Co. was an absolute pleasure. Their team went above and beyond to understand my needs and preferences, making the buying process efficient and enjoyable. I'm now a proud homeowner, and it wouldn't have been possible without their guidance.",
    "I can't express how grateful I am to S & Co. for helping me find my dream home. Their patience, responsiveness, and ability to match properties with my preferences made the entire process enjoyable. I couldn't have asked for a better experience.",
  ];
  let initial = 0;

  function previous() {
    // let previouss;
    // previouss = initial - 1;
    x = arr[initial];
    document.getElementById("testimonial").innerHTML = x;
    if (initial >= 0) {
      initial = initial - 1;
    } else {
      initial = arr.length - 1;
    }
  }
  function next() {
    // let previouss;
    // previouss = initial - 1;
    x = arr[initial];
    document.getElementById("testimonial").innerHTML = x;
    initial = initial + 1;
    if (initial >= arr.length) {
      initial = 0;
    }
  }

  return (
    <>
      <div className="container">
        <img
          className="img"
          src="https://wp.zillowstatic.com/streeteasy/2/341098260-06fa26.jpg"
          alt=""
        ></img>
      </div>

      <div className="content-background">
        <h3 className="head">Boldest New Developments</h3>

        {/* <div className="card-container"> */}
        <div className="scroll-container">
          <img
            src="https://static3.mansionglobal.com/production/media/article-images/19b5fd6a46cc3c644b5e0b2f3e87260c/large_3157-Batis-Cres-Waterfall-Country-Est-Midrand-Corlia-Jawitz-Midrand-S36-32.jpg"
            alt=""
          />
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/over-the-top-apartments-main-1512422328.jpg?crop=1.00xw:0.502xh;0,0.263xh&resize=1200:*"
            alt=""
          />
          <img
            src="https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg"
            alt=""
          />
          <img
            src="https://wp.zillowstatic.com/streeteasy/2/341098260-06fa26.jpg"
            alt=""
          />
        </div>
        {/* </div> */}
        {/* <div className="left-part"> */}

        <div className="development">
          <div className="left">
            <p className="head">
              <u>The Madisson.</u>
              <br /> New York
            </p>
            <p>
              The Madisson. New York is Luxury on the Water. The Madisson is a
              distinguished new development project offering residents enduring
              River and Manhattan skyline views and a laidback, waterfront
              lifestyle in one of Brooklyn’s trendiest neighborhoods. Designed
              by Morris Adjmi, The Madisson comprises 171 sublime residences
              between a pair of expansive residential towers. The façade is an
              expression of Greenpoint’s rich maker history, with a redbrick
              base, bronze metal cladding, and gridded windows imported from
              Europe. The interiors at The Madisson are timeless in their design
              and evoke casual elegance.
            </p>
          </div>
          <div className="right">
            <img
              className="imgg"
              src="https://wp.zillowstatic.com/streeteasy/2/341098260-06fa26.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="market">
        <div className="head">Our Presence</div>
        {/* <table>
          <tr>
            <button>New York</button>
            <button>Manhattan</button>
            <button>Washington DC</button>
          </tr>
          <tr>
            <button>Mumbai</button>
            <button>Delhi</button>
            <button>Jaipur DC</button>
          </tr>
          <tr>
            <button>London</button>
            <button>Manchester</button>
            <button>Liverpool</button>
          </tr>
          <tr>
            <td>Mumbai</td>
            <td>Jaipur</td>
          </tr>
          <tr>
            <td>Mumbai</td>
            <td>Jaipur</td>
          </tr>
        </table> */}
      </div>

      <div className="testimonial">
        {/* <div className="row">
          <div className="column right"> */}
        <div className="content">
          <div className="testimonial-head">
            <h4>--------- Testimonials ---------</h4>
          </div>
        </div>
        <p className="vertical-line" />
        {/* <div className="column left"> */}
        <button onClick={previous} className="testmonial-btn">
          &laquo;
        </button>
        <div className="content">
          <p id="testimonial">
            S & Co. is doing what other brokerage firms have never done before.
            By disrupting the market with engaging real estate content and
            leveraging data, branding, and amplification to redefine the paths
            in which buyers and sellers connect, we’re providing an elevated
            service experience that positions our clients, partners, and agents
            for success.
          </p>
        </div>
        <button onClick={next} className="testmonial-btn">
          &raquo;
        </button>
        {/* </div> */}
      </div>
    </>
  );
};
