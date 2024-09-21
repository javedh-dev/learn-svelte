import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET(request) {
	return new json(comments);
}
