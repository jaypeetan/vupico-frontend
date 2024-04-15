'use client';
import { SyntheticEvent, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from '@material-tailwind/react';
import useConfig from '../hooks/useConfig';

function LoginPage() {
  const { getConfig } = useConfig();
  useEffect(() => {
    const asyncFunction = async () => {
      const data = await getConfig();
      console.log('config: ', data);
    };
    asyncFunction();
  }, []);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader color="blue" className="h-12 flex items-center justify-center">
          <Typography variant="h5">Login</Typography>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input type="text" label="Username" />
            </div>
            <div className="mb-6">
              <Input type="password" label="Password" />
            </div>
            <CardFooter>
              <Button color="blue" size="lg" fullWidth type="submit">
                Sign In
              </Button>
            </CardFooter>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginPage;
