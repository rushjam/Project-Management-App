import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route exact path="/" element={<Navigate to="/dashboard" replace />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/customers" element={<Customers />} />
              <Route exact path="/transactions" element={<Transactions />} />
              <Route exact path="/geography" element={<Geography />} />
              <Route exact path="/overview" element={<Overview />} />
              <Route exact path="/daily" element={<Daily />} />
              <Route exact path="/monthly" element={<Monthly />} />
              <Route exact path="/breakdown" element={<Breakdown />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
