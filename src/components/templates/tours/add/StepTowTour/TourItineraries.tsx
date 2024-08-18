import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";

function TourItineraries() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Tour itineraries")}
      </h1>
      <FieldArray name="tour_itineraries">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.tour_itineraries?.map((item: any, index: any) => (
              <>
                <p className="font-bold"> {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
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
                  <BaseInputRepeater
                    id=""
                    label={`${t("description")}`}
                    name={`tour_itineraries[${index}][description]`}
                    placeholder={`${t("description")}`}
                    type="text"
                    value={item?.title}
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
            ))}
            <button
              type="button"
              className="bg-red-500 text-white rounded-md p-2 w-8 h-8 flex items-center justify-center absolute bottom-[-40px] ltr:right-[10px] "
              onClick={() => {
                push({
                  client_category_id: "",
                  commission: "",
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
