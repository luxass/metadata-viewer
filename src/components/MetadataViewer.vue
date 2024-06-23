<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue';
import { computed } from 'vue';
import type { MetadataViewerConfiguration } from '~/types';

const props = defineProps<{
  configuration?: MetadataViewerConfiguration;
}>()

const configuration = computed<MetadataViewerConfiguration>(() => ({
  strict: true,
  ...props.configuration,
}))

if (configuration.value?.seo) {
  useSeoMeta(configuration.value.seo)
}

</script>

<template>
  <div class="bg-yellow-600">
    Hello!
  </div>
</template>
