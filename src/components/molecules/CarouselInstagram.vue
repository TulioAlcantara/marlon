<template>
	<carousel-3d>
		<slide :index="0"> Slide 1 Content </slide>
		<slide :index="1"> Slide 2 Content </slide>
	</carousel-3d>
	<p>test</p>
</template>

<script setup lang="ts">
import { Carousel3d, Slide } from 'vue-carousel-3d';
</script>

<style lang="scss" scoped></style>
