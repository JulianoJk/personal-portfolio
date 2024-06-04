import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  CardMedia,
  Typography,
} from "@mui/material";
import { useStyles } from "./Projects.styles";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  imageUrl: string | React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, description, link, buttonText, imageUrl } = props;
  const { classes } = useStyles();
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {typeof imageUrl === "string" ? (
        <CardMedia component="img" height="140" image={imageUrl} alt={title} draggable={false}/>
      ) : (
        <Box
          sx={{
            height: 140,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imageUrl}
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginTop: "1em" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
