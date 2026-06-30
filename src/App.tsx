import { useState, useEffect, useRef } from 'react';
import { Deck } from 'spectacle';
import { WelcomeSlide } from './components/WelcomeSlide';
import { AgendaSlide } from './components/AgendaSlide';
import { Dashboards } from './components/Dashboards';
import { RetentionChartSlide } from './components/RetentionChartSlide';
import { deckTheme } from './theme/deckTheme';

function App() {
  const [chartMinYear, setChartMinYear] = useState(2020);
  const [chartMaxYear, setChartMaxYear] = useState(2024);
  const [overviewMode, setOverviewMode] = useState(false);
  const shouldBeFullscreenRef = useRef(false);
  const isTogglingRef = useRef(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle fullscreen with F key
      if (e.key === 'f' || e.key === 'F') {
        isTogglingRef.current = true;
        if (!document.fullscreenElement) {
          shouldBeFullscreenRef.current = true;
          document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
          });
        } else {
          shouldBeFullscreenRef.current = false;
          document.exitFullscreen();
        }
        setTimeout(() => { isTogglingRef.current = false; }, 200);
      }
      
      // Toggle overview mode with O key
      if (e.key === 'o' || e.key === 'O') {
        setOverviewMode((prev) => !prev);
      }
    };

    const handleFullscreenChange = () => {
      // If fullscreen was lost and it wasn't due to user pressing F or Escape
      if (!document.fullscreenElement && shouldBeFullscreenRef.current && !isTogglingRef.current) {
        // Re-enter fullscreen after a short delay
        setTimeout(() => {
          if (shouldBeFullscreenRef.current) {
            document.documentElement.requestFullscreen().catch((err) => {
              console.error(`Error re-entering fullscreen: ${err.message}`);
            });
          }
        }, 150);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <Deck 
      theme={deckTheme}
      printScale={0.75}
      overviewMode={overviewMode}
    >
      <WelcomeSlide />
      <AgendaSlide />
      <Dashboards />
      <RetentionChartSlide
        minYear={chartMinYear}
        maxYear={chartMaxYear}
        onMinYearChange={setChartMinYear}
        onMaxYearChange={setChartMaxYear}
      />
    </Deck>
  );
}

export default App;