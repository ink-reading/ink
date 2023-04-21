import type { ComponentType, SvelteComponentTyped } from "svelte";
import type { SVGAttributes } from "svelte/elements";

export type IconComponent = ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>;
