"use client";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function IndexThreeSlider() {
  return (
    <section
      className="swiper-slider-hero position-relative d-block vh-100"
      id="home"
    >
      <Carousel
        infiniteLoop={true}
        className="vh-100"
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
      >
        <div
          className="slide-inner slide-bg-image d-flex align-items-center vh-100"
          style={{
            backgroundImage: "url('/images/bg/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-heading text-start">
                  <h1 className="heading fw-bold text-white title-dark mb-3">
                    Azizi Riveira, <br /> Meydan One
                  </h1>
                  <p className="para-desc text-white-50 title-dark mb-0 ">
                    The project is designed to offer a luxurious lifestyle with
                    a variety of amenities including a swimming pool gym and
                    childrens play area.
                  </p>

                  <div className="mt-4 pt-2">
                    <Link href="#" className="btn btn-pills bg-[#CA8E25]">
                      View Details <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide-inner slide-bg-image d-flex align-items-center vh-100"
          style={{
            backgroundImage: "url('/images/bg/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-heading text-start">
                  <h1 className="heading fw-bold text-white title-dark mb-3">
                    AZIZI VENICE , <br /> A Venetian Oasis
                  </h1>
                  <p className="para-desc text-white-50 title-dark mb-0">
                    Welcome to Azizi Venice – where your residence dream meets
                    with peace, charm, beauty, and luxurious lifestyle.
                    Beautiful views, peace-showering waterways, a luxurious
                    lifestyle, and a good climatic environment – whatever you
                    can imagine, Azizi Venice brings you to Meydan One, a
                    vibrant district of Dubai.
                  </p>

                  <div className="mt-4 pt-2">
                    <Link href="#" className="btn btn-pills bg-[#CA8E25]">
                      View Details <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide-inner slide-bg-image d-flex align-items-center vh-100"
          style={{
            backgroundImage: "url('/images/bg/3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-heading text-start">
                  <h1 className="heading fw-bold text-white title-dark mb-3">
                    AZIZI MINA, <br /> Live The Luxury
                  </h1>
                  <p className="para-desc text-white-50 title-dark mb-0">
                    Azizi Mina, an example of luxury living with modern designs
                    and endless amenities available, is situated in the core of
                    Palm Jumeirah, one of Dubai’s most sought-after locations.
                    Azizi Developments has the privilege to offer such an
                    extraordinary opportunity to own your houses nowhere but in
                    Palm Jumeirah, in the Azizi Mina.
                  </p>

                  <div className="mt-4 pt-2">
                    <Link href="#" className="btn btn-pills bg-[#CA8E25]">
                      View Details <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
