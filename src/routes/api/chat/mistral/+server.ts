import { createMistral } from '@ai-sdk/mistral';
import { streamText, convertToCoreMessages } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

const mistral = createMistral({
	apiKey: env.MISTRAL_API_KEY ?? ''
});

const system = `You help planning Hackathons.`;

export const POST = (async ({ request }) => {
	const { messages } = await request.json();

	const result = await streamText({
		model: mistral(env.MISTRAL_MODEL),
		system,
		messages: convertToCoreMessages(messages)
	});

	return result.toDataStreamResponse();
}) satisfies RequestHandler;
