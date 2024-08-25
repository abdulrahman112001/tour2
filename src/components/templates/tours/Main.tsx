import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { AddButton } from "../../molecules/AddButton";
import CardTour from "./CardTour";
import Paginate from "../../molecules/table/Paginate";
import PreviousPage from "../../atoms/icons/PreviousPage";
import NextPaginationIc from "../../atoms/icons/NextPaginationIc";
import { useState } from "react";
type AllTours_TP = {
  data: {
    title: string;
    is_active: boolean;
    id: string;
  }[];
};
function Main() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);


  const queryParams = {
    // page: page,
    // paginate: pagePagination,
    // per_page: pageSize,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `tours?${searchParams.toString()}`;
  const {
    data: AllTours,
    refetch,
    isSuccess,
    isFetching,
    isLoading,
  } = useFetch<AllTours_TP>({
    endpoint: endpoint,
    queryKey: [endpoint],
    onSuccess: () => {},
  });
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  console.log("🚀 ~ Main ~ AllTours:", AllTours);
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
        {AllTours?.data?.map((item) => (
          <CardTour item={item} refetch={refetch} />
        ))}
           <div className="flex justify-end mt-3">
          <Paginate
            pagesCount={AllTours?.data?.lastPage}
            previousLabel={<PreviousPage />}
            nextLabel={<NextPaginationIc />}
            onPageChange={handlePageChange}
            initialPage={page}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
