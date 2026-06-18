import { Slide, FlexBox, Heading, Text } from 'spectacle';
import atomSvg from '../assets/atom.svg';

export function WelcomeSlide() {
  return (
    <Slide backgroundColor="#f8fbff">
      <FlexBox height="100%" gap="80px" alignItems="center" padding="80px 48px">
        <FlexBox flexDirection="column" gap="24px" width="50%">
          <Text 
            fontSize="12px" 
            fontWeight="600" 
            letterSpacing="0.12em" 
            textTransform="uppercase" 
            color="#0f172a" 
            opacity={0.8}
          >
            Erste Einblicke in die Dashboarding Plattform
          </Text>
          <Heading 
            fontSize="88px" 
            fontFamily="'Playfair Display', serif" 
            fontWeight="800" 
            fontStyle="italic" 
            lineHeight="1.1"
            style={{
              background: 'linear-gradient(135deg, #0098d4 0%, #0077a8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Hello Dash
          </Heading>
          <Text fontSize="20px" color="#475569" lineHeight="1.6">
            Dr. Edgar Treischl
          </Text>
          <Text fontSize="16px" color="#475569" lineHeight="1.6">
            {new Date().toLocaleDateString()}
          </Text>
        </FlexBox>

        <FlexBox width="50%" justifyContent="center" alignItems="center">
          <img 
            src={atomSvg} 
            alt="Atom illustration" 
            style={{
              maxWidth: '450px',
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'contain',
              borderRadius: '16px',
              display: 'block'
            }} 
          />
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
