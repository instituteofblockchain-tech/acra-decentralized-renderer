/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { LlpProfile } from "./llp.profile";
import { llpProfile } from "../samples";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

describe("llp", () => {
  describe("partners", () => {
    it("should hide partners header if there is no partner", () => {
      const { queryByText } = render(
        <LlpProfile document={{ ...llpProfile, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Partner(s) :")).toBeNull();
    });
    it("should display partners header if there are partners", () => {
      const { queryByText } = render(<LlpProfile document={{ ...llpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Particulars of Partner(s) :")).toBeTruthy();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partner", () => {
      const { queryByText } = render(
        <LlpProfile document={{ ...llpProfile, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Partner(s) :")).toBeNull();
    });
    it("should display withdrawn partners header if there are withdrawn partners", () => {
      const { queryByText } = render(<LlpProfile document={{ ...llpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Withdrawn Partner(s) :")).toBeTruthy();
    });
  });
  describe("managers", () => {
    it("should hide managers header if there is no manager", () => {
      const { queryByText } = render(
        <LlpProfile document={{ ...llpProfile, managers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Manager(s) :")).toBeNull();
    });
    it("should display manager header if there are managers", () => {
      const { queryByText } = render(<LlpProfile document={{ ...llpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Particulars of Manager(s) :")).toBeTruthy();
    });
  });
  describe("withdrawn managers", () => {
    it("should hide withdrawn managers header if there is no withdrawn manager", () => {
      const { queryByText } = render(
        <LlpProfile document={{ ...llpProfile, managers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Manager(s) :")).toBeNull();
    });
    it("should display withdrawn manager header if there are withdrawn managers", () => {
      const { queryByText } = render(<LlpProfile document={{ ...llpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Withdrawn Manager(s) :")).toBeTruthy();
    });
  });
  describe("employees", () => {
    it("should hide employees header if there is no employee", () => {
      const { queryByText } = render(
        <LlpProfile document={{ ...llpProfile, employees: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Public Accounting Employee(s) :")).toBeNull();
    });
    it("should display employee header if there are employees", () => {
      const { queryByText } = render(<LlpProfile document={{ ...llpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Particulars of Public Accounting Employee(s) :")).toBeTruthy();
    });
  });
  describe("withdrawn employees", () => {
    it("should hide withdrawn employees header if there is no withdrawn employee", () => {
      const { queryByText } = render(
        <LlpProfile document={{ ...llpProfile, employees: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Public Accounting Employee(s) :")).toBeNull();
    });
    it("should display withdrawn employee header if there are withdrawn employees", () => {
      const { queryByText } = render(<LlpProfile document={{ ...llpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Withdrawn Public Accounting Employee(s) :")).toBeTruthy();
    });
  });
  describe("obfuscation", () => {
    describe("partners", () => {
      it("should provide field partners[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile document={{ ...llpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile document={{ ...llpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile document={{ ...llpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile
            document={{
              ...llpProfile,
              partners: [llpProfile.partners![7], llpProfile.partners![0]]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].id");
      });
    });
    describe("managers", () => {
      it("should provide field managers[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile document={{ ...llpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[0].id");
      });
      it("should provide field managers[0].nationality when clicking on first manager nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile document={{ ...llpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[0].nationality");
      });
      it("should provide field managers[0].address when clicking on first manager address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile document={{ ...llpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[0].address");
      });
      it("should provide field managers[1].id when clicking on first manager id which is in second position in list of managers", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LlpProfile
            document={{
              ...llpProfile,
              managers: [llpProfile.managers![5], llpProfile.managers![0]]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[1].id");
      });
    });
  });
});
