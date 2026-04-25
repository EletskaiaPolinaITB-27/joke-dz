import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { ListItem, ListItemButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { axiosApi } from '../axiosApi';

export const NavBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategoriesList = async () => {
      try {
        const response = await axiosApi('/categories');
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getCategoriesList();
  }, []);

  return (
    <Drawer open variant="permanent">
      <Box sx={{ width: 250 }}>
        <List>
          {categories.map((category) => (
            <ListItem key={category}>
              <ListItemButton onClick={() => navigate(`/${category}`)}>
                {category}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};