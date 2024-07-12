import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import lottie from 'astro-integration-lottie';
import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
	integrations: [vue({ template: { transformAssetUrls: false } }), lottie(), tunnel()],
});
