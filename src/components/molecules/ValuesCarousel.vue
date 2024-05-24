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
			<div class="valuesCarousel-card__shadow"></div>
		</div>
	</div>

	<div class="valuesCarousel valuesCarousel--mobile">
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
			<div class="valuesCarousel-card-titleContainer">
				<img src="https://via.placeholder.com/72x72" />
				<div>
					<p class="valuesCarousel-card__subtitle">{{ values[activeIndex].subtitle }}</p>
					<h3 class="valuesCarousel-card__title">{{ values[activeIndex].title }}</h3>
				</div>
			</div>
			<p class="valuesCarousel-card__description">{{ values[activeIndex].description }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
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

onMounted(() => {
	setInterval(() => {
		if (activeIndex.value < props.values.length - 1) {
			activeIndex.value++;
		} else {
			activeIndex.value = 0;
		}
	}, 20000);
});

let activeIndex = ref(0);

const changeActiveIndex = (index: number) => {
	activeIndex.value = index;
};

const isItemActive = (index: number) => {
	return activeIndex.value === index;
};
</script>

<style lang="scss" scoped>
@import 'src/styles/_mixins.scss';

.valuesCarousel {
	display: none;
	grid-template-columns: 1fr 4fr;

	@include desktop {
		display: grid;
	}

	$this: &;

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

				&:hover {
					color: var(--color-accent);
					transition: 0.2s linear;
				}
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
		border-radius: 20px;
		padding: 75px 65px;
		background-color: var(--color-card-bg);
		display: flex;
		align-items: center;

		@include desktop {
			height: 350px;
		}

		&__subtitle {
			font-size: 1.5rem;
			color: var(--color-title);
		}

		&__title {
			font-size: 2.5rem;
			font-weight: 700;
			margin-bottom: 56px;
			color: var(--color-accent);
		}

		&__description {
			font-size: 1.5rem;
			color: var(--color-copy);
		}

		img {
			width: 400px;
			height: 265px;
			flex: 1 0 auto;
			transform: translateX(90px);
			z-index: 2;
		}

		&__shadow {
			display: none;

			@include desktop {
				display: block;
				position: absolute;
				width: 400px;
				height: 265px;
				opacity: 0.8;
				border-radius: 50%;
				filter: blur(100px);
				background-color: rgba(252, 114, 71, 1);
				z-index: 1;
				right: -25px;
				top: 25%;
			}
		}
	}

	&--mobile {
		display: block;

		@include desktop {
			display: none;
		}

		#{$this}-ctaList {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			flex-wrap: wrap;
			gap: 8px;
			padding: 0;

			&__item {
				list-style: none;

				button {
					all: unset;
					padding: 16px;
					border-radius: 60px;
					font-size: 0.875rem;
					font-weight: 400;
					color: white;
					background-color: #343a40;

					@include tablet {
						color: var(--color-copy);
						background-color: var(--color-card-bg);
					}
				}
			}

			.active {
				button {
					background-color: var(--color-accent);
					color: var(--color-white);
				}
			}
		}

		#{$this}-card {
			padding: 24px;
			display: flex;
			flex-direction: column;
			background: #343a40;

			@include tablet {
				background: var(--color-card-bg);
			}

			&-titleContainer {
				display: flex;
				align-items: center;
				gap: 10px;
				margin-bottom: 32px;
				width: 100%;

				img {
					width: 72px;
					height: 72px;
					flex: unset;
					transform: none;
				}
			}

			&__subtitle {
				font-size: 1rem;

				color: #ced4da;

				@include tablet {
					color: var(--color-title);
				}
			}

			&__title {
				font-size: 1.5rem;
				font-weight: 700;
				margin-bottom: 0;
				color: var(--color-accent);
			}

			&__description {
				font-size: 1rem;
				color: #ced4da;

				@include tablet {
					color: var(--color-copy);
				}
			}
		}
	}
}
</style>
