import LandingNavBarItems from "$lib/config/landing-navbar-items.json";
import type { LandingNavBarItem } from "$lib/interface";

export function getLandingNavBarItems(): LandingNavBarItem[] {
    return LandingNavBarItems;
}