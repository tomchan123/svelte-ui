import type { LikeCounter } from '$src/lib/interface.js';

export async function load({ fetch }) {
    const res = await fetch('/data/like-counter')
    const likeCounterData = await res.json() as LikeCounter;

    return {
        likeCounterData
    }
}