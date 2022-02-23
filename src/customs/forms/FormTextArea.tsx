import { FC } from "react";
import { Editor } from "primereact/editor";
import { useFormikContext } from "formik";
type Props = {
  name: string;
};
const FormTextArea: FC<Props> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<any>();
  return (
    <>
      <Editor
        style={{ height: "280px", width: "100%" }}
        onTextChange={(e) => {
          setFieldValue("note", e.htmlValue);
        }}
        value={values[name]}
        placeholder="Type your text here..."
      />
    </>
  );
};

export default FormTextArea;
