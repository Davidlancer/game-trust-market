
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* Game-specific routes */}
          <Route path="/game/:slug" element={<div className="min-h-screen bg-gt-dark text-gt-text flex items-center justify-center"><h1 className="text-4xl font-poppins">Game Page Coming Soon</h1></div>} />
          <Route path="/marketplace" element={<div className="min-h-screen bg-gt-dark text-gt-text flex items-center justify-center"><h1 className="text-4xl font-poppins">Marketplace Coming Soon</h1></div>} />
          <Route path="/sell" element={<div className="min-h-screen bg-gt-dark text-gt-text flex items-center justify-center"><h1 className="text-4xl font-poppins">Sell Page Coming Soon</h1></div>} />
          <Route path="/listing/:id" element={<div className="min-h-screen bg-gt-dark text-gt-text flex items-center justify-center"><h1 className="text-4xl font-poppins">Listing Details Coming Soon</h1></div>} />
          <Route path="/how-it-works" element={<div className="min-h-screen bg-gt-dark text-gt-text flex items-center justify-center"><h1 className="text-4xl font-poppins">How It Works Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
