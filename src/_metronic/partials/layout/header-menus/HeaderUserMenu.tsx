/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../app/modules/auth/useAuth";
import { Languages } from "./Languages";

const HeaderUserMenu: FC = () => {
  const auth = useAuth();

  const logout = () => {
    auth.logOut();
  };

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {auth.userAuth.fullName}
            </div>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5">
        <Link to={"/crafted/pages/profile"} className="menu-link px-5">
          My Profile
        </Link>
      </div>

      <div className="separator my-2"></div>
      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          Sign Out
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
