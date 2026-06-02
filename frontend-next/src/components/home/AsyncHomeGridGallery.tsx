import HomeGridGallery from "./HomeGridGallery";

// Simulate async data fetching to enable streaming
async function getData() {
  // This allows Next.js to stream this component
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncHomeGridGallery() {
  await getData();
  return <HomeGridGallery />;
}
