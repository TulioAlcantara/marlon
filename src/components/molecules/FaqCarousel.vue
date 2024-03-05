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
		<ul class="faqCarousel-details">
			<li v-for="item in faq[activeIndex].items" :key="item.summary">
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
				<ul>
					<li v-for="item in faq[activeIndex].items" :key="item.summary">
						<details>
							<summary>{{ item.summary }}</summary>
							<p>{{ item.text }}</p>
						</details>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

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

<style lang="scss" scoped></style>
