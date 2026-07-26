import { useEffect } from "react";

const PageTitle = ({ title }) => {

  useEffect(() => {

    document.title = `${title} | CitizenConnect`;

  }, [title]);

  return null;
};

export default PageTitle;