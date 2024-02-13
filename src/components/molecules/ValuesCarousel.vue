<template>
	<div class="valuesCarousel">
		<ul class="valuesCarousel-ctaList">
			<li
				class="valuesCarousel-ctaList__item"
				:class="{ active: isItemActive(index) }"
				v-for="(item, index) in values"
				:key="item.cta"
			>
				<button @click="changeActiveIndex(index)">
					{{ item.cta }}
				</button>
			</li>
		</ul>
		<div class="valuesCarousel-card">
			<div>
				<p class="valuesCarousel-card__subtitle">{{ values[activeIndex].subtitle }}</p>
				<h3 class="valuesCarousel-card__title">{{ values[activeIndex].title }}</h3>
				<p class="valuesCarousel-card__description">{{ values[activeIndex].description }}</p>
			</div>
			<img :src="values[activeIndex].img" :alt="values[activeIndex].imgAlt" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
	values: [
		{
			title: string;
			description: string;
			cta: string;
			subtitle: string;
			img: string;
			imgAlt: string;
		},
	];
}>();

let activeIndex = ref(0);

const changeActiveIndex = (index: number) => {
	activeIndex.value = index;
};

const isItemActive = (index: number) => {
	return activeIndex.value === index;
};
</script>

<style lang="scss" scoped>
.valuesCarousel {
	display: grid;
	grid-template-columns: 1fr 4fr;

	&-ctaList {
		display: flex;
		flex-direction: column;
		gap: 24px;
		justify-content: center;
		padding: 0;

		&__item {
			list-style: none;

			button {
				all: unset;
				cursor: pointer;
				font-size: 1.25rem;
				font-weight: 600;
				color: var(--color-copy);
			}
		}

		.active {
			button {
				color: var(--color-accent);
			}
		}
	}

	&-card {
		position: relative;
		padding: 75px 65px;
		background-color: var(--color-card-bg);
		display: flex;

		&__subtitle {
			size: 1.5rem;
			color: var(--color-title);
		}

		&__title {
			font-size: 2.5rem;
			font-weight: 700;
			margin-bottom: 56px;
			color: var(--color-accent);
		}

		&__description {
			size: 1.5rem;
			color: var(--color-copy);
		}

		img {
			width: 400px;
			height: 265px;
			flex: 1 0 auto;
			transform: translateX(90px);
		}
	}
}
</style>
