import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

const Portal = ({ children }) => {
  const [portalElement] = useState(document.createElement("div"));

  useEffect(() => {
    portalRoot.appendChild(portalElement);

    return () => {
      portalRoot.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(children, portalElement);
};

export default Portal;