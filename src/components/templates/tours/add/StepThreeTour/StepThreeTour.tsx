import React from "react";
import { BaseInputField, TextAreaField } from "../../../../molecules";
import SelectCategory from "../../../../molecules/Select/SelectCategory";
import SelectCreateTags from "../../../../molecules/Select/SelectCreateTags";
import TourItineraries from "./TourItineraries";
import TourAvailabilities from "./TourAvailabilities";
import FrequentlyQuestions from "./FrequentlyQuestions";
import { DropFile } from "../../../../molecules/files/DropFile";
import { Label } from "../../../../atoms";

function StepThreeTour() {
  return (
    <div
      style={{
        height: "calc(100vh - 210px)",
        overflow: "scroll",
        padding: "10px",
      }}
    >
      <div className="">
        <Label>Images</Label>
        <DropFile name="images" />
      </div>
      <div className="">
        <Label>Main Image</Label>
        <DropFile name="main_image" />
      </div>
      <div className="">
        <Label>Pdf file</Label>
        <DropFile name="pdf_file" />
      </div>
    </div>
  );
}

export default StepThreeTour;
