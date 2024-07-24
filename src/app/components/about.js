import React from "react";
import Link from "next/link";

import { FiHexagon, FiHome, FiBriefcase, FiKey } from "../assets/icons/vander";

export default function AboutUs() {
  let aboutData = [
    {
      icon: FiHome,
      title: "Property Search and Selection",
      desc: "Begin by browsing our extensive listings to find properties that match your preferences. Use our advanced search filters to narrow down options based on location, budget, and specific amenities.",
    },
    {
      icon: FiBriefcase,
      title: "Consultation and Viewing",
      desc: "Schedule a consultation with one of our experienced agents to discuss your requirements in detail. Arrange viewings of shortlisted properties to get a firsthand experience and make an informed decision.",
    },
    {
      icon: FiKey,
      title: "Finalizing the Purchase",
      desc: "Once you've selected a property, our team will guide you through the negotiation, paperwork, and legal processes. We ensure a seamless transaction from initial offer to final handover of the keys.",
    },
  ];
  return (
    <>
      <div className="row justify-content-center">
        <div className="col">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-3">How We Works</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A premier platform for buying selling and renting properties in
              Dubais real estate market backed by years of expertise.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-0">
        {aboutData.map((item, index) => {
          let Icon = item.icon;
          return (
            <div className="col-md-4" key={index}>
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <Icon className="fea icon-m-md text-[#CA8E25]" />
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="/" className="fw-medium  text-dark fs-5">
                    {item.title}
                  </Link>
                  <p className="text-muted mt-3 mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
