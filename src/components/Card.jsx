import React from 'react';

const Card = ({ image, title, text, link }) => {
  return (
    <div className="card mx-2 my-3" >
      <img src={image} className="card-img-top " alt={title} style={{ height: '30vh' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;