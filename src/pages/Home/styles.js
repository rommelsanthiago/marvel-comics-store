import styled from 'styled-components';

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  gap: 0 1rem;
  margin: 1rem 0;
  margin-bottom: 2rem;
  padding: 2rem 4rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;