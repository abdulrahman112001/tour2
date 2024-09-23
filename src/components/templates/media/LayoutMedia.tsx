import React, { useState } from "react";
import { AddButton } from "../../molecules/AddButton";
import { t } from "i18next";
import { ModalTemplate } from "../../molecules/ModalTemplate";
import Add from "./Add";
import AddFolder from "./AddFolder";
import { useParams } from "react-router-dom";

function LayoutMedia({ children, refetch, MainData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFolderOpen, setIsModalFolderOpen] = useState(false);
  const {id} = useParams()
  return (
    <div>
      <div className=" flex justify-end gap-5 items mb-4">
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
          FolderId={id}
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
      </ModalTemplate>
      <div>{children}</div>
    </div>
  );
}

export default LayoutMedia;
