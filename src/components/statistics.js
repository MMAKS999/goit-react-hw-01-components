import PropTypes from 'prop-types';
import styled from 'styled-components';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


const Section = styled.section`
  margin-bottom: 20px;
  text-align: center;
  width: 300px;
 `;

const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 10px;
  display: flex;
  align-items: center;
  
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 25%;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Percentage = styled.span``;


export const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>Upload stats</Title>}

    <List>
      {stats &&
        stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{backgroundColor: getRandomColor()}}
          >
            <Label>{label}</Label>
            <Label>{percentage}%</Label>
          </Item>
        ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
