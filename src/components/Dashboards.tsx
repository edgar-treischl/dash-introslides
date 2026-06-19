import { Heading } from 'spectacle';
import { SplitViewSlide } from './SplitViewSlide';
import atomImage from '../assets/atom.svg';

const bulletListStyle = {
  listStyleType: 'disc',
  listStylePosition: 'outside',
  paddingLeft: '32px',
  margin: '24px 0',
} as const;

const bulletItemStyle = {
  fontSize: '28px',
  color: '#334155',
  lineHeight: '1.8',
  marginBottom: '16px',
  fontWeight: '400',
} as const;

const imageStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '500px',
  margin: '0 auto',
} as const;

export function Dashboards() {
  const leftContent = (
    <>
      <Heading
        fontSize="56px"
        fontFamily="'Playfair Display', serif"
        fontWeight="800"
        lineHeight="1.2"
        color="#0f172a"
        margin="0 0 32px 0"
      >
        Dashboards
      </Heading>
      <ul style={bulletListStyle}>
        <li style={bulletItemStyle}>Interactive data visualizations</li>
        <li style={bulletItemStyle}>Real-time updates and monitoring</li>
        <li style={bulletItemStyle}>Customizable widgets and layouts</li>
        <li style={bulletItemStyle}>Export and sharing capabilities</li>
        <li style={bulletItemStyle}>Mobile-responsive design</li>
      </ul>
    </>
  );

  const rightContent = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <img src={atomImage} alt="Dashboard illustration" style={imageStyle} />
    </div>
  );

  return (
    <SplitViewSlide
      leftContent={leftContent}
      rightContent={rightContent}
      leftWidth="50%"
      rightWidth="50%"
      leftAlign="center"
      rightAlign="center"
    />
  );
}
