import React from "react";
import CardTour from "./CardTour";
import { AddButton } from "../../molecules/AddButton";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" flex justify-end items mb-4">
        <div>
          <AddButton
            action={() => {
              navigate("/tours/add");
            }}
            addLabel={`${t("Create")}`}
          />
        </div>
      </div>
      <div>
        <CardTour />
      </div>
    </div>
  );
}

export default Main;
