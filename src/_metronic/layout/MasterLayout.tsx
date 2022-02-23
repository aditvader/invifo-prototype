import React, { useEffect } from "react";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { Toolbar } from "./components/toolbar/Toolbar";
import { ScrollTop } from "./components/ScrollTop";
import { Content } from "./components/Content";
import { PageDataProvider } from "./core";
import { useLocation } from "react-router-dom";
import {
  DrawerMessenger,
  ExploreMain,
  ActivityDrawer,
  Main,
  InviteUsers,
  UpgradePlan,
} from "../partials";
import { MenuComponent } from "../assets/ts/components";

const MasterLayout: React.FC = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.key]);

  return (
    <PageDataProvider>
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
          style={{
            backgroundImage: "linear-gradient(#2ca7b0, #164778);",
          }}
        >
          <HeaderWrapper />

          <div
            id="kt_content"
            className="content d-flex flex-column flex-column-fluid"
            style={{
              backgroundImage: "linear-gradient(#2ca7b0, #164778)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
            }}
          >
            <Toolbar />
            <div className="post d-flex flex-column-fluid" id="kt_post">
              <Content>{children}</Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <ExploreMain />
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <Main />
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  );
};

export { MasterLayout };
