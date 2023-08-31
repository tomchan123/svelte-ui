import config from "$lib/config.json" assert { type: "json " };
import type { LandingNavBarItem } from "$lib/interface";

export function getLandingNavBarItems(): LandingNavBarItem[] {
    return config["landing_navbar_items"];
}