import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return isDesktop ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 320 });
  return isMobile ? children : null;
};

export const Tablet = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};
