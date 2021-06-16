import HomeIcon from "@material-ui/icons/Home";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

interface sidebarRoutesProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  to: string;
}

const sidebarRoutes: sidebarRoutesProps[] = [
  {
    icon: HomeIcon,
    to: "/",
  },
  {
    icon: LocalOfferIcon,
    to: "/tags",
  },
];

export default sidebarRoutes;

// <ViewListIcon />
// <ViewModuleIcon />
