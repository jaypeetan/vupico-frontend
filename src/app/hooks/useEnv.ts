export default function useEnv() {
  const getEnv = async (): Promise<Record<string, any>> => {
    const response = await fetch(`/api/env`);
    return await response.json();
  };

  return {
    getEnv,
  };
}
