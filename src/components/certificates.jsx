import React from "react";
import getCertificatesData from "./../services/certificateService";

const Certificates = () => {
  let certificates = getCertificatesData();
  return (
    <React.Fragment>
      <div className="container-fluid bg-light gradiantRed" id="certificates">
        <div className="row py-5">
          <h1 className="mt-4 col-sm-12 col-md-12 font-weight-bold text-white">
            Certificates
          </h1>
          {certificates.map((certifiate) => {
            return (
              <div
                key={certifiate.certificateId}
                className="col-sm-12 col-md-5 m-auto"
              >
                <CertificateCard {...certifiate} />
              </div>
            );
          })}
        </div>
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
    <div className="card text-center cardStyle my-4">
      <div className="card-img-top gradiantRed">
        <p> </p>
      </div>
      <div className="card-body">
        <div className="m-2">
          <i className={providerIcon} style={providerIconStyle}></i>
        </div>
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p>Credential ID - {certificateId}</p>
        <button className="btn btn-primary font-weight-bold m-1 textGradientColorButton">
          <a href={link} alt={title} className="text-white">
            See Credential
          </a>
        </button>
      </div>
    </div>
  );
};

export default Certificates;
