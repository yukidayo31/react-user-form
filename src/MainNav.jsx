import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    // <Breadcrumb separator=">">
    //   <BreadcrumbItem>
    //     {/* <Heading> */}
    //     <BreadcrumbLink href="/">Home</BreadcrumbLink>
    //     {/* </Heading> */}
    //   </BreadcrumbItem>

    //   <BreadcrumbItem>
    //     <BreadcrumbLink href="/users">About</BreadcrumbLink>
    //   </BreadcrumbItem>

    //   {/* <BreadcrumbItem isCurrentPage>
    //     <BreadcrumbLink href="#">Contact</BreadcrumbLink>
    //   </BreadcrumbItem> */}
    // </Breadcrumb>

    // import { Link } from "@reach/router"

    <Breadcrumb spacing="8px" separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/users">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Register Account
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{curre}</BreadcrumbLink>
      </BreadcrumbItem> */}
    </Breadcrumb>
  );
}

export default MainNav;
