import React, { FC } from "react";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { Image } from "react-bootstrap";
import { PageTitle } from "../../../_metronic/layout/core";
type Props = {
  history: any;
};
const Menu: FC<Props> = ({ history }) => {
  return (
    <React.Fragment>
      <PageTitle breadcrumbs={[]}>Main Menu</PageTitle>
      <div className="row menu-row-modules">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="menu-modules">
            <span className="module-title text-white">
              SAP Automation Rollout
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div className="menu-grid-square">
            <Card
              onClick={() => {
                history.push("/rollout/rollout-list");
              }}
            >
              <CardActionArea>
                <CardContent>
                  <div className="menu-title">Companies Rollout</div>
                  <br />
                  <Image
                    src={
                      process.env.PUBLIC_URL +
                      `/media/icons/business-partner-setup.png`
                    }
                    style={{
                      width: 80,
                      height: 80,
                    }}
                    className="img-fluid"
                    alt="Tile Menu"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
