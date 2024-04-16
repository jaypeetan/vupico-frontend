import { getEnv } from '@/core/utils/env';

export default async function Home() {
  const env: any = await getEnv();
  const response = await fetch(`${env.SDP_PUBLIC_EXTERNAL_URL}/posts`).then((res) => res.json());
  return (
    <main className="flex h-full w-full flex-col items-center p-24 overflow-y-scroll">
      <div>
        <span>Secret key from env var: {env.SECRET_KEY}</span>
        {response.map((item: any, key: number) => (
          <div key={key} className="flex flex-col">
            <span>{`${item.id}. ${item.title}`}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
