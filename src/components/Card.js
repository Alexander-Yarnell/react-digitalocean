import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ width: "18rem" }}
          src={"https://strapi-digitalocean-2-mawnc.ondigitalocean.app" + props.img}
          className="card-img-top"
          alt="Sorry, this image failed to load."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6>{props.author}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
