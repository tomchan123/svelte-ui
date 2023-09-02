import config from "$lib/config.json" assert { type: "json " };
import type { LandingGridItem, LandingNavBarItem, LandingSocialItem } from "$lib/interface";

export function getLandingNavBarItems(): LandingNavBarItem[] {
    return config["landing_navbar_items"];
}

export function getLandingSocialItems(): LandingSocialItem[] {
    return config["landing_social_items"];
}

export function getLandingGirdItems(): LandingGridItem[] {
    return config["landing_grid_items"];
}