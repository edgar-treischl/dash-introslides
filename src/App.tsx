import { useState } from 'react';
import { Deck } from 'spectacle';
import { WelcomeSlide } from './components/WelcomeSlide';
import { AgendaSlide } from './components/AgendaSlide';
import { Dashboards } from './components/Dashboards';
import { RetentionChartSlide } from './components/RetentionChartSlide';
import { deckTheme } from './theme/deckTheme';

function App() {
  const [chartMinYear, setChartMinYear] = useState(2020);
  const [chartMaxYear, setChartMaxYear] = useState(2024);

  return (
    <Deck theme={deckTheme}>
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