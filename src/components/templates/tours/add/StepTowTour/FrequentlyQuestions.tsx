import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import BaseInputRepeater from "../../../../molecules/formik-fields/BaseInputRepeater";
import { SvgDelete } from "../../../../atoms/icons/SvgDelete";
import DateInputMantine from "../../../../molecules/formik-fields/DateInputMantine";
import { TextAreaField } from "../../../../molecules";

function FrequentlyQuestions() {
  const { values, setFieldValue, errors } = useFormikContext<any>();

  return (
    <div>
      {" "}
      <h1 className="text-start text-teal-600 font-semibold mb-8 text-[20px]">
        {t("Frequently questions")}
      </h1>
      <FieldArray name="frequently_questions">
        {({ push, remove }) => (
          <div className=" col-span-full  relative">
            {values?.frequently_questions?.map((item: any, index: any) => (
              <>
                <p className="font-bold"> {index + 1}</p>
                <div className="grid grid-cols-2 relative gap-2 border border-dashed p-2 pb-10 rounded-xl my-2  ">
                  <BaseInputRepeater
                    id=""
                    label={`${t("question")}`}
                    name={`frequently_questions[${index}][question]`}
                    placeholder={`${t("question")}`}
                    type="text"
                    value={item?.question}
                    onChange={(e) =>
                      setFieldValue(
                        `frequently_questions[${index}][question]`,
                        e.target.value
                      )
                    }
                  />
                  <TextAreaField
                    id=""
                    label={`${t("answer")}`}
                    name={`frequently_questions[${index}][answer]`}
                    placeholder={`${t("answer")}`}
                    value={item?.answer}
                    onChange={(e) =>
                      setFieldValue(
                        `frequently_questions[${index}][answer]`,
                        e.target.value
                      )
                    }
                  />

                  {values?.frequently_questions?.length > 1 && (
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
              className="bg-red-500 text-white rounded-md p-2  w-8 h-8 flex items-center justify-center absolute bottom-[5px] ltr:right-[10px] "
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

export default FrequentlyQuestions;
