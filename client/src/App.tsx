import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Service Pages
import DrywallRepair from "@/pages/services/DrywallRepair";
import DoorRepair from "@/pages/services/DoorRepair";
import FenceRepair from "@/pages/services/FenceRepair";
import Painting from "@/pages/services/Painting";
import Plumbing from "@/pages/services/Plumbing";
import Electrical from "@/pages/services/Electrical";
import HomeRepairs from "@/pages/services/HomeRepairs";

// Service Area Pages
import ServiceAreasHub from "@/pages/areas/index";
import UpperStClair from "@/pages/areas/UpperStClair";
import FoxChapel from "@/pages/areas/FoxChapel";
import Sewickley from "@/pages/areas/Sewickley";
import RossTownship from "@/pages/areas/RossTownship";
import Aspinwall from "@/pages/areas/Aspinwall";

function Router() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/drywall-repair" component={DrywallRepair} />
          <Route path="/services/door-repair" component={DoorRepair} />
          <Route path="/services/fence-repair" component={FenceRepair} />
          <Route path="/services/painting" component={Painting} />
          <Route path="/services/plumbing" component={Plumbing} />
          <Route path="/services/electrical" component={Electrical} />
          <Route path="/services/home-repairs" component={HomeRepairs} />
          <Route path="/areas" component={ServiceAreasHub} />
          <Route path="/areas/upper-st-clair" component={UpperStClair} />
          <Route path="/areas/fox-chapel" component={FoxChapel} />
          <Route path="/areas/sewickley" component={Sewickley} />
          <Route path="/areas/ross-township" component={RossTownship} />
          <Route path="/areas/aspinwall" component={Aspinwall} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
