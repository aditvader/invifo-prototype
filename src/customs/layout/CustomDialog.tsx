import { FC } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface FooterButtonSt {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  action: () => void;
}

type Props = {
  open: boolean;
  maxWidth: "lg" | "md" | "sm" | "xl" | "xs" | undefined;
  title: string;
  children: any;
  footerButtons?: FooterButtonSt[];
  onClose?(): any;
};
const CustomDialog: FC<Props> = ({
  open,
  maxWidth,
  title,
  children,
  footerButtons,
  onClose,
}) => {
  return (
    <Dialog open={open} fullWidth={true} maxWidth={maxWidth} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {footerButtons ? (
        <DialogActions>
          {footerButtons &&
            footerButtons.map((button, index) => (
              <button
                key={index}
                className={`btn btn-${button.color} btn-sm float-end`}
                type={button.type}
                onClick={button.action}
                color={button.color}
              >
                {button.label}
              </button>
            ))}
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default CustomDialog;
