import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import LocationLanding from "./pages/LocationLanding";
import Contact from "./pages/Contact";
import ResinBoundSurfaces from "./pages/services/ResinBoundSurfaces";
import ArtificialGrass from "./pages/services/ArtificialGrass";
import TreePlanting from "./pages/services/TreePlanting";
import WaterFeatures from "./pages/services/WaterFeatures";
import SpecialistStonework from "./pages/services/SpecialistStonework";
import Groundwork from "./pages/services/Groundwork";
import PorcelainPaving from "./pages/services/PorcelainPaving";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/london"} component={LocationLanding} />
      <Route path={"/bedfordshire"} component={LocationLanding} />
      <Route path={"/cambridgeshire"} component={LocationLanding} />
      <Route path={"/services/resin-bound-surfaces"} component={ResinBoundSurfaces} />
      <Route path={"/services/artificial-grass"} component={ArtificialGrass} />
      <Route path={"/services/tree-planting"} component={TreePlanting} />
      <Route path={"/services/water-features"} component={WaterFeatures} />
      <Route path={"/services/specialist-stonework"} component={SpecialistStonework} />
      <Route path={"/services/groundwork"} component={Groundwork} />
      <Route path={"/services/porcelain-paving"} component={PorcelainPaving} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
