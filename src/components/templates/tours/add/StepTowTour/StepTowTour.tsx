import React from "react";
import { BaseInputField, TextAreaField } from "../../../../molecules";
import SelectCategory from "../../../../molecules/Select/SelectCategory";
import SelectCreateTags from "../../../../molecules/Select/SelectCreateTags";
import TourItineraries from "./TourItineraries";
import TourAvailabilities from "./TourAvailabilities";

function StepTowTour() {
  return (
    <div
    style={{
        height:"calc(100vh - 210px)",
        overflow:"scroll",
        padding:"10px"
    }}
    >
    <div className="grid grid-cols-2 gap-2">
      <BaseInputField name="title" type="text" label="title" />
      <TextAreaField
        id="description"
        label="description"
        name="description"
        placeholder="Description"
      />
      <BaseInputField name="duration" type="text" label="duration" />
      <SelectCategory
        name="category_id"
        label="category"
        placeholder="category"
      />
      <BaseInputField name="transportation_mode" type="text" label="duration" />
      <SelectCreateTags label="create tags" name="tags" />
      <TourItineraries/>
      <TourAvailabilities/>
    </div>

    </div>
  );
}

export default StepTowTour;
