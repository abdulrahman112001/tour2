import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { AddButton } from "../../molecules/AddButton";
import CardTour from "./CardTour";
import Paginate from "../../molecules/table/Paginate";
import PreviousPage from "../../atoms/icons/PreviousPage";
import NextPaginationIc from "../../atoms/icons/NextPaginationIc";
import { useState } from "react";
import { ModalTemplate } from "../../molecules/ModalTemplate";
import AddSeo from "../../molecules/seo/AddSeo";
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
  const [isModalSeoOpen, setIsModalSeoOpen] = useState(false);
  const [model_id, setModel_id] = useState("");
  const [MainData, setMainData] = useState({});

  const queryParams = {
    page: page,
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
          <CardTour
            item={item}
            refetch={refetch}
            setIsModalSeoOpen={setIsModalSeoOpen}
            isModalSeoOpen={isModalSeoOpen}
            setMainData={setMainData}
            setModel_id={setModel_id}
          />
        ))}
        <ModalTemplate
          isOpen={isModalSeoOpen}
          onClose={() => {
            setIsModalSeoOpen(false);
          }}
        >
          <AddSeo
            refetch={refetch}
            update={MainData}
            model_type="tour"
            model_id={model_id}
            setIsModalSeoOpen={setIsModalSeoOpen}
          />
        </ModalTemplate>
        <div className="flex justify-end mt-3">
          <Paginate
            pagesCount={AllTours?.pagination?.last_page}
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
