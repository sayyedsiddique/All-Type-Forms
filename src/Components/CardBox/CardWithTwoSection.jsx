import React from "react";
import './CardWithTwoSection.css'

const CardWithTwoSection = (props) => {
  return (
    <div className="two-section-card-main-container">
      <div className="card_container">
        {/* <div className="registration_leftside">
            {props.image}
        </div>
        <div className="registration_right">
            {props.form}
        </div> */}
        {props?.children}
      </div>
    </div>
  );
};

export default CardWithTwoSection;
