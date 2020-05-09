import React from 'react';
//import Card from './card.jsx';
import getContributionData from './../services/onlineContributionService';
import './../styles/card.css';
const OnlineContribution = () => {
  let onlineContributionData = getContributionData();
  return (
    <React.Fragment>
      <h1 className="m-2">Online Contribution</h1>
      <div className="row">
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

const Card = ({ icon, title, description, buttonTitle, iconColor }) => {
  let style = 'fab fa-4x card-img-top m-1 fa-';
  style += icon;
  return (
    <div className="card text-center cardStyle m-2">
      <i className={style} style={{ color: iconColor }}></i>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary m-1">{buttonTitle}</button>
      </div>
    </div>
  );
};

export default OnlineContribution;
