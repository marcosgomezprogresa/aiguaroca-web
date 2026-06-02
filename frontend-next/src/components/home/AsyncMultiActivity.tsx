import MultiActivity from "./MultiActivity";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncMultiActivity() {
  await getData();
  return <MultiActivity />;
}
