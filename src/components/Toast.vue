<template>
	<div class="flex ml-1 mt-1.5 text-left text-sm">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-4 mt-0.5 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="#EF4444">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>

		<p class="pl-0.5 text-red-500 text-left tracking-tighter" v-if="toastError === ErrorType.networkError">Error with fetching conversion rates</p>
		<p class="pl-0.5 text-red-500 text-left tracking-tighter" v-else>You have to enter a valid number for the amount</p>
	</div>
</template>

<script setup lang="ts">
import { ErrorType } from '../types';

interface Props {
  toastError: ErrorType;
};

const props = defineProps<Props>();
</script>