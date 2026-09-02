<template>

</template>

<style scoped>
header {
	position: relative;
	margin-block: -1em 2em;
	color: var(--vp-c-text-3);
}

/* stylelint-disable-next-line media-feature-range-notation */
@media (max-width: 768px) {
	header {
		font-size: 0.875em;
	}
}

strong {
	font-size: 1.2em;
}

.header-logo {
	position: absolute;
	top: 0;
	right: 0;
	height: 5em;
	color: var(--vp-c-divider);
	z-index: -1;
}
</style>
