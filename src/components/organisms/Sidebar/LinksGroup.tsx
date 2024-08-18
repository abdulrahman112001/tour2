import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { t } from "i18next";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import classes from "./NavbarLinksGroup.module.css";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; permission?: string }[]; 
  link: any;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links = [],
}: LinksGroupProps) {
  const { hasPermission } = useAuth();
  const location = useLocation();
  const [opened, setOpened] = useState(initiallyOpened || false);

  

  const visibleLinks = links.filter(link => !link.permission || hasPermission(link.permission));

  const items = visibleLinks.map((link) => (
    <Link to={link.link} className={classes.link} key={link.label}>
      <Text component="div">
        <Box style={{ display: "flex", alignItems: "center" }} className="w-full">
          <ThemeIcon variant="light" size={30} style={{ backgroundColor: "#e7e9ec" }}>
            <Icon style={{ width: "10px", height: "15px" }} />
          </ThemeIcon>
          <Box
            mx="md"
            className={
              location.pathname === link.link
                ? " w-full   rounded-md text-[#1d2327]"
                : "text-[13px]"
            }
          >
            {t(link.label)}
          </Box>
        </Box>
      </Text>
    </Link>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" className="flex-nowrap" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }} className="w-full ">
            <ThemeIcon variant="light" size={30} style={{ backgroundColor: "transparent" }}>
              <Link to={link}>
                <Icon style={{ width: "23px", height: "23px", color: "#5f616a " }} />
              </Link>
            </ThemeIcon>
            <Link to={link}>
              <Box
                mx="md"
                className={
                  location.pathname == link
                    ? " w-full  rounded-md text-[#1d2327] font-bold"
                    : ""
                }
              >
                {t(label)}
              </Box>
            </Link>
          </Box>

          {visibleLinks.length > 0 && (
            <IconChevronLeft
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: "16px",
                height: "16px",
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {visibleLinks.length > 0 ? <Collapse in={opened}>{items}</Collapse> : null}
      
    </>
  );
}
