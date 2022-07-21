import React, { useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";

const CommonLayout = () => {
  const op = useRef(null);
  const navigate = useNavigate();

  const getAccount = () => {
    const account = localStorage.getItem("account");
    if (account) {
      return JSON.parse(account);
    }
    return null;
  };

  const navigationItems = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const profileItemsSignedIn = [
    {
      label: "Sign out",
      command: () => {
        console.log("signed out");
      },
    },
  ];

  const profileItemsSignedOut = [
    {
      label: "Sign in",
      command: () => {
        console.log("signed in");
        navigate("/login");
      },
    },
  ];

  const avatar = (
    <>
      <Avatar
        icon="pi pi-user"
        className="mr-2"
        size="large"
        shape="circle"
        onClick={(e) => {
          op.current.toggle(e);
        }}
      />
      <Menu
        id="popup_menu"
        ref={op}
        popup
        model={getAccount() ? profileItemsSignedIn : profileItemsSignedOut}
      />
    </>
  );

  return (
    <header>
      <Menubar model={navigationItems} end={avatar} />
    </header>
  );
};

export default CommonLayout;
