import HomeBrandSection from "./HomeBrandSection";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncHomeBrandSection() {
  await getData();
  return <HomeBrandSection />;
}
