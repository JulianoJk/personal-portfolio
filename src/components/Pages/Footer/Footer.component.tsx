import { Container, IconButton, Grid } from "@mui/material";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { useStyles } from "./Footer.styles";

const FooterSocial = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.inner}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1} // Adjust spacing if needed
      >
        <Grid item>
          <a
            href="https://github.com/JulianoJk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <IconButton size="large" sx={{ color: "#95A1F9" }}>
              <IconBrandGithub style={{ width: "2em", height: "2em" }} />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/juliano-jika-268aa9196/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconButton size="large" sx={{ color: "#95A1F9" }}>
              <IconBrandLinkedin style={{ width: "2em", height: "2em" }} />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://drive.google.com/file/d/18luSAuhEPQha01njlHc0fRP5Jpn8Yd2e/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
          >
            <IconButton size="large" sx={{ color: "#95A1F9" }}>
              <IconFileCv style={{ width: "2em", height: "2em" }} />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterSocial;
