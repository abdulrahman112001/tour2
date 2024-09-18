import React from "react";
import DetailsMedia from "../../../components/templates/media/details-media/Index";
import { useParams } from "react-router-dom";

function DetailsFolder() {
  const { id } = useParams();
  return (
    <div>
      <DetailsMedia id={id} />
    </div>
  );
}

export default DetailsFolder;
