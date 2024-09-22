<script>
	import { goto } from '$app/navigation';
	let name = '';
	let email = '';
	let message = '';

	const handleSubmit = () => {
		// Handle form submission logic here
		console.log({ name, email, message });
	};

	const handleCancel = () => {
		// Redirect to the home page using Svelte's goto function
		goto('/');
	};

	export const snapshot = {
		capture: () => {
			return {
				name,
				email,
				message
			};
		},
		restore: (snapshot) => {
			name = snapshot.name;
			email = snapshot.email;
			message = snapshot.message;
		}
	};
</script>

<form class="contact-form" on:submit|preventDefault={handleSubmit}>
	<div class="form-field">
		<label for="name">Name</label>
		<input type="text" id="name" bind:value={name} required />
	</div>
	<div class="form-field">
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} required />
	</div>
	<div class="form-field">
		<label for="message">Message</label>
		<textarea id="message" bind:value={message} rows="4" required></textarea>
	</div>
	<div class="form-actions">
		<button type="submit" class="form-button">Send</button>
		<button type="button" on:click={handleCancel} class="form-button" style="background-color: red;"
			>Cancel</button
		>
	</div>
</form>

<style>
	.contact-form {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		margin: auto;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #f9f9f9;
	}
	.form-field {
		margin-bottom: 1rem;
	}
	.form-field label {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	.form-field input,
	.form-field textarea {
		width: 95%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	.form-field textarea {
		resize: vertical;
	}
	.form-button {
		padding: 0.5rem;
		background-color: #28a745;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.form-button:hover {
		background-color: #218838;
	}
</style>
