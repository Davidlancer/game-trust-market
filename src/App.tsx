
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* Game-specific routes */}
          <Route path="/game/:slug" element={<div className="min-h-screen bg-gt-background text-gt-text flex items-center justify-center"><h1 className="text-4xl font-heading">Game Page Coming Soon</h1></div>} />
          <Route path="/sell" element={<div className="min-h-screen bg-gt-background text-gt-text flex items-center justify-center"><h1 className="text-4xl font-heading">Sell Page Coming Soon</h1></div>} />
          <Route path="/listing/:id" element={<div className="min-h-screen bg-gt-background text-gt-text flex items-center justify-center"><h1 className="text-4xl font-heading">Listing Details Coming Soon</h1></div>} />
          <Route path="/how-it-works" element={<div className="min-h-screen bg-gt-background text-gt-text flex items-center justify-center"><h1 className="text-4xl font-heading">How It Works Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
