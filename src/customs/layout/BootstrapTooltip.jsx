import Tooltip from "@mui/material/Tooltip";
const BootstrapTooltip = (props) => {
  const useStylesBootstrap = {
    arrow: {
      color: "#2c2e3e !important",
    },
    tooltip: {
      backgroundColor: "#2c2e3e !important",
      fontSize: "1.05rem",
      borderRadius: "6px",
      padding: "10px 12px",
    },
  };
  const classes = useStylesBootstrap();

  return (
    <Tooltip
      arrow
      classes={classes}
      {...props}
      style={{ fontSize: "1.05rem" }}
    />
  );
};

export default BootstrapTooltip;
