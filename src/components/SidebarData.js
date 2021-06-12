import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "NAVIGATION",
  },
  {
    title: "Homepage",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Dasboard",
    path: "/dashboard",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "ANOTHER MENU",
  },
  {
    title: "Friends",
    path: "/friends",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Information",
    path: "/information",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
