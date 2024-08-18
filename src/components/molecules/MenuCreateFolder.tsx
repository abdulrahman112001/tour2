import { useRef } from "react";
import { Button, Menu, rem } from "@mantine/core";
import { t } from "i18next";
import { FaRegFolderClosed } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiFolderUploadFill } from "react-icons/ri";
import { useMutate } from "../../hooks";
import { notify } from "../../utils/toast";
import { useQueryClient } from "@tanstack/react-query";

type MenuCreateFolder_TP = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  parent_id: string;
};

function MenuCreateFolder({ setOpen, parent_id }: MenuCreateFolder_TP) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const {
    mutate: createFile,
    uploadProgress,
    isSuccess,
    isLoading,
  } = useMutate({
    mutationKey: [`manager/file/store`],
    endpoint: `manager/file/store`,
    onSuccess: () => {
      notify("success", `${t("files Added Success")}`);
      //@ts-ignore
      queryClient.invalidateQueries("manager_folders");
    },
    onError: () => {
      notify("error", `${t("Error uploading files")}`);
    },
    formData: true,
  });

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]);
      }
      if (parent_id) {
        formData.append("folder_id", parent_id);
      }
      createFile(formData);
    }
  };

  return (
    <div className="relative">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button className="bg-main text-white">
            <p>
              <IoMdAdd />
            </p>
            <p className="ml-1">{t("Add")}</p>
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            onClick={() => setOpen(true)}
            leftSection={
              <FaRegFolderClosed
                style={{ width: rem(17), height: rem(17) }}
                className="text-mainGray"
              />
            }
          >
            Create folder
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Upload from computer</Menu.Label>
          <Menu.Item
            onClick={handleFileClick}
            leftSection={
              <MdOutlineUploadFile
                style={{ width: rem(17), height: rem(17) }}
                className="text-mainGray"
              />
            }
          >
            Files
          </Menu.Item>
          <Menu.Item
            leftSection={
              <RiFolderUploadFill
                style={{ width: rem(17), height: rem(17) }}
                className="text-mainGray"
              />
            }
          >
            Folder
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <input
        type="file"
        ref={fileInputRef}
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default MenuCreateFolder;
