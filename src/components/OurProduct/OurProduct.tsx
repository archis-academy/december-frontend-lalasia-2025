import React from "react";
import "./OurProduct.scss";

const OurProduct: React.FC = () => {
  return (
    <section className="our-product">
      <div className="container">
        <div className="content">
    
          <div className="left">
            <span className="label">Our Product</span>

            <h2>
              Crafted by talented and <br />
              high quality material
            </h2>

            <p>
              Pellentesque etiam blandit tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient
              morbi fermentum, vivamus et accumsan dui tincidunt pulvinar.
            </p>

            <button className="btn">Learn More</button>

            <div className="small-image">
              <img
                src="/images/wood.png"
                alt="craft"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <div className="stats">
              <div className="stat">
                <h3>20+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat">
                <h3>483</h3>
                <span>Happy Client</span>
              </div>
              <div className="stat">
                <h3>150+</h3>
                <span>Project Finished</span>
              </div>
            </div>

            <div className="main-image">
              <img
                src="/images/armchair.png"
                alt="furniture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;