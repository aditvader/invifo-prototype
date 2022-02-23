import { FC } from "react";
type Props = {
  label: string;
  value: any;
};
const style = {
  marginBottom: "10px",
};
const labelStyle = {
  marginBottom: "0px",
};
export const CustomDataField: FC<Props> = ({ label, value }) => (
  <div className="form-group" style={style}>
    <label className="form-label" style={labelStyle}>
      {label}
    </label>
    <input
      type="text"
      value={value}
      className="form-control form-control-solid"
      readOnly
    />
  </div>
);
