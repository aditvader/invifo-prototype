import { FC, useState } from "react";
import { Formik } from "formik";
import { Alert } from "react-bootstrap";
import { PageAction } from "../../_metronic/layout/core";
type Props = {
  initialValues: Object;
  validationSchema: any;
  onSubmit: any;
  children: any;
  headSubmitButton?: boolean;
};
const AppForm: FC<Props> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  headSubmitButton = false,
}) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, errors, dirty }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          {headSubmitButton && dirty ? (
            <PageAction
              actionButtons={[
                {
                  title: "Save",
                  color: "primary",
                  onClick: () => {
                    setShowErrorMessage(true);
                    handleSubmit();
                  },
                },
              ]}
            />
          ) : null}

          {Object.keys(errors).length > 0 && showErrorMessage ? (
            <Alert
              variant="danger"
              onClose={() => setShowErrorMessage(false)}
              dismissible
            >
              <Alert.Heading>Error</Alert.Heading>
              {Object.values(errors).map((error) => (
                <>
                  {Array.isArray(error) ? (
                    error.map((message) => (
                      <>
                        {Object.keys(message).map((key) => (
                          <>
                            <span>{message[key]}</span> <br />
                          </>
                        ))}
                      </>
                    ))
                  ) : (
                    <>
                      <span>{error}</span>
                      <br />
                    </>
                  )}
                </>
              ))}
            </Alert>
          ) : null}

          {children}
        </form>
      )}
    </Formik>
  );
};

export default AppForm;
