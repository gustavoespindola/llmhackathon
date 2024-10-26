<script lang="ts">
	import { useChat } from '@ai-sdk/svelte';
	import PlusIcon from 'lucide-svelte/icons/plus';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount, afterUpdate } from 'svelte';
	import { writable } from 'svelte/store';
	import { ArrowUp, Loader, User, BotMessageSquare } from 'lucide-svelte';

	let textInput: HTMLInputElement | null = null;
	let messagesContainer: HTMLDivElement | null = null;
	let waitMessage = writable(false);

	function cleanHistory() {
		$messages = [];
	}

	const api = '/api/chat/mistral'; // codegpt, mistral, openai

	const { input, handleSubmit, messages, isLoading, stop } = useChat({
		api,
		keepLastMessageOnError: true,
		onResponse: (response: Response) => {
			console.log('onResponse', response);
		},
		onFinish() {
			waitMessage.set(false);
		},
		onError: (error: Error) => {
			console.log('onError', error);
			waitMessage.set(false);
		}
	});

	onMount(() => {
		textInput = document.querySelector('input');
		messagesContainer = document.getElementById('messagesContainer') as HTMLDivElement | null;
		if (textInput) {
			textInput.focus();
		}
	});

	afterUpdate(() => {
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	});
</script>

<svelte:head>
	<title>Hackathon LLM</title>
	<meta name="description" content="Mistral and CodeGPT Chatbot Demo" />
</svelte:head>

<main class="w-full h-full overflow-hidden">
	<div class="flex flex-col gap-4 h-screen">
		<header class="flex items-center justify-between p-4 fixed top-0 w-full">
			<h1
				class="text-lg font-semibold px-2 py-1 tracking-tight backdrop-blur-sm rounded-full bg-white/50"
			>
				LLM Hackathon
			</h1>
			<button
				on:click={() => cleanHistory()}
				type="submit"
				class="text-sm px-2 py-1.5 rounded-lg border flex gap-2 items-center ml-auto disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-slate-900"
				disabled={!$messages.length || $isLoading}
			>
				<PlusIcon class="size-4" />
				New Chat
			</button>
		</header>

		<!-- MESSAGES -->
		<section
			id="messagesContainer"
			class="flex flex-col gap-4 px-4 pb-4 h-full overflow-y-auto pt-20"
		>
			<div class="flex flex-col mx-auto max-w-2xl w-full h-full">
				{#if $messages.length > 0}
					<ul class="flex flex-col gap-2 w-full">
						{#each $messages as message}
							<li class="fade-in-from-bottom p-2 rounded flex gap-2">
								<div
									class={`size-7 flex items-center justify-center text-sm rounded-full uppercase font-semibold flex-shrink-0 ${message.role !== 'user' ? 'bg-purple-100 text-purple-500' : 'bg-slate-100 text-slate-500'}`}
								>
									{#if message.role !== 'user'}
										<BotMessageSquare class="size-4" />
									{:else}
										<User class="size-4" />
									{/if}
								</div>
								<div class="flex flex-col gap-2 pt-1.5">
									<b class="text-xs tracking-tight capitalize">{message.role}</b>
									<div class="prose prose-base prose-slate flex flex-col">
										<SvelteMarkdown source={message.content} />
									</div>
								</div>
							</li>
						{/each}
						{#if $waitMessage}
							<div class="p-2 rounded flex gap-4 items-center fade-in-from-bottom">
								<div class="px-1 flex gap-2 items-center justify-center">
									<Loader class="text-slate-400 animate-spin size-5" />
									<p class="text-slate-700 tracking-tight">Thinking.</p>
								</div>
							</div>
						{/if}
					</ul>
				{:else}
					<p class="max-w-xs text-center m-auto p-4 rounded-xl bg-slate-50">
						Type something and press enter
					</p>
				{/if}
			</div>
		</section>

		<!-- Chat Input -->
		<form on:submit={handleSubmit} class="flex gap-2 w-full mt-auto mx-auto max-w-2xl p-4">
			<input
				bind:value={$input}
				class="border rounded-xl w-full bg-slate-50 px-3 py-2 h-12"
				placeholder="Type something and press enter"
				on:keydown={(e: KeyboardEvent) => {
					if (e.key === 'Enter' && !e.shiftKey) {
						e.preventDefault();
						handleSubmit();
						waitMessage.set(true);
					}
				}}
			/>
			{#if !$isLoading}
				<button
					type="submit"
					class="rounded-xl bg-black text-white dark:bg-white dark:text-black flex gap-2 items-center justify-center size-12"
					on:click={() => {
						waitMessage.set(true);
					}}
				>
					<ArrowUp class="size-5" />
				</button>
			{:else}
				<button
					on:click={() => {
						stop();
						waitMessage.set(false);
					}}
					type="submit"
					class="px-2 py-1.5 rounded-xl bg-red-400 text-red-50"
				>
					Stop
				</button>
			{/if}
		</form>
	</div>
</main>
