import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import SelectPlaces from "../../../../molecules/Select/SelectPlcaes.";
import SelectCities from "../../../../molecules/Select/SelectCities";
import { TextAreaField } from "../../../../molecules";

function TourItineraries() {
  const { values, setFieldValue, errors } = useFormikContext<any>();
  const handleCityChange = (city_id) => {
    values.tour_itineraries.forEach((_, index) => {
      setFieldValue(`tour_itineraries[${index}][city_id]`, city_id);
    });
  };
  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Tour Itineraries")}
      </h1>
      <FieldArray name="tour_itineraries">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.tour_itineraries?.map((item: any, index: any) => (
              <>
                {values?.type == "tour_package" ? (
                  <>
                    <p className="font-bold">Day - {index + 1}</p>
                    <div className="grid grid-cols-3 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
                      <SelectCities
                        name={`tour_itineraries[${index}][city_id]`}
                        label="Cities"
                        placeholder="Chose cities"
                        with_places={true}
                        value={item?.city_id}
                      />
                      <SelectPlaces
                        name={`tour_itineraries[${index}][place_id]`}
                        label="Places"
                        placeholder="Chose places"
                        with_places={true}
                        value={item?.place_id}
                      />
                      <BaseInputRepeater
                        id=""
                        label={`${t("title")}`}
                        name={`tour_itineraries[${index}][title]`}
                        placeholder={`${t("title")}`}
                        type="text"
                        value={item?.title}
                        onChange={(e) =>
                          setFieldValue(
                            `tour_itineraries[${index}][title]`,
                            e.target.value
                          )
                        }
                      />
                      <TextAreaField
                        id=""
                        label={`${t("description")}`}
                        name={`tour_itineraries[${index}][description]`}
                        placeholder={`${t("description")}`}
                        type="text"
                        value={item?.description}
                        onChange={(e) =>
                          setFieldValue(
                            `tour_itineraries[${index}][description]`,
                            e.target.value
                          )
                        }
                      />

                      {values?.tour_itineraries?.length > 1 && (
                        <button
                          type="button"
                          className=" absolute ltr:right-[-25px]  top-[10px]"
                          onClick={() => {
                            remove(index);
                          }}
                        >
                          <SvgDelete stroke="red" />
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="font-bold">Place - {index + 1}</p>
                    <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
                      <SelectPlaces
                        name={`tour_itineraries[${index}][place_id]`}
                        label="Places"
                        placeholder="Chose places"
                        with_places
                        value={item?.place_id}
                        onChange={(e) => {
                          setFieldValue(
                            `tour_itineraries[${index}][place_id]`,
                            e?.value
                          );
                          handleCityChange(e?.city_id);
                        }}
                      />
                      <BaseInputRepeater
                        id=""
                        label={`${t("title")}`}
                        name={`tour_itineraries[${index}][title]`}
                        placeholder={`${t("title")}`}
                        type="text"
                        value={item?.title}
                        onChange={(e) =>
                          setFieldValue(
                            `tour_itineraries[${index}][title]`,
                            e.target.value
                          )
                        }
                      />
                      <TextAreaField
                        id=""
                        label={`${t("description")}`}
                        name={`tour_itineraries[${index}][description]`}
                        placeholder={`${t("description")}`}
                        value={item?.description}
                        onChange={(e) =>
                          setFieldValue(
                            `tour_itineraries[${index}][description]`,
                            e.target.value
                          )
                        }
                      />

                      {values?.tour_itineraries?.length > 1 && (
                        <button
                          type="button"
                          className=" absolute ltr:right-[0px]  top-[10px]"
                          onClick={() => {
                            remove(index);
                          }}
                        >
                          <SvgDelete stroke="red" />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </>
            ))}
            <button
              type="button"
              className="bg-red-500 text-white rounded-md p-2 w-8 h-8 flex items-center justify-center absolute bottom-[5px] ltr:right-[10px] "
              onClick={() => {
                push({
                  title: "",
                  description: "",
                  city_id: "",
                  place_id: "",
                });
              }}
            >
              +
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default TourItineraries;
