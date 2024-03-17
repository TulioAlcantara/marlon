<template>
	<div class="faqCarousel">
		<ul class="faqCarousel-ctaList">
			<li
				class="faqCarousel-ctaList__item"
				:class="{ active: isItemActive(index) }"
				v-for="(item, index) in faq"
				:key="item.title"
			>
				<button @click="changeActiveIndex(index)">
					{{ item.title }}
				</button>
			</li>
		</ul>
		<ul class="faqCarousel-detailsList">
			<li
				v-for="item in faq[activeIndex].items"
				:key="item.summary"
				class="faqCarousel-detailsList__item"
			>
				<details>
					<summary>{{ item.summary }}</summary>
					<p>{{ item.text }}</p>
				</details>
			</li>
		</ul>
	</div>

	<div class="faqCarousel--mobile">
		<ul class="faqCarousel-ctaList">
			<li class="faqCarousel-ctaList__item" v-for="item in faq" :key="item.title">
				<details>
					<summary>{{ item.title }}</summary>
					<ul class="faqCarousel-detailsList">
						<li
							v-for="item in faq[activeIndex].items"
							:key="item.summary"
							class="faqCarousel-detailsList__item"
						>
							<details>
								<summary>{{ item.summary }}</summary>
								<p>{{ item.text }}</p>
							</details>
						</li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	faq: [
		{
			title: string;
			items: [
				{
					summary: string;
					text: string;
				},
			];
		},
	];
}>();

const activeIndex = ref(0);
const changeActiveIndex = (index: number) => {
	activeIndex.value = index;
};
const isItemActive = (index: number) => {
	return activeIndex.value === index;
};
</script>

<style lang="scss" scoped>
@import 'src/styles/_mixins.scss';

.faqCarousel {
	display: none;

	@include desktop {
		display: flex;
		justify-content: space-between;
	}

	$this: &;

	&-ctaList {
		width: 50%;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 48px;
		padding-left: 0;

		&__item {
			color: var(--color-copy);

			&.active {
				color: var(--color-accent);
			}

			button {
				all: unset;
				cursor: pointer;
				font-size: 2rem;
			}
		}
	}

	&-detailsList {
		width: 50%;
		list-style: none;

		&__item {
			padding: 16px 8px;
			border-bottom: 1px solid var(--color-accent);

			details {
				summary {
					list-style: none;
					cursor: pointer;
					font-size: 1.5rem;
				}

				p {
					font-size: 1.5rem;
					color: var(--color-copy);
					margin-top: 16px;
				}
			}
		}
	}

	&--mobile {
		@include desktop {
			display: none;
		}

		#{$this}-ctaList {
			width: 100%;
			gap: 16px;

			&__item {
				details {
					summary {
						list-style: none;
						font-size: 1rem;
						font-weight: 700;
					}
				}
			}
		}

		#{$this}-detailsList {
			padding: 12px 0 36px;
			width: 100%;

			&__item {
				padding: 16px 8px;

				details {
					summary {
						list-style: none;
						color: var(--color-title);
					}

					p {
						font-size: 1rem;
						color: var(--color-copy);
						margin-top: 16px;
					}
				}
			}
		}
	}
}
</style>
