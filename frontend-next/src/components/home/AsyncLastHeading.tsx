import LastHeading from "./LastHeading";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncLastHeading() {
  await getData();
  return <LastHeading />;
}
