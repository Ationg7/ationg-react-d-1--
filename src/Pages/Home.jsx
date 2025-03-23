import React from "react";

const Home = () => {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Section - Text */}
          <div className="col-md-6 text-white">
            <h1 className="Caption">
            Sustainable Power <br />
            Clean Water <br />
            For a <br />
            Brighter Tomorrow.
            </h1>
            <button className="btn btn-outline-success mt-3">
              <a href="/Contact" className="text-decoration-none text-white">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
