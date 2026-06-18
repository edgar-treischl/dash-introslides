import { Slide } from 'spectacle';
import type { ReactNode, CSSProperties } from 'react';

interface SplitViewSlideProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  backgroundColor?: string;
  leftWidth?: string;
  rightWidth?: string;
  gap?: string;
  padding?: string;
  leftAlign?: CSSProperties['justifyContent'];
  rightAlign?: CSSProperties['justifyContent'];
}

/**
 * Reusable split view slide component with configurable left/right content areas
 * @param leftContent - Content to display in the left panel
 * @param rightContent - Content to display in the right panel
 * @param backgroundColor - Slide background color (default: #f8fbff)
 * @param leftWidth - Left panel flex basis (default: 40%)
 * @param rightWidth - Right panel flex basis (default: 60%)
 * @param gap - Gap between panels (default: 40px)
 * @param padding - Slide padding (default: 40px 60px)
 * @param leftAlign - Vertical alignment for left content (default: center)
 * @param rightAlign - Vertical alignment for right content (default: center)
 */
export function SplitViewSlide({
  leftContent,
  rightContent,
  backgroundColor = '#f8fbff',
  leftWidth = '40%',
  rightWidth = '60%',
  gap = '40px',
  padding = '40px 60px',
  leftAlign = 'center',
  rightAlign = 'center',
}: SplitViewSlideProps) {
  return (
    <Slide backgroundColor={backgroundColor}>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          padding,
          gap,
        }}
      >
        <div
          style={{
            flex: `0 0 ${leftWidth}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: leftAlign,
            gap: '20px',
          }}
        >
          {leftContent}
        </div>

        <div
          style={{
            flex: `0 0 ${rightWidth}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: rightAlign,
            gap: '16px',
            overflow: 'visible',
          }}
        >
          {rightContent}
        </div>
      </div>
    </Slide>
  );
}
