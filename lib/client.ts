import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client =  SanityClient({
  projectId: process.env.SANITY_PROJECT_ID || "mq4i52fg",
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-12-21',
  useCdn: true,
  token: process.env.SANITY_READONLY_API_TOKEN,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource | undefined) {
  // @ts-ignore
  return builder.image(source);
}