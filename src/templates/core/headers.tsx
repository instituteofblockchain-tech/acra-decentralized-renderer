import React, { FunctionComponent, useEffect, useState } from "react";
import { css } from "@emotion/core";
import logo from "../images/logo.jpg";

const style = css`
  .disclaimer {
    margin-bottom: 1rem;
  }
  .profile {
    font-size: 1.1rem;
  }

  @media print {
    .alert {
      display: none;
    }
  }
  .alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .alert-primary {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
    text-align: center;
  }
  .logo {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  .logo span {
    font-size: 0.9rem;
    font-weight: bold;
    text-align: right;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 150px;
  }
`;
interface HeaderProps {
  type: string;
  businessName: string;
  registrationNumber: string;
  receiptDate: string;
  targetHash?: string;
}
interface StatusResponse {
  status: number;
}
export const Header: FunctionComponent<HeaderProps> = ({
  type,
  businessName,
  registrationNumber,
  receiptDate,
  targetHash
}) => {
  const [displayWarning, setDisplayWarning] = useState(false);

  useEffect(() => {
    if (targetHash) {
      fetch(`https://acra-status.opencerts.io/status/${targetHash}`)
        .then(response => response.json())
        .then(({ status }: StatusResponse) => {
          if (status === 1) {
            setDisplayWarning(true);
          }
        });
    }
  }, [targetHash]);
  return (
    <div css={style}>
      {displayWarning && (
        <div className="alert alert-primary" role="alert">
          There is an updated version of this document. You may purchase the latest copy at{" "}
          <a
            href="https://www.tis.bizfile.gov.sg/ngbtisinternet/faces/oracle/webcenter/portalapp/pages/TransactionMain.jspx?selectedETransId=dirSearch"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.bizfile.gov.sg/
          </a>
          .
        </div>
      )}
      <div className="logo">
        <span>
          Accounting and corporate regulatory authority
          <br /> (ACRA)
        </span>
        <img src={logo} alt="bizfile logo" />
      </div>
      <div className="ttu b disclaimer">
        Whilst every endeavor is made to ensure that information provided is updated and correct. The authority
        disclaims any liability for any damage or loss that may be caused as a result of any error or omission.
      </div>
      <div
        className="b flex justify-between"
        css={css`
          margin-bottom: 1rem;
        `}
      >
        <div className="profile">
          Business Profile ({type}) of <span className="ttu">{businessName}</span> ({registrationNumber})
        </div>
        <div>Date: {receiptDate}</div>
      </div>
    </div>
  );
};
