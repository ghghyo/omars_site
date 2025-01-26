import NextLink from "next/link";
import React from "react";

/**
 * @param {{children?:React.ReactNode}&React.HTMLAttributes<HTMLAnchorElement>&import("next/link").LinkProps} props
 */

const Link = ({
  children,
  href,
  replace,
  passHref,
  scroll,
  shallow,
  prefetch,
  locale,
  legacyBehavior,
  as,
  ...props
}) => {
  const linkProps = {
    href,
    replace,
    passHref,
    scroll,
    shallow,
    prefetch,
    locale,
    legacyBehavior, // Keep legacy behavior here
    as,
  };

  if (legacyBehavior) {
    // With legacyBehavior, use the <a> tag
    return (
      <NextLink {...linkProps}>
        <a href={typeof href === "string" ? href : href.href} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }

  // Without legacyBehavior, do not wrap in <a>
  return (
    <NextLink {...linkProps}>
      {children}
    </NextLink>
  );
};

export default Link;
