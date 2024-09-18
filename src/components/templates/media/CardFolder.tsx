import React from "react";
import { FaFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CardMedia from "./CardMedia";
import DeleteMain from "./DeleteMain";

function CardFolder({ item, refetch }) {
  return (
    <div className="relative">
      {item?.type == "folder" ? (
        <div>
          <Link to={`/media/${item?.id}`} className=" cursor-pointer">
            <FaFolderOpen className="w-full h-28 text-main" />
            <p className="text-center">{item?.name}</p>
          </Link>
          <div className="cursor-pointer">
            <DeleteMain file_id={item?.id} refetch={refetch} />
          </div>
        </div>
      ) : (
        <CardMedia item={item?.content} />
      )}
    </div>
  );
}

export default CardFolder;
