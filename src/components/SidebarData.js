import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Setting User Outlet",
    path: "/setuseroutlet",
    icon: <FaIcons.FaRegSun />,
    cName: "nav-text",
  },
  {
    title: "HandOver Cash - Gas to Teller",
    path: "/handovercash-gas2teller",
    icon: <MdIcons.MdSubdirectoryArrowRight />,
    cName: "nav-text",
  },
  {
    title: "HandOver Cash - Teller to Gas",
    path: "/handovercash-teller2gas",
    icon: <MdIcons.MdSubdirectoryArrowLeft />,
    cName: "nav-text",
  },
  {
    title: "RV Transfer",
    path: "/rvtransfer",
    icon: <IoIcons.IoIosApps />,
    cName: "nav-text",
  },
  {
    title: "Cash Opname",
    path: "/cashopname",
    icon: <MdIcons.MdAttachMoney />,
    cName: "nav-text",
  },
  {
    title: "Send to Bank",
    path: "/sendtobank",
    icon: <AiIcons.AiTwotoneBank />,
    cName: "nav-text",
  },
  {
    title: "Rekonsiliasi Data",
    path: "/rekondata",
    icon: <AiIcons.AiFillDatabase />,
    cName: "nav-text",
  },
];
