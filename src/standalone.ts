import { createApp, reactive } from 'vue'
import './styles/main.css'
import { default as MetadataViewer } from './components/MetadataViewer.vue'

const specScriptTag = document.getElementById('metadata-reference')

if (!specScriptTag) {
  throw new Error('metadata-reference script tag not found')
}

const props = reactive({})

const container = document.createElement('div')
specScriptTag.parentNode?.insertBefore(container, specScriptTag)

const app = createApp(MetadataViewer, props)
app.mount(container)
