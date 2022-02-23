/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Toggle } from "./Toggle";
import { Demos } from "./Demos";
import { KTSVG } from "../../../helpers";

export function ExploreMain() {
  return (
    <>
      <Toggle />
      {/* begin::Exolore drawer */}
      <div
        id="kt_explore"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="explore"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_explore_toggle"
        data-kt-drawer-close="#kt_explore_close"
      >
        <h1>User Guide</h1>
      </div>
      {/* end::Exolore drawer */}
    </>
  );
}
