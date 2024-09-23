import React from "react";
import { useFetch } from "../../../../hooks";
import CardMedia from "../CardMedia";
import { useParams } from "react-router-dom";
import LayoutMedia from "../LayoutMedia";
import { Link } from "react-router-dom";
import DeleteFolder from "../DeleteFolder";
import { FaFolderOpen } from "react-icons/fa";

function DetailsMedia({ id }) {
  const queryParams = {
    // page: page,
    // paginate: pagePagination,
    // per_page: pageSize,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `media-files/${id}?${searchParams.toString()}`;
  const {
    data: AllMedia,
    refetch,
    isSuccess,
    isFetching,
    isLoading,
  } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });
  return (
    <LayoutMedia refetch={refetch}>
      <div>
        <div className="grid grid-cols-12 gap-1">
          {AllMedia?.data?.content?.data?.map((item) => (
            <div className="relative">
              {item?.type == "folder" ? (
                <div>
                  <Link to={`/media/${item?.id}`} className=" cursor-pointer">
                    <FaFolderOpen className="w-full h-28 text-main" />
                    <p className="text-center">{item?.name}</p>
                  </Link>
                  <div className="cursor-pointer">
                    <DeleteFolder file_id={item?.id} refetch={refetch} />
                  </div>
                </div>
              ) : (
                <CardMedia item={item} refetch={refetch} />
              )}
            </div>
          ))}
        </div>
      </div>
    </LayoutMedia>
  );
}

export default DetailsMedia;
