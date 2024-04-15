import { getConfig } from "@/core/config";
export async function GET() {
  const config = await getConfig()
  return Response.json(config);
}