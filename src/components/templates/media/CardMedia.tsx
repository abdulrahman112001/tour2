import React from "react";
import DeleteMain from "./DeleteMain";

type CardMedia_TP = {
  item: string;
  refetch?: () => void;
};
function CardMedia({ item, refetch }: CardMedia_TP) {
  console.log("🚀 ~ CardMedia ~ item:", item)
  return (
    <div className="relative">
      <div className="cursor-pointer">
        <img
          src={item?.url || item?.content?.url}
          alt=""
          className="w-[120px] h-[120px] rounded-md  border"
        />
        {/* <p>{item?.name}</p> */}
        <div>
          <DeleteMain file_id={item?.content?.id} refetch={refetch} />
        </div>
      </div>
    </div>
  );
}

export default CardMedia;
