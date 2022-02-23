import { FC } from "react";
import { FieldArray } from "formik";
type Props = {
  children: any;
  arrayName: string;
};
const AppArrayForm: FC<Props> = ({ children, arrayName }) => {
  return (
    <FieldArray
      name={arrayName}
      render={({ push, remove }) => <>{children}</>}
    />
  );
};

export default AppArrayForm;
