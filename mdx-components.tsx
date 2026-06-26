import type { ComponentPropsWithoutRef } from "react";
import {
  Box,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { MDXComponents } from "mdx/types";

import Page from "./src/app/components/Page";

function MdxLink({ children, href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}

const mdxComponents: MDXComponents = {
  wrapper: ({ children }) => (
    <Page>
      <Box
        component="article"
        sx={{
          color: "text.secondary",
          "& > :first-child": { mt: 0 },
          "& > :last-child": { mb: 0 },
        }}
      >
        {children}
      </Box>
    </Page>
  ),
  h1: ({ children }) => (
    <Typography
      variant="h3"
      component="h1"
      color="primary"
      sx={{ mt: 0, mb: 2, fontWeight: 800 }}
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      variant="h4"
      component="h2"
      color="text.secondary"
      sx={{ mt: 5, mb: 1.5, fontWeight: 700 }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant="h5"
      component="h3"
      color="text.secondary"
      sx={{ mt: 4, mb: 1.25, fontWeight: 700 }}
    >
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography
      variant="h6"
      component="h4"
      color="text.secondary"
      sx={{ mt: 3, mb: 1, fontWeight: 700 }}
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography
      variant="body1"
      component="p"
      sx={{ mb: 2, lineHeight: 1.75, fontSize: { xs: "1rem", sm: "1.08rem" } }}
    >
      {children}
    </Typography>
  ),
  a: MdxLink,
  ul: ({ children }) => (
    <Box component="ul" sx={{ mt: 0, mb: 2, pl: 3 }}>
      {children}
    </Box>
  ),
  ol: ({ children }) => (
    <Box component="ol" sx={{ mt: 0, mb: 2, pl: 3 }}>
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Typography component="li" sx={{ mb: 0.75, lineHeight: 1.7 }}>
      {children}
    </Typography>
  ),
  blockquote: ({ children }) => (
    <Box
      component="blockquote"
      sx={{
        my: 3,
        mx: 0,
        pl: 2,
        borderLeft: 4,
        borderColor: "secondary.main",
        color: "text.secondary",
      }}
    >
      {children}
    </Box>
  ),
  code: ({ children }) => (
    <Box
      component="code"
      sx={{
        px: 0.5,
        py: 0.25,
        borderRadius: 0.5,
        bgcolor: "grey.100",
        color: "primary.main",
        fontFamily: "monospace",
        fontSize: "0.9em",
      }}
    >
      {children}
    </Box>
  ),
  pre: ({ children }) => (
    <Box
      component="pre"
      sx={{
        my: 3,
        p: 2,
        overflowX: "auto",
        borderRadius: 1,
        bgcolor: "grey.900",
        color: "grey.100",
        fontSize: "0.95rem",
        lineHeight: 1.6,
        "& code": {
          p: 0,
          bgcolor: "transparent",
          color: "inherit",
        },
      }}
    >
      {children}
    </Box>
  ),
  hr: () => <Divider sx={{ my: 4 }} />,
  img: (props) => (
    <Box
      component="img"
      sx={{
        display: "block",
        maxWidth: "100%",
        height: "auto",
        my: 3,
        borderRadius: 1,
      }}
      {...props}
    />
  ),
  table: ({ children }) => (
    <TableContainer component={Box} sx={{ my: 3, overflowX: "auto" }}>
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: ({ children }) => <TableHead>{children}</TableHead>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => (
    <TableCell component="th" sx={{ fontWeight: 700 }}>
      {children}
    </TableCell>
  ),
  td: ({ children }) => <TableCell>{children}</TableCell>,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
