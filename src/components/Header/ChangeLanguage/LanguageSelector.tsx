import React, { useState, useEffect, JSX } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Typography from "@mui/material/Typography";
import GermanyIllustration from "../../../assets/svg/languages/GermanyIllustration";
import EnglishIllustration from "../../../assets/svg/languages/EnglishIllustration";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: theme.spacing(1),
}));

interface Action {
  icon: JSX.Element;
  name: "DE" | "EN";  // Only DE or EN are valid
}

const initialActions: Action[] = [
  { icon: <GermanyIllustration />, name: "DE" },
  { icon: <EnglishIllustration />, name: "EN" },
];

const PlaygroundSpeedDial: React.FC = () => {
  const initialMainIcon: Action = {
    icon: <EnglishIllustration />,
    name: "EN", // Initial language is "EN"
  };

  const [mainIcon, setMainIcon] = useState(initialMainIcon);
  const [actions, setActions] = useState<Action[]>(initialActions);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleActionClick = (actionIndex: number) => {
    const newActions = [...actions];
    const clickedAction = newActions[actionIndex];

    newActions[actionIndex] = {
      icon: mainIcon.icon,
      name: mainIcon.name,
    };

    setMainIcon(clickedAction);
    setActions(newActions);
    setOpen(false);
  };

  const handleSpeedDialOpen = () => {
    setOpen(true);
  };

  const handleSpeedDialClose = (event: MouseEvent) => {
    if (
      !(event.target as HTMLElement).closest(".MuiSpeedDial-fab") &&
      !(event.target as HTMLElement).closest(".MuiSpeedDialAction-fab")
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleSpeedDialClose);

    return () => {
      document.removeEventListener("click", handleSpeedDialClose);
    };
  }, []);

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "relative", mt: 3 }}>
        <StyledSpeedDial
          ariaLabel="Language Selector"
          icon={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {mainIcon.icon}
              <Typography
                sx={{ mt: 1, color: theme.palette.common.white }}
                variant="body2"
              >
                {mainIcon.name}
              </Typography>
            </Box>
          }
          sx={{ height: "5em" }}
          FabProps={{
            variant: "circular",
            sx: {
              bgcolor: "transparent",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "transparent",
                borderRadius: "3px",
                height: "3.5em",
                width: "4em",
                boxShadow: "none",
              },
            },
          }}
          direction="right"
          open={open}
          onClick={open ? () => setOpen(false) : handleSpeedDialOpen}
        >
          {actions.map((action, index) => (
            <SpeedDialAction
              key={`${action.name}-${index}`}
              icon={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {action.icon}
                  <Typography
                    sx={{ mt: 1, color: theme.palette.common.white }}
                    variant="body2"
                  >
                    {action.name}
                  </Typography>
                </Box>
              }
              onClick={() => handleActionClick(index)}
              FabProps={{
                sx: {
                  margin: "0 1.2em",
                  bgcolor: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "transparent",
                    boxShadow: "none",
                  },
                },
              }}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
};

export default PlaygroundSpeedDial;
