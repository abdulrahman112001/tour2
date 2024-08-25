import { t } from "i18next";
import { useFetch } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";
import { Label } from "../../atoms";

type SelectPlaces_tp = {
  name: string;
  label?: string;
  placeholder?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelStyle?: string;
  required?: boolean;
  with_places?: boolean;
};
export default function SelectPlaces({
  name,
  label,
  labelStyle = "",
  labelProps = {},
  with_places,
  required,
  value
}: SelectPlaces_tp) {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["places"],
    endpoint: `places?per_page=-1`,
  });
  const { values, setFieldValue } = useFormikContext<any>();
  console.log("🚀 ~ values:", values);

  const dataOptions = data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const dataOptionsWithCities = values?.places?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const selectedCountry = dataOptions?.find(
    (option: OptionType) => option?.value ==(value || values[name])
  );
  return (
    <div className="mt-2">
      <Label
        htmlFor=""
        {...labelProps}
        required={required}
        className={`mb-1 text-sm ${labelStyle}`}
      >
        {label}
      </Label>
      <Select
        placeholder={with_places ? `${t("choose city first")}` :`${t("choose city")}`}
        // label={label}
        id="optionStatus"
        name={name}
        // isMulti
        value={selectedCountry}
        isDisabled={!isLoading && !!failureReason}
        loadingPlaceholder={`${t("loading")}`}
        loading={isLoading}
        options={with_places ? dataOptionsWithCities : dataOptions}
        onChange={(option: OptionType) => setFieldValue(name, option?.value)}
      />
    </div>
  );
}
