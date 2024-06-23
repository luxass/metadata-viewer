import { createApp, reactive } from 'vue'
import './styles/main.css'
import MetadataViewer from './components/MetadataViewer.vue'
import type { MetadataViewerConfiguration } from './types'
import { createHead } from '@unhead/vue'

const specScriptTag = document.getElementById('metadata-reference')

if (!specScriptTag) {
  throw new Error('metadata-reference script tag not found')
}

const configuration = reactive<MetadataViewerConfiguration>({})

if (specScriptTag.hasAttribute('data-url')) {
  // fetch the configuration from the specified URL
  fetch(specScriptTag.getAttribute('data-url')!)
    .then(response => response.json())
    .then(data => {
      Object.assign(configuration, data)
    })
} else if (specScriptTag.hasAttribute('data-config')) {
  // get the configuration from the script tag
  Object.assign(configuration, JSON.parse(specScriptTag.getAttribute('data-config')!))
} else {
  throw new Error('metadata-reference script tag must have either a data-url or data-config attribute')
}

const container = document.createElement('div')
specScriptTag.parentNode?.insertBefore(container, specScriptTag)

const app = createApp(MetadataViewer, {
  configuration
})

const head = createHead()
app.use(head)

app.mount(container)
