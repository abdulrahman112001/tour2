import { FaCheckCircle } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import DeleteMain from "./DeleteMain";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type CardTour_TP = {
  item: {
    title: string;
    is_active: boolean;
    id: string;
  };
  refetch: () => void;
};

function CardTour({ item, refetch }: CardTour_TP) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 p-5 ">
        <div>
          <img
            src="/tour.jpg"
            alt=""
            style={{
              width: "160px",
              height: "120px",
            }}
          />
        </div>
        <div>
          <p className="font-bold">{item?.title}</p>
          <div className="flex  gap-3">
            <p className="text-[#6e7277] text-[14px]">
              Product code: {item?.id}
            </p>
            <p className="flex items-center gap-1 cursor-pointer text-[#186b6d] text-[14px]">
              View on Site
              <LuExternalLink className="text-[#186b6d] text-lg" />
            </p>
            {item?.is_complete_data == 1 ? (
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
      <div className="flex flex-col gap-3">
        <button
          className="bg-[#186b6d] p-3 rounded-md px-10 text-white w-full "
          onClick={() => navigate(`/tours/edit/${item?.id}`)}
        >
          Improve
        </button>
        <DeleteMain Main_id={item?.id} refetch={refetch} />
      </div>
    </div>
  );
}

export default CardTour;
