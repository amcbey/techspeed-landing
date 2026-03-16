import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/research" element={<Research />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about/our-mission" element={<OurMission />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/technology/fintrade" element={<FinTrade />} />
            <Route path="/services/clearing-custody" element={<ClearingCustody />} />
            <Route path="/services/securities-lending" element={<SecuritiesLending />} />
            <Route path="/services/execution-services" element={<ExecutionServices />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
