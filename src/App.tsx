
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogisticsHome from "./pages/LogisticsHome";
import EnterprisesHome from "./pages/EnterprisesHome";
import EnviroHome from "./pages/EnviroHome";
import LogisticsServices from "./pages/LogisticsServices";
import EnterprisesServices from "./pages/EnterprisesServices";
import EnviroServices from "./pages/EnviroServices";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/logistics" element={<LogisticsHome />} />
              <Route path="/enterprises" element={<EnterprisesHome />} />
              <Route path="/enviro" element={<EnviroHome />} />
              <Route path="/logistics/services" element={<LogisticsServices />} />
              <Route path="/enterprises/services" element={<EnterprisesServices />} />
              <Route path="/enviro/services" element={<EnviroServices />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
