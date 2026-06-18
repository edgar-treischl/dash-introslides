import { Slide, FlexBox, Heading } from 'spectacle';

const agendaItemStyle = {
  fontSize: '32px',
  color: '#334155',
  lineHeight: '1.8',
  marginBottom: '20px',
  paddingLeft: '12px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
} as const;

const agendaListStyle = {
  listStyleType: 'decimal',
  listStylePosition: 'outside',
  paddingLeft: '40px',
  margin: '32px 0',
  counterReset: 'agenda-counter',
} as const;

export function AgendaSlide() {
  return (
    <Slide backgroundColor="#f8fbff">
      <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="flex-start" padding="60px 80px">
        <Heading 
          fontSize="72px" 
          fontFamily="'Playfair Display', serif" 
          fontWeight="800" 
          lineHeight="1.1" 
          color="#0f172a"
          margin="0 0 48px 0"
        >
          Agenda
        </Heading>
        <ol style={agendaListStyle}>
          <li style={agendaItemStyle}>Einführung in die Dashboarding Plattform</li>
          <li style={agendaItemStyle}>Wichtige Funktionen und Features</li>
          <li style={agendaItemStyle}>Live-Demo der Plattform</li>
          <li style={agendaItemStyle}>Fragen und Antworten</li>
        </ol>
      </FlexBox>
    </Slide>
  );
}
