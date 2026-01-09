import React from "react";
import "../style/footer.css";

const Footers = () => {
  return (
    <footer className="appFooter">
      <div className="appFooterInner">

        <div className="appFooterTop">

          <div className="appFooterCol">
            <h4 className="appFooterTitle">About Wonky</h4>
            <p className="appFooterText">
              Your one-stop destination for quality kids’ clothing.
              We offer a wide range of dresses, casual wear, and party wear
              for your little ones.
            </p>
          </div>

          <div className="appFooterCol">
            <h4 className="appFooterTitle">Quick Links</h4>
            <ul className="appFooterList">
              <li>Home</li>
              <li>Boys Collection</li>
              <li>Girls Collection</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div className="appFooterCol">
            <h4 className="appFooterTitle">Shipping & Policies</h4>
            <ul className="appFooterList">
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Booking Policy</li>
            </ul>
          </div>

          <div className="appFooterCol">
            <h4 className="appFooterTitle">Follow Us</h4>
            <div className="appFooterSocial">
            <img src="../../public/Facebook.png" alt="" />
            <img src="../../public/Vector.png" alt="" />
            <img src="../../public/Instagram.png" alt="" />
            </div>
            <p className="appFooterNote">
              Stay connected for exclusive offers and updates!
            </p>
          </div>

        </div>

        <div className="appFooterDivider"></div>

        <div className="appFooterBottom">
          © 2025 Wonky. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footers;
