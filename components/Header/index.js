import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Link from 'next/link';
import Search from '@components/SearchBar';
import Dropdown from '@components/Dropdown';

const Header = () => {
  return (
    <Box
      alignSelf='auto'
      sx={{
        color: '#c7d6d5',
      }}
    >
      <AppBar position='static'>
        <Toolbar component='div' sx={{ cursor: 'pointer' }}>
          <Link href='/'>
            <Box
              className='logo'
              style={{ color: '#801f12' }}
              mr={5}
              fontSize={24}
            >
              Marxet
            </Box>
          </Link>
          <Search />
          <Dropdown />
          <Link href='/login'>
            <Button color='inherit' variant='outlined'>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
