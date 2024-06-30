import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import lottie from 'astro-integration-lottie';

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), lottie()],
});
