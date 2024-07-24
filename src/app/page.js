import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoOne from "./components/modalVideo/videoOne";
import Counter from "./components/counter/counter";
import IndexThreeSlider from "./components/indexThreeSlider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollTop from "./components/scrollTop";
import AboutUs from "./components/about";
import Broker from "./components/broker";
import FeaturedProperties from "./components/featuredProperties";
import GetInTuch from "./components/getInTuch";

export default function IndexThree() {
  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        logolight={true}
        menuClass="navigation-menu nav-left nav-light"
      />
      <IndexThreeSlider />
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-left">
                <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-white img-one">
                  <Image
                    src="/images/2a.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid rounded-top-pill rounded-5"
                    alt=""
                  />

                  <VideoOne />

                  <div className="position-absolute top-0 start-0 z-n1">
                    <Image
                      src="/images/svg/dots.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="avatar avatar-xl-large"
                      alt=""
                    />
                  </div>
                </div>

                <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white">
                  <Image
                    src="/images/1a.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid rounded-3"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h6 className="text-[#E7A91E] fw-medium mb-2">
                  Our story: The Royal Peak
                </h6>
                <h4 className="title mb-3">
                  Efficiency. <br /> Transparency. Control.
                </h4>
                <p className="text-muted para-desc mb-0">
                  The Royal Peak developed a platform for the Real Estate
                  marketplace that allows buyers and sellers to easily execute a
                  transaction on their own. The platform drives efficiency, cost
                  transparency and control into the hands of the consumers.
                  Royal Peak is Real Estate Redefined.
                </p>

                <div className="mt-4">
                  <Link
                    href="/"
                    className="btn btn-pills bg-[#CA8E25] hover:bg-white"
                  >
                    Read More
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <AboutUs />
        </div>
        {/* 
        <div className="container mt-100 mt-60">
          <FeaturedProperties />
        </div>

        <div className="container-fluid mt-100 mt-60">
          <div
            className="position-relative overflow-hidden rounded-3 shadow py-5"
            style={{
              backgroundImage: "url('/images/bg/05.jpg')",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bg-overlay"></div>
            <div className="container">
              <Counter />
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <Broker />
        </div>

        <div className="container mt-100 mt-60">
          <GetInTuch />
        </div> */}
      </section>
      {/* <Footer /> */}
      {/* <ScrollTop /> */}
    </>
  );
}
