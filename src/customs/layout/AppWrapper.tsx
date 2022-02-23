import { FC } from "react";
type Props = {
  title?: string;
  buttons?: [
    {
      color: string;
      title: string;
      onClick: () => {};
    }
  ];
  showHeader: boolean;
  children: any;
  cardStyle?: Object;
};

const AppWrapper: FC<Props> = ({
  title,
  buttons,
  showHeader,
  children,
  cardStyle,
}) => {
  return (
    <div
      className="card border border-2 border-gray-300 border-hover"
      style={cardStyle}
    >
      {showHeader ? (
        <div className="card-header border-0 pt-9">
          {title !== "" ? <div className="card-title m-0">{title}</div> : null}

          <div className="card-toolbar">
            {buttons?.map((button, index) => (
              <button
                className={`btn btn-${button.color}`}
                onClick={button.onClick}
              >
                {button.title}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <div className="card-body p-9">{children}</div>
    </div>
  );
};

export default AppWrapper;
