import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import DateInputMantine from "../../../../molecules/formik-fields/DateInputMantine";
import { Radio } from "../../../../molecules";

function TourAccommodations() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Tour Accommodations")}
      </h1>
      <FieldArray name="tour_accommodations">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.tour_accommodations?.map((item: any, index: any) => (
              <>
                <p className="font-bold"> {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
                  <BaseInputRepeater
                    id=""
                    label={`${t("title")}`}
                    name={`tour_accommodations[${index}][title]`}
                    placeholder={`${t("title")}`}
                    type="text"
                    value={item?.title}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_accommodations[${index}][title]`,
                        e.target.value
                      )
                    }
                  />
                  <BaseInputRepeater
                    id=""
                    label={`${t("description")}`}
                    name={`tour_accommodations[${index}][description]`}
                    placeholder={`${t("description")}`}
                    type="text"
                    value={item?.description}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_accommodations[${index}][description]`,
                        e.target.value
                      )
                    }
                  />
                   <div className="">
                      <div className="flex gap-4 rtl:text-right mantine-radio-style flex-col w-11/12">
                        <label>{t("type")}</label>
                        <div className="flex gap-5 mantine-radio-style">
                          <Radio
                            checked={item?.type === 'private'}
                            label={`${t("Private")}`}
                            id="status"
                            name={`tour_accommodations[${index}].type`}
                            onChange={() =>
                              setFieldValue(`tour_accommodations[${index}].type`, 'private')
                            }
                          />
                          <Radio
                            label={`${t("Shared")}`}
                            checked={item?.type === 'shared'}
                            id="status"
                            name={`tour_accommodations[${index}].type`}
                            onChange={() =>
                              setFieldValue(`tour_accommodations[${index}].type`, 'shared')
                            }
                          />
                        </div>
                      </div>
                    </div>
                  <BaseInputRepeater
                    id=""
                    label={`${t("price")}`}
                    name={`tour_accommodations[${index}][price]`}
                    placeholder={`${t("price")}`}
                    type="text"
                    value={item?.price}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_accommodations[${index}][price]`,
                        e.target.value
                      )
                    }
                  />

                  {values?.tour_accommodations?.length > 1 && (
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

export default TourAccommodations;
