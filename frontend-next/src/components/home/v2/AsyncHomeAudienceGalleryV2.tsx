import HomeAudienceGalleryV2 from "./HomeAudienceGalleryV2";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return {};
}

export default async function AsyncHomeAudienceGalleryV2() {
  await getData();
  return <HomeAudienceGalleryV2 />;
}
