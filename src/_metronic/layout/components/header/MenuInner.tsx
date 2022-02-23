import React from "react";
import { MenuItem } from "./MenuItem";
import { useIntl } from "react-intl";

export function MenuInner() {
  const intl = useIntl();
  return (
    <>
      <MenuItem title="Menu" to="/menu" />
    </>
  );
}
