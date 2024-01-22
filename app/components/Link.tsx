import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";
interface props {
  href: string;
  children: string;
}
const Link = ({ href, children }: props) => {
  return (
    <NextLink href={href} passHref>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
