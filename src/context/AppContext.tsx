import { createContext, useContext, useReducer } from "react";

interface IAppStateContext {
  lang: string;
}

export interface IChildrenProvider {
  children: React.ReactNode;
}

const defaultState: IAppStateContext = {
  lang: "EN",
};

type TApplicationAction = {
  type: "SET_APP_LANGUAGE";
  lang: string;
};

const ApplicationState = createContext<IAppStateContext | undefined>(undefined);

type ApplicationDispatchContext = (action: TApplicationAction) => void;

ApplicationState.displayName = "ApplicationState";

const ApplicationDispatch = createContext<
  ApplicationDispatchContext | undefined
>(undefined);

const appReducer = (state: IAppStateContext, action: TApplicationAction) => {
  switch (action.type) {
    case "SET_APP_LANGUAGE":
      return { ...state, lang: action.lang };
    default:
      return state;
  }
};

// Context Provider for the application
const AppContextProvider = ({ children }: IChildrenProvider) => {
  const [appState, appDispatch] = useReducer(appReducer, defaultState);

  return (
    <ApplicationState.Provider value={appState}>
      <ApplicationDispatch.Provider value={appDispatch}>
        {children}
      </ApplicationDispatch.Provider>
    </ApplicationState.Provider>
  );
};

// Custom hook to access app state (language)
const useAppState = (): IAppStateContext => {
  const context = useContext(ApplicationState);
  if (context === undefined) {
    throw new Error("useAppState must be used within AppContextProvider");
  }
  return context;
};

// Custom hook to access dispatch function (set language)
const useAppDispatch = (): ApplicationDispatchContext => {
  const context = useContext(ApplicationDispatch);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within AppContextProvider");
  }
  return context;
};

// Export context provider and hooks
export { AppContextProvider, useAppState, useAppDispatch };
