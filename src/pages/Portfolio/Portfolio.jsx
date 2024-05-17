import { Box, Typography } from '@mui/material';
import Container from 'shared/ui/container';
import { portfolioList } from './portfolioList';
import PortfolioItem from 'shared/ui/PortfolioCard/PortfolioCard';

const Portfolio = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 0',
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: 3, textAlign: 'center', fontWeight: 700 }}
          >
            Portfolio
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {portfolioList.map(item => (
              <PortfolioItem item={item} key={item.id} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Portfolio;
