import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const random = Math.floor(Math.random() * 100);

	return json({ server: 'ok', random: random });
};
