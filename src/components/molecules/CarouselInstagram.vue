<template>
	<div class="carouselInstagram">
		<ul class="carouselInstagram-list">
			<li class="carouselInstagram-list__prevPrev">
				<img
					:src="props.items[prevPrevIndex].img"
					:alt="props.items[prevPrevIndex].alt"
					@click="activeIndex = prevPrevIndex"
				/>
			</li>
			<li class="carouselInstagram-list__prev">
				<img
					:src="props.items[prevIndex].img"
					:alt="props.items[prevIndex].alt"
					@click="activeIndex = prevIndex"
				/>
			</li>
			<li class="carouselInstagram-list__selected">
				<a :href="props.items[activeIndex].link">
					<img :src="props.items[activeIndex].img" :alt="props.items[activeIndex].alt" />
				</a>
			</li>
			<li class="carouselInstagram-list__next">
				<img
					:src="props.items[nextIndex].img"
					:alt="props.items[nextIndex].alt"
					@click="activeIndex = nextIndex"
				/>
			</li>
			<li class="carouselInstagram-list__nextNext">
				<img
					:src="props.items[nextNextIndex].img"
					:alt="props.items[nextNextIndex].alt"
					@click="activeIndex = nextNextIndex"
				/>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps<{
	items: [
		{
			img: string;
			alt: string;
			link: string;
		},
	];
}>();

const activeIndex = ref(0);
const nextIndex = computed(() => (activeIndex.value + 1) % props.items.length);
const prevIndex = computed(() => (activeIndex.value - 1 + props.items.length) % props.items.length);
const prevPrevIndex = computed(
	() => (activeIndex.value - 2 + props.items.length) % props.items.length
);
const nextNextIndex = computed(() => (activeIndex.value + 2) % props.items.length);
</script>

<style lang="scss" scoped>
.carouselInstagram {
	overflow: hidden;
	max-width: 1920px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;

	&-list {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		li {
			img {
				border-radius: 10%;
			}
		}

		&__prev,
		&__next,
		&__prevPrev,
		&__nextNext {
			cursor: pointer;
			filter: brightness(0.5);
		}

		&__prev {
			transform: translateX(20%) scale(0.8);
			z-index: 2;
		}

		&__next {
			transform: translateX(-20%) scale(0.8);

			z-index: 2;
		}

		&__prevPrev {
			transform: translateX(80%) scale(0.6);
			z-index: 1;
		}

		&__nextNext {
			transform: translateX(-80%) scale(0.6);
			z-index: 1;
		}

		&__selected {
			z-index: 3;
		}
	}
}
</style>
