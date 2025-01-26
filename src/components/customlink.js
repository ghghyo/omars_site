import NextLink from "next/link";

const CustomLink = ({ children, ...props }) => {
  return (
    <NextLink {...props} legacyBehavior>
      {children}
    </NextLink>
  );
};

export default CustomLink;