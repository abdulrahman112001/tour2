import React from "react";
import { BaseInputField, TextAreaField } from "../../../../molecules";
import SelectCategory from "../../../../molecules/Select/SelectCategory";
import SelectCreateTags from "../../../../molecules/Select/SelectCreateTags";
import TourItineraries from "./TourItineraries";
import TourAvailabilities from "../StepFourTour/TourAvailabilities";
import FrequentlyQuestions from "./FrequentlyQuestions";
import CKeditor from "../../../../molecules/Editor/CKeditor";
import SelectCities from "../../../../molecules/Select/SelectCities";

function StepTowTour() {
  return (
    <div
      style={{
        height: "calc(100vh - 210px)",
        overflow: "scroll",
        padding: "10px",
      }}
    >
      <div className="grid grid-cols-3 gap-2">
        <BaseInputField
          name="title"
          type="text"
          label="title"
          placeholder="Title"
        />

        <BaseInputField
          name="duration"
          type="num"
          label="duration (Days)"
          placeholder="Duration"
        />
        <SelectCategory
          name="category_id"
          label="category"
          placeholder="category"
        />

        <SelectCreateTags label="create tags" name="tags" />
        <SelectCities
          name="from_city_id"
          label="From city"
          placeholder="From city"
          
        />
        <SelectCities
          name="to_city_id"
          label="Ti city"
          placeholder="From city"
          
        />
        <div className="col-span-3">
          <TextAreaField
            id="description"
            label="description"
            name="description"
            placeholder="Description"
            rows={5}
          />
        </div>
        <div className="col-span-2 ">
          <TourItineraries />
        </div>
        <div className="col-span-2 ">
          <FrequentlyQuestions />
        </div>
      </div>
    </div>
  );
}

export default StepTowTour;
