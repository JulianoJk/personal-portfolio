import React, { useState, JSX } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  Box,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Typography,
} from "@mui/material";
import GermanyIllustration from "../../../assets/svg/languages/GermanyIllustration";
import EnglishIllustration from "../../../assets/svg/languages/EnglishIllustration";
import { useAppDispatch } from "../../../context/AppContext";

interface Action {
  icon: JSX.Element;
  name: string;
}

const initialActions: Action[] = [
  { icon: <GermanyIllustration height="1em" />, name: "DE" },
];

const LanguagesMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mainIcon, setMainIcon] = useState<Action>({
    icon: <EnglishIllustration height="1em" />,
    name: "EN",
  });
  const [actions, setActions] = useState<Action[]>(initialActions);
  const appDispatch = useAppDispatch();

  const handleClick = (actionIndex: number) => {
    const newActions = [...actions];
    const clickedAction = newActions[actionIndex];

    newActions[actionIndex] = {
      icon: mainIcon.icon,
      name: mainIcon.name,
    };

    setMainIcon(clickedAction);
    setActions(newActions);
    appDispatch({ type: "SET_APP_LANGUAGE", lang: clickedAction.name }); 

    setOpen(false);
  };

  return (
    <>
      <Tooltip
        open={open}
        sx={{
          "&.MuiTooltip-tooltipArrow": { backgroundColor: "transparent" },
        }}
        arrow
        title={
          <Box
            sx={{
              backgroundColor: "transparent",
              width: "100%",
              borderRadius: "6px",
              marginTop: "-4px",
            }}
          >
            <List>
              {actions.map((action, index) => (
                <MenuItem
                  sx={{
                    borderRadius: "10em",
                    "&.MuiMenuItem-root:hover": {
                      borderRadius: "0.2em",
                    },
                  }}
                  key={action.name}
                  onClick={() => handleClick(index)}
                >
                  <ListItem
                    disablePadding
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {action.icon}
                    <Typography
                      sx={{
                        fontSize: "1em",
                        fontWeight: "bold",
                      }}
                    >
                      {action.name}
                    </Typography>
                  </ListItem>
                </MenuItem>
              ))}
            </List>
          </Box>
        }
      >
        <IconButton
          onClick={() => setOpen(!open)}
          aria-controls={open ? "language-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableRipple
          disableTouchRipple
          sx={{ ml: -2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {mainIcon.icon}
          </Box>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default LanguagesMenu;
