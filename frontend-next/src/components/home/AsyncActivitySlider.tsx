import ActivitySlider from "./ActivitySlider";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncActivitySlider() {
  await getData();
  return <ActivitySlider />;
}
