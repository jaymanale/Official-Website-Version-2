import React from 'react';
import getContributionData from './../services/onlineContributionService';
import './../styles/card.css';

const OnlineContribution = () => {
  let onlineContributionData = getContributionData();
  return (
    <React.Fragment>
      <h1 className="m-2 pt-4">Online Contribution</h1>
      <div className="row  py-4">
        {onlineContributionData.map((contribution) => {
          return (
            <div
              key={contribution.title}
              className="col-sm-12 col-md-5  m-auto"
            >
              <Card {...contribution} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const Card = ({ icon, title, description, link, buttonTitle, iconColor }) => {
  let style = 'fab fa-4x card-img-top m-1 fa-';
  style += icon;
  return (
    <div className="card text-center cardStyle m-2">
      <i className={style} style={{ color: iconColor }}></i>

      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} alt={title}>
          <button className="btn btn-primary m-1">{buttonTitle}</button>
        </a>
      </div>
    </div>
  );
};

export default OnlineContribution;
