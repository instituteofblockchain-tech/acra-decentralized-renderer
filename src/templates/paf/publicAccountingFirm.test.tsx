/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { PublicAccountingFirm } from "./publicAccountingFirm";
import { publicAccountingFirmCertificate } from "../samples";

describe("firm", () => {
  describe("partners", () => {
    it("should hide partners header if there is no partner", () => {
      const { queryByText } = render(
        <PublicAccountingFirm
          document={{ ...publicAccountingFirmCertificate, partners: [] }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("PARTICULARS OF EXISTING SOLE-PROPRIETOR/PARTNER(S) :")).toBeNull();
    });
    it("should display partners header if there is are partners", () => {
      const { queryByText } = render(
        <PublicAccountingFirm document={{ ...publicAccountingFirmCertificate }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("PARTICULARS OF EXISTING SOLE-PROPRIETOR/PARTNER(S) :")).toBeTruthy();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partner", () => {
      const { queryByText } = render(
        <PublicAccountingFirm
          document={{ ...publicAccountingFirmCertificate, partners: [] }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("PARTICULARS OF SOLE-PROPRIETOR/PARTNER(S) WITHDRAWN FROM PAF :")).toBeNull();
    });
    it("should display withdrawn partners header if there is are withdrawn partners", () => {
      const { queryByText } = render(
        <PublicAccountingFirm document={{ ...publicAccountingFirmCertificate }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("PARTICULARS OF SOLE-PROPRIETOR/PARTNER(S) WITHDRAWN FROM PAF :")).toBeTruthy();
    });
  });
  describe("obfuscation", () => {
    describe("partners", () => {
      it("should provide field partners[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{ ...publicAccountingFirmCertificate }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{ ...publicAccountingFirmCertificate }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{ ...publicAccountingFirmCertificate }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{
              ...publicAccountingFirmCertificate,
              partners: [publicAccountingFirmCertificate.partners![7], publicAccountingFirmCertificate.partners![0]]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].id");
      });
    });
    describe("withdrawn partners", () => {
      it("should provide field partners[7].id when clicking on first withdrawn partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{ ...publicAccountingFirmCertificate }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[7].id");
      });
      it("should provide field partners[7].nationality when clicking on first withdrawn partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{ ...publicAccountingFirmCertificate }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[7].nationality");
      });
      it("should provide field partners[7].address when clicking on first withdrawn partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <PublicAccountingFirm
            document={{ ...publicAccountingFirmCertificate }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[7].address");
      });
    });
  });
});
