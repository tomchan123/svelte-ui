import type { LikeCounter } from '$src/lib/interface';
import { json } from '@sveltejs/kit';
import { Mutex } from 'async-mutex';
import * as fs from 'node:fs/promises';

const fileMutex = new Mutex();

export async function GET() {
    const likeCounterData = JSON.parse((await fs.readFile('data.json')).toString()).like_counter as LikeCounter;
    return json(likeCounterData);
}

export async function PUT({ url }) {
    let data;
    fileMutex.runExclusive(async () => {
        data = JSON.parse((await fs.readFile('data.json')).toString());

        const action = url.searchParams.get('action');
        if (action === 'like') {
            data.like_counter.likes++;
        } else if (action === 'unlike') {
            data.like_counter.likes--;
        } else if (action === 'dislike') {
            data.like_counter.dislikes++;
        } else if (action === 'undislike') {
            data.like_counter.dislikes--;
        }
        
        await fs.writeFile('data.json', JSON.stringify(data));
    });
    return json(data);
}