import Recommend from "./Recommend";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncRecommend() {
  await getData();
  return <Recommend />;
}
