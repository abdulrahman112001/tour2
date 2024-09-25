import { AiOutlineHome } from "react-icons/ai";
import {
  IoEarthOutline,
  IoLocationOutline,
  IoStorefrontOutline,
  IoTicketOutline,
  IoJournalOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoPeopleOutline,
  IoInformationCircleOutline,
  IoDocumentTextOutline,
  IoShieldCheckmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaRegFlag, FaSuitcaseRolling, FaCity } from "react-icons/fa";
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
    icon: IoSettingsOutline,
    label: "Users",
    links: [
      // {
      //   icon: IoCallOutline,
      //   label: "Permission",
      //   link: "/setting-contact",
      // },
      // {
      //   icon: IoInformationCircleOutline,
      //   label: "Roles",
      //   link: "/setting-about",
      // },
      {
        icon: IoDocumentTextOutline,
        label: "Users",
        link: "/users",
      },
     
    ],
  },
  {
    icon: FaRegFlag,
    label: "Countries",
    link: "/countries",
  },
  {
    icon: FaCity,
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
  {
    icon: IoSettingsOutline,
    label: "Settings",
    links: [
      {
        icon: IoCallOutline,
        label: "Contact",
        link: "/setting-contact",
      },
      {
        icon: IoInformationCircleOutline,
        label: "About",
        link: "/setting-about",
      },
      {
        icon: IoDocumentTextOutline,
        label: "Terms Condition",
        link: "/setting-terms",
      },
      {
        icon: IoShieldCheckmarkOutline,
        label: "Privacy Policy",
        link: "/setting-privacy",
      },
    ],
  },
  {
    icon: IoCalendarOutline,
    label: "Bookings",
    // link: "/bookings",
    links: [
      {
        icon: IoShieldCheckmarkOutline,
        label: "Requests",
        link: "/requests",
      },
      {
        icon: IoShieldCheckmarkOutline,
        label: "Files",
        link: "/requests/files",
      },
    ]
   
  },
  {
    icon: IoCalendarOutline,
    label: "Media",
    link: "/media",
  
   
  },
];
