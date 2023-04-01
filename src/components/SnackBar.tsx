import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import bundle from "../assets/images/bundle-deal.webp";
import { Link } from "react-router-dom";
export interface State extends SnackbarOrigin {
  open: boolean;
}
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} variant="filled" ref={ref} {...props} />;
});
export default function PositionedSnackbar({
  open,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  const handleClick = (newState: SnackbarOrigin) => () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "center",
        })}
      >
        Bottom-Center
      </Button>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      key={"bottom" + "center"}
    >
      <Alert
        onClose={handleClose}
        sx={{ width: "100%", backgroundColor: "#01456A" }}
      >
        <Link to="/bundle">
          <div className="flex items-center ">
            <img
              loading="lazy"
              alt="bundle offer for 12.99$"
              className=" w-[100px]"
              width={100}
              height={65}
              src={bundle}
            />
            <p className="text-sm text-white ">4 patterns for 12.99$</p>
          </div>
        </Link>
      </Alert>
    </Snackbar>
  );
}
