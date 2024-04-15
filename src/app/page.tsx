'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useConfig from './hooks/useConfig';
import { Button, ThemeProvider } from '@material-tailwind/react';

export default function Home() {
  const { getConfig } = useConfig();
  const [envVar, setEnvVar] = useState<Record<string, any>>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getConfig();
      setEnvVar(response);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <main className="flex h-full w-full flex-col items-center p-24">
        <Button>
          <Link href="/server">Go To Server Page</Link>
        </Button>
        <span>Environment Variable</span>
        <pre>{JSON.stringify(envVar, undefined, 2)}</pre>
      </main>
    </ThemeProvider>
  );
}
