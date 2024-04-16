export async function GET() {
  const filteredData = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith('SDP_PUBLIC'))
    .reduce((accumulator: any, [key, value]) => {
      accumulator[key] = value;
      return accumulator;
    }, {});
  return Response.json(filteredData);
}
