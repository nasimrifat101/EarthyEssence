import { NavLinkRenderProps } from "react-router-dom";

type NavLinkClassNameFunction = (
    props: NavLinkRenderProps
  ) => string | undefined;
  

  const getNavLinkClassName: NavLinkClassNameFunction = ({
    isActive,
    isPending,
  }) => {
    if (isPending) return "pending";
    return isActive ? "text-[#4aed8b] underline" : "";
  };

  export default getNavLinkClassName