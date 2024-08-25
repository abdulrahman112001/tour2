import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import DateInputMantine from "../../../../molecules/formik-fields/DateInputMantine";
import { Radio } from "../../../../molecules";
import SelectMonth from "../../../../molecules/Select/SelectMonth";

function TourAccommodations() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Pricing options")}
      </h1>
      <FieldArray name="tour_prices">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.tour_prices?.map((item: any, index: any) => (
              <>
                <p className="font-bold">option {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 rounded-xl my-2  ">
                  <BaseInputRepeater
                    id=""
                    label={`${t("title")}`}
                    name={`tour_prices[${index}][title]`}
                    placeholder={`${t("title")}`}
                    type="text"
                    value={item?.title}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_prices[${index}][title]`,
                        e.target.value
                      )
                    }
                  />
                  <SelectMonth
                    name={`tour_prices[${index}][from_month]`}
                    key={""}
                    label="From month"
                  />
                  <SelectMonth
                    name={`tour_prices[${index}][to_month]`}
                    key={""}
                    label="To month"
                  />
                  <div className="relative">
                    <FieldArray
                      name={`tour_prices[${index}][prices]`}
                    >
                      {({ push: pushOption, remove: removeOption }) => (
                        <div className="col-span-2 mt-4">
                          <p className="font-semibold">Price</p>
                          {item?.prices?.map(
                            (option: any, optionIndex: any) => (
                              <div
                                key={optionIndex}
                                className="grid grid-cols-2 gap-2 border p-2 rounded-xl mb-2"
                              >
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("Title")}`}
                                  name={`tour_prices[${index}][prices][${optionIndex}][title]`}
                                  placeholder={`${t("Title")}`}
                                  type="text"
                                  value={option?.title}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `tour_prices[${index}][prices][${optionIndex}][title]`,
                                      e.target.value
                                    )
                                  }
                                />
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("Price")}`}
                                  name={`tour_prices[${index}][prices][${optionIndex}][price]`}
                                  placeholder={`${t("Option Description")}`}
                                  type="text"
                                  value={option?.price}
                                  onChange={(e) =>
                                    setFieldValue(
                                      `tour_prices[${index}][prices][${optionIndex}][price]`,
                                      e.target.value
                                    )
                                  }
                                />
                                <button
                                  type="button"
                                  className="absolute ltr:right-[10px] top-[45px]"
                                  onClick={() => removeOption(optionIndex)}
                                >
                                  <SvgDelete stroke="red" />
                                </button>
                              </div>
                            )
                          )}
                          <button
                            type="button"
                            className="bg-blue-500 text-white rounded-md p-2 w-8 h-8 flex items-center justify-center"
                            onClick={() =>
                              pushOption({
                                title: "",
                                price: "",
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                  {/* <BaseInputRepeater
                    id=""
                    label={`${t("description")}`}
                    name={`tour_prices[${index}][description]`}
                    placeholder={`${t("description")}`}
                    type="text"
                    value={item?.description}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_prices[${index}][description]`,
                        e.target.value
                      )
                    }
                  /> */}
                  {/* <div className="">
                      <div className="flex gap-4 rtl:text-right mantine-radio-style flex-col w-11/12">
                        <label>{t("type")}</label>
                        <div className="flex gap-5 mantine-radio-style">
                          <Radio
                            checked={item?.type === 'private'}
                            label={`${t("Private")}`}
                            id="status"
                            name={`tour_prices[${index}].type`}
                            onChange={() =>
                              setFieldValue(`tour_prices[${index}].type`, 'private')
                            }
                          />
                          <Radio
                            label={`${t("Shared")}`}
                            checked={item?.type === 'shared'}
                            id="status"
                            name={`tour_prices[${index}].type`}
                            onChange={() =>
                              setFieldValue(`tour_prices[${index}].type`, 'shared')
                            }
                          />
                        </div>
                      </div>
                    </div>
                  <BaseInputRepeater
                    id=""
                    label={`${t("price")}`}
                    name={`tour_prices[${index}][price]`}
                    placeholder={`${t("price")}`}
                    type="text"
                    value={item?.price}
                    onChange={(e) =>
                      setFieldValue(
                        `tour_prices[${index}][price]`,
                        e.target.value
                      )
                    }
                  /> */}

                  {values?.tour_prices?.length > 1 && (
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
