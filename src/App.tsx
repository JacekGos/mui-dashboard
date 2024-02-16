import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ColorContext, useMode } from "./theme";
import {
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import Topbar from "./global/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import TableExample from "./pages/table/TableExample";
import Settings from "./pages/settings/Settings";
import MainLayout from "./global/layout/MainLayout";
import Tabs from "./pages/tabs/Tabs";
import FormExample from "./global/form/FormExample";

function App() {
  const [theme] = useMode();

  return (
    <ColorContext.Provider value={""}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <HashRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route
                  index
                  element={
                    <Box padding={2}>
                      <TableExample />
                    </Box>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <Box padding={2}>
                      <Dashboard />
                    </Box>
                  }
                />
                <Route
                  path="/table"
                  element={
                    <Box padding={2}>
                      <TableExample />
                    </Box>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <Box padding={2}>
                      <Settings />
                    </Box>
                  }
                />
                <Route
                  path="/tabs"
                  element={
                    <Box padding={2}>
                      <Tabs />
                    </Box>
                  }
                />
                <Route
                  path="/form"
                  element={
                    <Box padding={2}>
                      <FormExample />
                    </Box>
                  }
                />
              </Route>
            </Routes>
          </HashRouter>
        </CssBaseline>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
