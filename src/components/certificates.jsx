import React from "react";
import getCertificatesData from "./../services/certificateService";

const Certificates = () => {
  let certificates = getCertificatesData();
  return (
    <React.Fragment>
      <div
        className="container-fluid bg-light backgroundColorGradient"
        id="certificates"
      >
        <div className="row py-5">
          <h1 className="mt-4 col-sm-12 col-md-12 font-weight-bold">
            <span className="newOrangeDarkStyle">Certificates</span>
            <span role="img" aria-label="certificate icon">
              📜
            </span>
          </h1>
          {certificates.map((certificate) => {
            return (
              <div
                key={certificate.certificateId}
                className="col-sm-12 col-md-5 m-auto"
              >
                <CertificateCard {...certificate} />
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
  imageUrl,
}) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-img-top backgroundColorGradient">
        <img
          src={imageUrl}
          className="img-fluid cover p-3 rounded"
          alt={title + " certificate"}
        />
      </div>
      <div className="card-body">
        <div className="m-2">
          <img
            loading="lazy"
            src={providerIcon}
            className="img-fluid skill-icon-size"
            alt={providerIcon + " logo"}
          />
        </div>
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p>Credential ID - {certificateId}</p>

        <a
          href={link}
          alt={title}
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-danger font-weight-bold m-1 textGradientColorButton">
            See Credential
          </button>
        </a>
      </div>
    </div>
  );
};

export default Certificates;
