import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Research from "./pages/Research";
import Clients from "./pages/Clients";
import OurMission from "./pages/OurMission";
import OurTeam from "./pages/OurTeam";
import FinTrade from "./pages/FinTrade";
import ClearingCustody from "./pages/ClearingCustody";
import SecuritiesLending from "./pages/SecuritiesLending";
import ExecutionServices from "./pages/ExecutionServices";
import CorporateTreasury from "./pages/CorporateTreasury";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import Disclosures from "./pages/Disclosures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/dashboard" element={<ProtectedRoute><PageTransition><Dashboard /></PageTransition></ProtectedRoute>} />
        <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
        <Route path="/clients" element={<PageTransition><Clients /></PageTransition>} />
        <Route path="/about/our-mission" element={<PageTransition><OurMission /></PageTransition>} />
        <Route path="/about/our-team" element={<PageTransition><OurTeam /></PageTransition>} />
        <Route path="/technology/fintrade" element={<PageTransition><FinTrade /></PageTransition>} />
        <Route path="/services/clearing-custody" element={<PageTransition><ClearingCustody /></PageTransition>} />
        <Route path="/services/securities-lending" element={<PageTransition><SecuritiesLending /></PageTransition>} />
        <Route path="/services/execution-services" element={<PageTransition><ExecutionServices /></PageTransition>} />
        <Route path="/services/corporate-treasury" element={<PageTransition><CorporateTreasury /></PageTransition>} />
        <Route path="/services/regulatory-compliance" element={<PageTransition><RegulatoryCompliance /></PageTransition>} />
        <Route path="/disclosures" element={<PageTransition><Disclosures /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <AnimatedRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
