/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { KTSVG } from "../../../helpers";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";
import { AsideMenu } from "../../../../app/modules/system/model/MenuModel";
import { getAsideAppSystem } from "../../../../app/modules/system/systemService";

export function AsideMenuMain() {
  const [asideMenu, setAsideMenu] = useState<AsideMenu>();
  useEffect(() => {
    async function getAsideMenuData() {
      const response = await getAsideAppSystem();
      setAsideMenu(response.data);
    }
    getAsideMenuData();
  }, []);

  return (
    <>
      {asideMenu?.aside.items.map((item, index) => (
        <div key={index}>
          {item.section !== "" ? (
            <div className="menu-item">
              <div className="menu-content pt-8 pb-2">
                <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                  {item.section}
                </span>
              </div>
            </div>
          ) : (
            <>
              <AsideMenuItemWithSub
                to={item.page}
                title={item.title}
                fontIcon={item.icon}
              >
                {item.submenu?.map((subitem, subIndex) => (
                  <AsideMenuItem
                    key={subIndex}
                    to={subitem.page}
                    title={subitem.title}
                    hasBullet={true}
                  />
                ))}
              </AsideMenuItemWithSub>
            </>
          )}
        </div>
      ))}
      <div className="menu-item">
        <div className="menu-content">
          <div className="separator mx-1 my-4"></div>
        </div>
      </div>
      <div className="menu-item">
        <a
          target="_blank"
          className="menu-link"
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + "/docs/changelog"}
        >
          <span className="menu-icon">
            <KTSVG
              path="/media/icons/duotune/general/gen005.svg"
              className="svg-icon-2"
            />
          </span>
          <span className="menu-title">
            Changelog {process.env.REACT_APP_VERSION}
          </span>
        </a>
      </div>
    </>
  );
}
