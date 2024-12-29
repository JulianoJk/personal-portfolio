import { Container, Box, Typography, Grid } from "@mui/material";
import { IconCode, IconTools, IconSchool, IconUser } from "@tabler/icons-react";
import { useStyles } from "./AboutMe.styles";
import CustomMarquee from "./MyMarquee.component";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { useAppState } from "../../../context/AppContext"; // Assuming you're using a context hook to get the language

const aboutDataEN = [
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
      "I hold a BSc in Computer Science from Empire State University SUNY, USA.",
  },
];

const aboutDataDE = [
  {
    icon: <IconUser size={60} />,
    title: "Persönlicher Hintergrund", // German translation for "Personal Background"
    description:
      "Ich bin ein 24-jähriger Junior Front-End-Entwickler, spezialisiert auf React und TypeScript, mit über zwei Jahren praktischer Erfahrung.", // German translation for the description
  },
  {
    icon: <IconCode size={60} />,
    title: "Leidenschaft für Entwicklung", // German translation for "Passion for Development"
    description:
      "Programmieren ist nicht nur mein Job; es ist meine Leidenschaft. Ich liebe es, neue Technologien zu lernen und meine Fähigkeiten jeden Tag zu verbessern.", // German translation for the description
  },
  {
    icon: <IconTools size={60} />,
    title: "Zusammenarbeit & Innovation", // German translation for "Collaboration & Innovation"
    description:
      "Ich liebe es, Herausforderungen zu meistern und mit Teams zusammenzuarbeiten, um innovative Lösungen zu entwickeln, die einen Unterschied machen.", // German translation for the description
  },
  {
    icon: <IconSchool size={60} />,
    title: "Bildungshintergrund", // German translation for "Educational Background"
    description:
      "Ich habe einen Bachelor of Science in Informatik von der Empire State University SUNY, USA.", // German translation for the description
  },
];

const AboutMe = () => {
  const { cx, classes } = useStyles();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when at least 10% of the item is visible
    rootMargin: "0px 0px 0px 0px", // No extra margin; adjust if needed
  });

  const { lang } = useAppState(); // Get the current language from the app state

  // Select the appropriate aboutData based on the language
  const aboutData = lang === "DE" ? aboutDataDE : aboutDataEN;

  return (
    <>
      {/* About Me Content */}
      <Container maxWidth="md" className={classes.wrapper}>
        <Typography className={classes.supTitle}>
          {lang === "DE" ? "Über mich" : "About Me"} {/* Conditional title based on lang */}
        </Typography>

        <Typography variant="h4" className={classes.title} component="h2">
          {lang === "DE"
            ? "Entdecke meine Reise"
            : "Discover my Journey"} {/* Conditional subtitle based on lang */}
        </Typography>

        <Container maxWidth="sm" disableGutters>
          <Typography variant="body1" className={classes.description}>
            {lang === "DE"
              ? "Technologie war immer mein Spielplatz. Schon in jungen Jahren war ich fasziniert davon, wie Dinge funktionieren und wie sie verbessert werden können. Hier ist ein Einblick in meine Welt."
              : "Technology has always been my playground. From a young age, I've been fascinated by how things work and how they can be improved. Here's a glimpse into my world."} {/* Conditional description based on lang */}
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
