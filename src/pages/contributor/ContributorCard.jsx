import React from 'react';
import './ContributorCard.css';

function ContributorCard({ contributor }) {
  return (
    <div className="card">
      <img
        src={contributor.img}
        className="card-img-top"
        alt={contributor.name}
      />
      <div className="card-body">
        <h5 className="card-title">{contributor.name}</h5>
        <p className="card-text">SRN: {contributor.srn}</p>
        {/* <p className="card-text">Contributions: {contributor.contributions}</p> */}

        {/* <a href="/contributor/details" className="btn btn-primary">
          Get Details
        </a> */}
      </div>
    </div>
  );
}

export default ContributorCard;
