import { createApp, reactive } from "vue";
import MetadataViewer from './components/MetadataViewer.vue'
import { createHead } from "@unhead/vue";


export function createMetadataViewer(
  /**
   * The element to mount the MetadataViewer to
   */
  el: HTMLElement | null,

  /**
   * The configuration object for the MetadataViewer
   *
   * TODO: Use correct type for configuration
   */
  initialConfig: Record<string, any> = {}
) {

  const configuration = reactive(initialConfig)

  const app = createApp(MetadataViewer, {
    configuration
  })

  const head = createHead()
  app.use(head)

  function mount(mountingEl = el) {
    if (!mountingEl) {
      console.warn(
        'Invalid HTML element provided. Cannot mount Metadata Viewer',
      )
      return
    }
    app.mount(mountingEl)
  }

  return {
    mount,
    unmount: () => app.unmount()
  }
}
