import { AiOutlineHome } from "react-icons/ai";
import {
  IoEarthOutline,
  IoLocationOutline,
  IoStorefrontOutline,
  IoTicketOutline,
  IoJournalOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { FaRegFlag, FaSuitcaseRolling } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;
  heading?: string;
  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const linksData = [
  {
    icon: AiOutlineHome,
    label: "Home",
    link: "/",
  },
  {
    icon: FaRegFlag,
    label: "Countries",
    link: "/countries",
  },
  {
    icon: IoEarthOutline,
    label: "Cities",
    link: "/cities",
  },
  {
    icon: IoLocationOutline,
    label: "Places",
    link: "/places",
  },
  {
    icon: IoStorefrontOutline,
    label: "Categories",
    link: "/categories",
  },
  {
    icon: FaSuitcaseRolling,
    label: "Tours",
    link: "/tours",
  },
  {
    icon: IoJournalOutline,
    label: "Blogs",
    link: "/blogs",
  },
  // {
  //   icon: IoTicketOutline,
  //   label: "Coupons",
  //   link: "/coupons",
  // },
  {
    icon: IoCalendarOutline,
    label: "Bookings",
    link: "/bookings",
  },
];
