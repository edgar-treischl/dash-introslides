interface YearRangeControlProps {
  minYear: number;
  maxYear: number;
  absoluteMin: number;
  absoluteMax: number;
  onMinYearChange: (year: number) => void;
  onMaxYearChange: (year: number) => void;
}

export function YearRangeControl({
  minYear,
  maxYear,
  absoluteMin,
  absoluteMax,
  onMinYearChange,
  onMaxYearChange,
}: YearRangeControlProps) {
  const canDecrementMin = minYear > absoluteMin;
  const canIncrementMin = minYear < maxYear - 1;
  const canDecrementMax = maxYear > minYear + 1;
  const canIncrementMax = maxYear < absoluteMax;
  const yearRange = maxYear - minYear + 1;

  return (
    <div style={{ 
      display: 'flex', 
      gap: '20px', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative', 
      zIndex: 100, 
      pointerEvents: 'auto' 
    }}>
      <YearControl
        label={`Min: ${minYear}`}
        onDecrement={() => onMinYearChange(minYear - 1)}
        onIncrement={() => onMinYearChange(minYear + 1)}
        canDecrement={canDecrementMin}
        canIncrement={canIncrementMin}
        decrementTitle="Expand: earlier years"
        incrementTitle="Narrow: later start"
      />
      
      <span style={{ 
        fontSize: '16px', 
        fontWeight: 700, 
        color: '#0098d4', 
        minWidth: '50px', 
        textAlign: 'center' 
      }}>
        {yearRange} yrs
      </span>
      
      <YearControl
        label={`Max: ${maxYear}`}
        onDecrement={() => onMaxYearChange(maxYear - 1)}
        onIncrement={() => onMaxYearChange(maxYear + 1)}
        canDecrement={canDecrementMax}
        canIncrement={canIncrementMax}
        decrementTitle="Narrow: earlier end"
        incrementTitle="Expand: later years"
      />
    </div>
  );
}

interface YearControlProps {
  label: string;
  onDecrement: () => void;
  onIncrement: () => void;
  canDecrement: boolean;
  canIncrement: boolean;
  decrementTitle: string;
  incrementTitle: string;
}

function YearControl({
  label,
  onDecrement,
  onIncrement,
  canDecrement,
  canIncrement,
  decrementTitle,
  incrementTitle,
}: YearControlProps) {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ControlButton
        onClick={onDecrement}
        disabled={!canDecrement}
        title={decrementTitle}
      >
        ←
      </ControlButton>
      <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
        {label}
      </span>
      <ControlButton
        onClick={onIncrement}
        disabled={!canIncrement}
        title={incrementTitle}
      >
        →
      </ControlButton>
    </div>
  );
}

interface ControlButtonProps {
  onClick: () => void;
  disabled: boolean;
  title: string;
  children: React.ReactNode;
}

function ControlButton({ onClick, disabled, title, children }: ControlButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        padding: '6px 12px',
        fontSize: '14px',
        fontWeight: 600,
        backgroundColor: disabled ? '#e5e7eb' : '#0098d4',
        color: disabled ? '#9ca3af' : 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        pointerEvents: 'auto',
      }}
    >
      {children}
    </button>
  );
}
