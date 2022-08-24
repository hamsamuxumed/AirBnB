import React from "react";

export const Footer = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-4 absolute bg-gray-100 h-full sm:h-[300px] w-full py-10 px-20 text-gray-600 ">
      {/* First Section */}
      <section className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </section>

      {/* second Section */}
      <section className="  space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Discrimination</p>
        <p>Airbnb.org: disaster</p>
        <p>COVID-19 </p>
        <p>Report a concern</p>
      </section>
      {/* Third Section */}
      <section className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">HOST</h5>
        <p>Try hosting</p>
        <p>AirCover for Hosts</p>
        <p>Explore Hosting</p>
        <p>Community forum</p>
        <p>Host responsibly</p>
      </section>
      {/* forth Section */}
      <section className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Safety information</p>
        <p>Careers</p>
        <p>investors</p>
      </section>
    </div>
  );
};
