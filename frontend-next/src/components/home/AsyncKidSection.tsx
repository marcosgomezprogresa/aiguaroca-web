import KidSection from "./KidSection";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncKidSection() {
  await getData();
  return <KidSection />;
}
