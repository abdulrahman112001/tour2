import React, { useContext, useState } from "react";
import { ModalTemplate } from "../../molecules/ModalTemplate";
import { useFetch } from "../../../hooks";
import { FaFolderOpen } from "react-icons/fa";
import DeleteFolder from "./DeleteFolder";
import DeleteMain from "./DeleteMain";
import { FormikContext, FormikValues } from "formik";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Label } from "../../atoms";
import LayoutMedia from "./LayoutMedia";

interface UploadMediaProps {
  name: string;
  isMulti?: boolean;
  label: string;
}

interface MediaItem {
  id: string;
  url?: string;
  content?: { url: string };
  type: "folder" | "file";
  name: string;
  parent_id?: string;
}

const UploadMedia: React.FC<UploadMediaProps> = ({
  name,
  isMulti = false,
  label,
}) => {
  const { values, setFieldValue } = useContext(FormikContext) as FormikValues;
  const [open, setOpen] = useState(false);
  const AllIds = values[name]?.map((item) => item?.id);
  console.log("🚀 ~ AllIds:", AllIds);
  const [selectedIds, setSelectedIds] = useState(AllIds || []);
  console.log("🚀 ~ selectedIds:", selectedIds)

  const queryParams = {};
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `media-files?${searchParams.toString()}`;

  const { data: AllMedia, refetch } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });

  // Handle selecting a folder
  const handleFolderClick = (folderId: string) => {
    setFieldValue("selectedFolder", folderId);
  };

  // Handle selecting an image (single or multiple)
  const handleImageSelect = (imageId: string, imageUrl: string) => {
    if (isMulti) {
      const selectedImages = values[name] || [];
      if (!selectedImages.some((img: MediaItem) => img.id === imageId)) {
        setFieldValue(name, [
          ...selectedImages,
          { id: imageId, url: imageUrl },
        ]);
      }
      handleSelect(imageId);
    } else {
      setFieldValue(name, [{ id: imageId, url: imageUrl }]);
    }
  };

  // Handle back button click (to go back to folder view)
  const handleBackClick = () => {
    setFieldValue("selectedFolder", null);
  };

  // Filter media items based on selected folder
  const filteredMedia = AllMedia?.data?.filter(
    (item: MediaItem) =>
      item?.parent_id === values.selectedFolder ||
      item?.id === values.selectedFolder
  );

  // Handle cancel button (reset selections)
  const handleCancel = () => {
    setFieldValue(name, isMulti ? [] : null); // Reset selected images
    setOpen(false);
  };

  // Handle save button (close modal)
  const handleSave = () => {
    setOpen(false);
  };

  // Handle removing an image from selected images
  const handleRemoveImage = (imageId: string) => {
    const updatedImages = values[name]?.filter(
      (image: MediaItem) => image.id !== imageId
    );
    setFieldValue(name, updatedImages);
  };
  const handleSelect = (id: number | string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };
  return (
    <div>
      <ModalTemplate isOpen={open} onClose={() => setOpen(false)}>
        <div className="p-4">
          <LayoutMedia
            refetch={refetch}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            
          >
            <div className="p-4 w-full h-[80vh] m-2">
              {values.selectedFolder && (
                <button
                  className="mb-4 px-4 py-2 bg-blue-500 text-white rounded mx-5"
                  onClick={handleBackClick}
                >
                  Back
                </button>
              )}
              <div
                className={`flex flex-col justify-between ${
                  values.selectedFolder ? "h-[68vh]" : "h-[75vh]"
                } `}
              >
                <div className="grid grid-cols-9 gap-4">
                  {!values.selectedFolder &&
                    AllMedia?.data?.map((item: MediaItem) => (
                      <div key={item?.id} className="relative">
                        {item?.type === "folder" ? (
                          <div>
                            <div
                              className="cursor-pointer"
                              onClick={() => handleFolderClick(item?.id)}
                            >
                              <FaFolderOpen className="w-full h-28 text-main" />
                              <p className="text-center">{item?.name}</p>
                            </div>
                            {/* <div className="cursor-pointer">
                            <DeleteFolder
                              file_id={item?.id}
                              refetch={refetch}
                            />
                          </div> */}
                          </div>
                        ) : (
                          <div
                            // className={`cursor-pointer ${
                            //   selectedIds.includes(item?.id) ? "border-2 border-red-500" : ""
                            // }`}
                            // onClick={() => handleSelect(item?.id)}
                            className={`relative cursor-pointer ${
                              // values[name]?.som((item)=>
                              // item?.id == item?.content?.id
                              // ) || 
                              !isMulti ? 
                              values[name]?.some(
                                (img: MediaItem) =>
                                  img?.id === item?.content?.id
                              ) ? "border-2 border-red-500 rounded-md" :"" :
                              selectedIds.includes(item?.content?.id)

                                ? "border-2 border-red-500 rounded-md"
                                : ""
                            }`}
                            onClick={() => {
                              handleImageSelect(
                                item?.content?.id,
                                item?.url || item?.content?.url || ""
                              );
                              
                            }}
                          >
                            <img
                              src={item?.url || item?.content?.url || ""}
                              alt={item?.name}
                              className="w-[120px] h-[120px] rounded-md border"
                            />
                            {/* <div>
                            <DeleteMain file_id={item?.id} refetch={refetch} />
                          </div> */}
                          </div>
                        )}
                      </div>
                    ))}

                  {values.selectedFolder &&
                    filteredMedia?.map((item: MediaItem) => (
                      <div key={item?.id} className="relative">
                        {item?.type !== "folder" && (
                          <div
                            className={`cursor-pointer ${
                              values[name]?.some(
                                (img: MediaItem) => img.id === item?.id
                              )
                                ? "border-2 border-red-500"
                                : ""
                            }`}
                            onClick={() =>
                              handleImageSelect(
                                item?.id,
                                item?.url || item?.content?.url || ""
                              )
                            }
                          >
                            <img
                              src={item?.url || item?.content?.url || ""}
                              alt={item?.name}
                              className="w-[120px] h-[120px] rounded-md border"
                            />
                            <div>
                              <DeleteMain
                                file_id={item?.id}
                                refetch={refetch}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>

                <div className="flex justify-end mt-4 mx-10">
                  <button
                    className="mr-4 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={handleCancel}
                  >
                    cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-main text-white rounded"
                    onClick={handleSave}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </LayoutMedia>
        </div>
      </ModalTemplate>
      <Label htmlFor="">{label}</Label>
      <div
        className="border rounded-md p-4 h-[100px] flex justify-center items-center cursor-pointer flex-col"
        onClick={() => setOpen(true)}
      >
        <MdOutlineCloudUpload className="w-20 h-20" />
        <p className="text-gray-500">Upload</p>
      </div>

      <div className="grid grid-cols-3 mt-3 ">
        {values[name]?.map((image: MediaItem) => (
          <div key={image?.id} className="relative m-2">
            <div className="border rounded-md p-1">
              <img src={image?.url} alt="" className="w-full  h-20" />
            </div>
            <button
              className="absolute top-0 right-0 bg-red-500 text-white  rounded w-5 h-5"
              onClick={() => handleRemoveImage(image?.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadMedia;
