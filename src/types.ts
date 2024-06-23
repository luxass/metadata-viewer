import type { UseSeoMetaInput } from "@unhead/vue";

export interface MetadataViewerConfiguration {
  /**
   * Should it be strict about missing metadata?
   * @default false
   */
  strict?: boolean

  /**
   * If used, passed data will be added to the HTML header
   * @see https://unhead.unjs.io/usage/composables/use-seo-meta
   */
  seo?: UseSeoMetaInput
}
