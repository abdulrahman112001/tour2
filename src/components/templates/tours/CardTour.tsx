import { FaCheckCircle } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import DeleteMain from "./DeleteMain";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DropDown from "../../molecules/DropDown/DropDown";
import UpdateIcon from "../../molecules/UpdateIcon";
import { AddIcon } from "../../atoms/icons";

type CardTour_TP = {
  item: {
    title: string;
    is_active: boolean;
    id: string;
  };
  refetch: () => void;
  setIsModalSeoOpen: any;
  setModel_id: any;
  setMainData: any;
};

function CardTour({
  item,
  refetch,
  setIsModalSeoOpen,
  setModel_id,
  setMainData,
}: CardTour_TP) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 p-5 ">
        <div>
          <img
            src={item?.main_image?.url}
            alt=""
            style={{
              width: "160px",
              height: "120px",
            }}
          />
        </div>
        <div>
          <p className="font-bold">{item?.title}</p>
          <div className="flex gap-3">
            <p className="text-[#6e7277] text-[14px]">
              Product code: {item?.id}
            </p>
            <p className="flex items-center gap-1 cursor-pointer text-[#186b6d] text-[14px]">
              <a
                href={`https://sarayelnile.vercel.app/top-packages/${item?.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-x-2">
                  View on Site
                  <LuExternalLink className="text-[#186b6d] text-lg" />
                </div>
              </a>
            </p>
            {item?.is_complete_data === 1 ? (
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-[#186b6d]" />
                Good
              </p>
            ) : (
              <p className="flex items-center gap-2">
                <MdCancel className="text-[#ff3a3a]" />
                Need complete
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-3">
        <DropDown>
          <button
            className="bg-[#186b6d] p-2 w-full rounded-md  text-white "
            onClick={() => navigate(`/tours/edit/${item?.id}`)}
          >
            Improve
          </button>

          <DeleteMain Main_id={item?.id} refetch={refetch} />
          {item?.seo ? (
            <div
              className="bg-mainGray p-2 w-full rounded-md  text-white "
              onClick={() => {
                setModel_id(item?.id);
                setIsModalSeoOpen(true);
                setMainData(item);
              }}
            >
              Edit Seo
            </div>
          ) : (
            <div
              className="bg-mainGray p-2 w-full rounded-md  text-white "
              onClick={() => {
                setModel_id(item?.id);
                setIsModalSeoOpen(true);
              }}
            >
              Add Seo
            </div>
          )}
        </DropDown>
      </div>
    </div>
  );
}

export default CardTour;
