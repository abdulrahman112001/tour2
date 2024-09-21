import React from "react";
import { useFetch } from "../../../../hooks";
import CardMedia from "../CardMedia";
import { useParams } from "react-router-dom";
import LayoutMedia from "../LayoutMedia";

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
            <CardMedia item={item} refetch={refetch} />
          ))}
        </div>
      </div>
    </LayoutMedia>
  );
}

export default DetailsMedia;
