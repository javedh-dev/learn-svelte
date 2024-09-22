<script>
	let username = '';
	let password = '';
	let message = '';

	const handleSubmit = async () => {
		message = '';
		const response = await fetch('/form-actions/auth', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const responseData = await response.json();
		message = responseData.message;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="username">Username:</label>
		<input type="text" bind:value={username} id="username" required />
	</div>
	<div>
		<label for="password">Password:</label>
		<input type="password" bind:value={password} id="password" required />
	</div>
	<div>
		<p>{message}</p>
	</div>

	<button type="submit">Login</button>
</form>

<style>
	form {
		max-width: 300px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		background-color: #f9f9f9;
	}

	div {
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	input {
		width: 95%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		width: 50%;
		padding: 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
