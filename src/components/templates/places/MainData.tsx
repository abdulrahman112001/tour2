import { t } from "i18next";
import { BaseInputField, InnerFormLayout } from "../../molecules";
import ActivationStatus from "../../molecules/ActivationStatus";
import SelectCountry from "../../molecules/Select/SelectCountry";
import SelectCities from "../../molecules/Select/SelectCities";
import { Label } from "../../atoms";
import { DropFile } from "../../molecules/files/DropFile";
import UploadMedia from "../media/UploadMedia";

function MainData(update: any) {
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={
          Object.entries(update?.update).length ? `${t("Edit")}` : `${t("Add")}`
        }
        scroll={true}
      >
        <div className="col-span-12 grid gap-2 grid-cols-1 md:grid-cols-2">
          <div>
            <BaseInputField
              id="name"
              label={`${t("Name")}`}
              name="name"
              type="text"
              placeholder={`${t("Name")}`}
              labelProps={{ className: "mb-1 " }}
              className=" mb-3"
              required
            />
          </div>
          <div>
            <SelectCities name="city_id" label="City" placeholder="City" />
          </div>

          <div>
            <BaseInputField
              id="latitude"
              label={`${t("latitude")}`}
              name="latitude"
              type="text"
              placeholder={`${t("latitude")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <div>
            <BaseInputField
              id="longitude"
              label={`${t("longitude")}`}
              name="longitude"
              type="text"
              placeholder={`${t("longitude")}`}
              labelProps={{ className: "mb-1 " }}
              className="mb-3"
              required
            />
          </div>
          <UploadMedia name="images" isMulti label="images" />
          <UploadMedia name="panar_image" label="panner image" />
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
