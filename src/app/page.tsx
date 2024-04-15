'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useConfig from './hooks/useConfig';
import {
  ThemeProvider,
  Typography,
  List,
  ListItem,
  Avatar,
  Drawer,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const { getConfig } = useConfig();
  const [envVar, setEnvVar] = useState<Record<string, any>>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getConfig();
      setEnvVar(response);
    };
    fetchData();
  }, []);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <ThemeProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            VUPICO
          </Typography>
          <List>
            <ListItem>Dashboard</ListItem>
            <ListItem>
              <Link href="/server">Reports</Link>
            </ListItem>
          </List>
        </Drawer>
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-blue-gray-300 p-4 shadow-xl flex justify-between">
            <IconButton onClick={openDrawer}>≡</IconButton>
            <Menu>
              <MenuHandler>
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
              </MenuHandler>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Company</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </header>

          {/* Content  */}
          <main className="bg-blue-gray-100 flex-1 overflow-x-hidden overflow-y-auto p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <Typography>Config.json Content</Typography>
              <pre>{JSON.stringify(envVar, undefined, 2)}</pre>
            </div>
          </main>
          <footer className="bg-blue-gray-300 flex justify-center p-3">Vupico 2024</footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
