import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import Link from "@material-ui/core/Link";

export const Footer = () => {
  return (
    <Typography
      style={{ padding: 20 }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="http://benvinert.github.io/portfolio">
        Ben Vinert
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
