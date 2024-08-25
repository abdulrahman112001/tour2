import { t } from "i18next";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import { Delete } from "../../atoms/icons/Delete";
import showAlert from "../../molecules/ShowAlert";

type DeleteMain_TP = {
  refetch: () => void;
  Main_id: string;
};
function DeleteMain({ refetch,Main_id }: DeleteMain_TP) {
  const [id, setID] = useState("");
  const { mutate } = useMutate({
    mutationKey: ["tours"],
    endpoint: `tours/${id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    method: "delete",
  });
  return (
    <div
      onClick={() => {
        showAlert(
          `${t("Are you sure?")}`,
          `${t("You cannot go back in this process")}`,
          false,
          t("Ok"),
          true,
          "warning",
          () => {
            mutate({});
          }
        );
        setID(Main_id);
      }}
    >
      <button className=" border border-red-500 p-2 rounded-md px-10 text-red-500 w-full ">
        Delete
      </button>
    </div>
  );
}

export default DeleteMain;
