import { Heading, Text } from 'spectacle';
import { LineChart, LineChartLegend, getTimeSeriesData } from './LineChart';
import { YearRangeControl } from './YearRangeControl';
import { SplitViewSlide } from './SplitViewSlide';

interface RetentionChartSlideProps {
  minYear: number;
  maxYear: number;
  onMinYearChange: (year: number) => void;
  onMaxYearChange: (year: number) => void;
}

export function RetentionChartSlide({ 
  minYear, 
  maxYear, 
  onMinYearChange, 
  onMaxYearChange 
}: RetentionChartSlideProps) {
  const leftContent = (
    <div
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        gap: '16px', 
        padding: '24px', 
        maxWidth: '400px' 
      }}
    >
      <Heading 
        fontSize="48px" 
        fontFamily="'Playfair Display', serif" 
        fontWeight="800" 
        color="#0f172a" 
        margin="0 0 24px 0"
      >
        Class Retention Trends
      </Heading>
      <Text fontSize="18px" color="#475569" lineHeight="1.6" margin="0">
        Interactive visualization showing retention rates across different school types over time. 
        Use the time controls to explore specific periods.
      </Text>
    </div>
  );

  const rightContent = (
    <div style={{ 
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <YearRangeControl
        minYear={minYear}
        maxYear={maxYear}
        absoluteMin={2015}
        absoluteMax={2024}
        onMinYearChange={onMinYearChange}
        onMaxYearChange={onMaxYearChange}
      />
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '16px', 
        overflow: 'visible',
        marginTop: '16px'
      }}>
        <div style={{ 
          width: '600px', 
          height: '375px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          overflow: 'visible', 
          flexShrink: 0 
        }}>
          <LineChart 
            data={getTimeSeriesData()} 
            minYear={minYear} 
            maxYear={maxYear}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <LineChartLegend />
        </div>
      </div>
    </div>
  );

  return (
    <SplitViewSlide
      leftContent={leftContent}
      rightContent={rightContent}
    />
  );
}
