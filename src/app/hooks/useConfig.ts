export default function useConfig() {
  const getConfig = async (): Promise<Record<string, any>> => {
    const response = await fetch(`/api/env`);
    return await response.json();
  };

  return {
    getConfig,
  };
}
