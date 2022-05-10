import { useEffect } from "react";

export default function PageTitle({ title }) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log("Page Title", title);
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, []);
}
