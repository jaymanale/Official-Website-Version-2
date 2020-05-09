import React from 'react';
import getCertificatesData from './../services/certificateService';

const Certificates = () => {
  let certificates = getCertificatesData();
  return (
    <React.Fragment>
      <h1 className="pt-4">Certificates</h1>
      <div className="row py-4">
        {certificates.map((certifiate) => {
          return (
            <div
              key={certifiate.certificateId}
              className="col-sm-12 col-md-6 m-auto"
            >
              <CertificateCard {...certifiate} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const CertificateCard = ({
  certificateId,
  providerIcon,
  providerIconStyle,
  title,
  link,
}) => {
  return (
    <div className="card text-center cardStyle m-2">
      <div className="card-img-top bg-success">
        <p> </p>
      </div>
      <div className="card-body">
        <i className={providerIcon} style={providerIconStyle}></i>
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p>Credential ID - {certificateId}</p>
        <button className="btn btn-primary  m-1">
          <a href={link} alt={title} className="text-white">
            See Credential
          </a>
        </button>
      </div>
    </div>
  );
};

export default Certificates;
