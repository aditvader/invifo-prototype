import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
const ResponsiveEllipsis = ({ text, maxLine }) => {
  const ResponsiveEllipsisHOC = responsiveHOC()(LinesEllipsis);
  return (
    <React.Fragment>
      <div title={text}>
        <ResponsiveEllipsisHOC
          text={text}
          maxLine={maxLine}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </React.Fragment>
  );
};

export default ResponsiveEllipsis;
