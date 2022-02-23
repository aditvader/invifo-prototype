import React, { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "../_metronic/i18n/i18nProvider";
import { LayoutProvider, LayoutSplashScreen } from "../_metronic/layout/core";
import AuthContext from "./modules/auth/context";
import { Routes } from "./routing/Routes";

type Props = {
  basename: string;
};

const App: React.FC<Props> = ({ basename }) => {
  const [userAuth, setUserAuth] = useState({
    userID: 1,
    userName: "Aditya",
    fullName: "Aditya Prawira",
    token: "12345",
    isAuthorized: true,
  });

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <LayoutProvider>
            <AuthContext.Provider value={{ userAuth, setUserAuth }}>
              <Routes />
            </AuthContext.Provider>
          </LayoutProvider>
        </I18nProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export { App };
