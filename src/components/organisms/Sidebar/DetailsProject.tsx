import { Avatar, Box, Title } from "@mantine/core";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import BaseInputSearch from "../../molecules/formik-fields/BaseInputSearch";
import { useFetch } from "../../../hooks";
import { IoAddCircleOutline, IoBagOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import { getInitials } from "../../../utils/helpers";
import { Loading } from "../../molecules/Loading/Loading";

type DetailsProject_TP = {
  classes: any;
  accountLinks: any;
};
function DetailsProject({ classes, accountLinks }: DetailsProject_TP) {
  const { user } = useAuth();
  const { id } = useParams();
  const [collapsed, setCollapsed] = useState(true);
  const { data: projects } = useFetch<any>({
    queryKey: ["manager/projects"],
    endpoint: "manager/projects",
  });
  const { data: detailsProject, isLoading } = useFetch<any>({
    queryKey: [`manager/projects/${id}`],
    endpoint: `manager/projects/${id}`,
    enabled: !!id,
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="relative">
        <div className="absolute z-20 left-0 right-0 bg-[#fbfbfb] pb-3 cursor-pointer">
          <Title
            order={5}
            className={`${classes?.title} flex justify-between items-center  `}
            onClick={() => setCollapsed(!collapsed)}
          >
            <div className="flex items-center gap-4 ">
              <Avatar
                color="white"
                radius="sm"
                className="bg-main w-[40px] h-[40px]"
              >
                {getInitials(user?.company?.company_title)}
              </Avatar>
              {detailsProject?.result?.data?.title
                ? detailsProject?.result?.data?.title
                : user?.company?.company_title}
            </div>
            {!collapsed ? (
              <FaAngleUp className="text-dark" />
            ) : (
              <FaAngleDown className="text-dark" />
            )}
          </Title>
        </div>
      
      </div>

      <Box mih={220} p="md" mt={50}>
        {accountLinks}
      </Box>
    </div>
  );
}

export default DetailsProject;
