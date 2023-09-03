import type { ComponentType, SvelteComponent } from "svelte";
import type { SVGAttributes } from "svelte/elements";

export type IconComponent = ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>>>;
