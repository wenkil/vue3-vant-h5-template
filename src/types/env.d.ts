/// <reference types="vite/client" />

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	interface ComponentCustomProperties {
		$t: (key: string) => string;
	}
	export default component;
}
