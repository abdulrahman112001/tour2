import React from "react";
import CreatableSelect from "react-select/creatable";
import { Label } from "../../atoms";
import { selectClassNames, selectTheme } from "../formik-fields/Select";
import { Props as SelectProps } from "react-select";
import { useFormikContext } from "formik";

interface SelectCreateTagsProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const SelectCreateTags: React.FC<SelectCreateTagsProps> = ({
  label,
  required = false,
  placeholder = "Select or create tags",
  name,
}) => {
  const { values, setFieldValue } = useFormikContext();
  console.log("🚀 ~ values:", values);
  const options: SelectProps["options"] = [];

  return (
    <div className="col-span-1 mt-2">
      <div className="flex flex-col gap-1">
        {label && (
          <Label className="mb-3 text-sm" required={required}>
            {label}
          </Label>
        )}

        <CreatableSelect
          isMulti
          options={options}
          placeholder={placeholder}
          theme={selectTheme}
          onChange={(options) => {
            const allValues = options?.map((item) => item.value);
            setFieldValue(name, allValues);
          }}


        />
      </div>
    </div>
  );
};

export default SelectCreateTags;
