import { Switch } from "@mantine/core";
import { useFormikContext } from "formik";
import { t } from "i18next";

type Activate_TP = {
  name: string;
};

function ActivationStatus({ name }: Activate_TP) {
  const { values, setFieldValue } = useFormikContext<any>();
  return (
    <div className="flex gap-2 items-center">
      <label>{t("Activation Status")}</label>
      <Switch
        style={{ justifyContent: "center", cursor: "pointer" }}
        onLabel={t("Active")}
        offLabel={t("Not Active")}
        size="lg"
        name={name}
        checked={values[name] == 1}
        onChange={() => setFieldValue(name, values[name] == 1 ? 0 : 1)}
      />
    </div>
  );
}

export default ActivationStatus;
