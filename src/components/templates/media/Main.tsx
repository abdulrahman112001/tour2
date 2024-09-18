import { t } from "i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks";
import NextPaginationIc from "../../atoms/icons/NextPaginationIc";
import PreviousPage from "../../atoms/icons/PreviousPage";
import { AddButton } from "../../molecules/AddButton";
import { ModalTemplate } from "../../molecules/ModalTemplate";
import Paginate from "../../molecules/table/Paginate";
import Add from "./Add";
import CardFolder from "./CardFolder";
import AddFolder from "./AddFolder";
import LayoutMedia from "./LayoutMedia";
type AllMedia_TP = {
  data: {
    title: string;
    is_active: boolean;
    id: string;
  }[];
};
function Main() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFolderOpen, setIsModalFolderOpen] = useState(false);

  const [MainData, setMainData] = useState({});

  const queryParams = {
    // page: page,
    // paginate: pagePagination,
    // per_page: pageSize,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `media-files?${searchParams.toString()}`;
  const { data: AllMedia, refetch } = useFetch<AllMedia_TP>({
    endpoint: endpoint,
    queryKey: [endpoint],
  });
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div>
      {/* <div className=" flex justify-end gap-5 items mb-4">
        <div>
          <AddButton
            action={() => setIsModalOpen(true)}
            addLabel={`${t("Upload image")}`}
            className="!w-40"
          />
        </div>
        <div>
          <AddButton
            action={() => setIsModalFolderOpen(true)}
            addLabel={`${t("Create Folder")}`}
            className="!w-40"
          />
        </div>
      </div>
      <ModalTemplate
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Add
          refetch={refetch}
          update={MainData}
          setIsModalOpen={setIsModalOpen}
        />
      </ModalTemplate>
      <ModalTemplate
        isOpen={isModalFolderOpen}
        onClose={() => {
          setIsModalFolderOpen(false);
        }}
      >
        <AddFolder
          refetch={refetch}
          update={MainData}
          setIsModalOpen={setIsModalFolderOpen}
        />
      </ModalTemplate> */}
      <LayoutMedia MainData={MainData} refetch={refetch}>
        <div>
          <div className="grid grid-cols-9 gap-4">
            {AllMedia?.data?.map((item) => (
              <CardFolder item={item}   refetch={refetch}/>
            ))}
          </div>
          {/* <CardMedia refetch={refetch} /> */}

          <div className="flex justify-end mt-3">
            <Paginate
              pagesCount={AllMedia?.data?.lastPage}
              previousLabel={<PreviousPage />}
              nextLabel={<NextPaginationIc />}
              onPageChange={handlePageChange}
              initialPage={page}
            />
          </div>
        </div>
      </LayoutMedia>
    </div>
  );
}

export default Main;
