/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface PageLink {
  title: string;
  path: string;
  isActive: boolean;
  isSeparator?: boolean;
}

export interface Button {
  title: string;
  color: string;
  onClick: () => void;
}

export interface PageDataContextModel {
  pageTitle?: string;
  setPageTitle: (_title: string) => void;
  pageDescription?: string;
  setPageDescription: (_description: string) => void;
  pageBreadcrumbs?: Array<PageLink>;
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void;
  actionButtons?: Array<Button>;
  setActionButtons: (_actionButtons: Array<Button>) => void;
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
  setPageDescription: (_description: string) => {},
  setActionButtons: (_actionButtons: Array<Button>) => {},
});

const PageDataProvider: React.FC = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([]);
  const [actionButtons, setActionButtons] = useState<Array<Button>>([]);
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs,
    actionButtons,
    setActionButtons,
  };
  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  );
};

function usePageData() {
  return useContext(PageDataContext);
}

type Props = {
  description?: string;
  breadcrumbs?: Array<PageLink>;
  actionButtons?: Array<Button>;
};

const PageTitle: FC<Props> = ({ children, description, breadcrumbs }) => {
  const { setPageTitle, setPageDescription, setPageBreadcrumbs } =
    usePageData();
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString());
    }
    return () => {
      setPageTitle("");
    };
  }, [children]);

  useEffect(() => {
    if (description) {
      setPageDescription(description);
    }
    return () => {
      setPageDescription("");
    };
  }, [description]);

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs);
    }
    return () => {
      setPageBreadcrumbs([]);
    };
  }, [breadcrumbs]);

  return <></>;
};

const PageAction: React.FC<Props> = ({ actionButtons }) => {
  const { setActionButtons } = usePageData();
  useEffect(() => {
    if (actionButtons) {
      setActionButtons(actionButtons);
    }
    return () => {
      setActionButtons([]);
    };
  }, [actionButtons]);
  return <></>;
};

const PageDescription: React.FC = ({ children }) => {
  const { setPageDescription } = usePageData();
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString());
    }
    return () => {
      setPageDescription("");
    };
  }, [children]);
  return <></>;
};

export {
  PageDescription,
  PageTitle,
  PageAction,
  PageDataProvider,
  usePageData,
};
