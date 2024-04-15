import { getConfig } from "@/core/config";

export default async function Home() {
  const config : any = await getConfig()
  const response = await fetch(`${config.externalURL}/posts`).then((res) => res.json());
  return (
    <main className="flex h-full w-full flex-col items-center p-24 overflow-y-scroll">
      <div>
        {response.map((item: any, key: number) => (
          <div key={key} className="flex flex-col">
            <span>{`${item.id}. ${item.title}`}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
