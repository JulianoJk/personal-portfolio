import { Container, Box, Typography, Grid } from "@mui/material";
import { IconCode, IconTools, IconSchool, IconUser } from "@tabler/icons-react";
import { useStyles } from "./AboutMe.styles";
import CustomMarquee from "./MyMarquee.component";
import { useInView } from "react-intersection-observer";
import "animate.css";

const aboutData = [
  {
    icon: <IconUser size={60} />,
    title: "Personal Background",
    description:
      "I'm a 24-year-old junior front-end engineer specializing in React and TypeScript, with over two years of hands-on experience.",
  },
  {
    icon: <IconCode size={60} />,
    title: "Passion for Development",
    description:
      "Coding is not just my job; it's my passion. I thrive on learning new technologies and improving my craft every day.",
  },
  {
    icon: <IconTools size={60} />,
    title: "Collaboration & Innovation",
    description:
      "I love tackling challenges and collaborating with teams to build innovative solutions that make a difference.",
  },
  {
    icon: <IconSchool size={60} />,
    title: "Educational Background",
    description:
      "I hold a BSc in Computer Science from Empire State College SUNY, USA, and New York College in Greece.",
  },
];

const AboutMe = () => {
  const { cx, classes } = useStyles();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when at least 10% of the item is visible
    rootMargin: "0px 0px 0px 0px", // No extra margin; adjust if needed
  });

  return (
    <>
      {/* About Me Content */}
      <Container maxWidth="md" className={classes.wrapper}>
        <Typography className={classes.supTitle}>About Me</Typography>

        <Typography variant="h4" className={classes.title} component="h2">
          Discover <span className={classes.highlight}>My Journey</span>
        </Typography>

        <Container maxWidth="sm" disableGutters>
          <Typography variant="body1" className={classes.description}>
            Technology has always been my playground. From a young age, I've
            been fascinated by how things work and how they can be improved.
            Here's a glimpse into my world.
          </Typography>
        </Container>

        <Grid container spacing={4} mt={4} ref={ref}>
          {aboutData.map((item, index) => {
            // Apply a delay based on the index of the item
            const delay = index * 0.1; // 0.1s delay between items

            return (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  className={cx(
                    classes.item,
                    !inView && classes.placeholder,
                    inView &&
                      `${classes.item} animate__animated animate__fadeInUp`
                  )}
                  style={{
                    animationDelay: inView ? `${delay}s` : undefined,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  {inView ? (
                    <>
                      <Box>{item.icon}</Box>
                      <Box ml={2}>
                        <Typography variant="h6" className={classes.itemTitle}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={classes.itemDescription}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    <div className={classes.placeholder} /> // Placeholder while out of view
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <CustomMarquee />
    </>
  );
};

export default AboutMe;
