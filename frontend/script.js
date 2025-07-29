document.getElementById('investForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;
  const plan = document.getElementById('plan').value;

  const data = { name, amount, plan };

  try {
    const res = await fetch('https://rexfunds.up.railway.app/api/invest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById('responseMessage').innerText = result.message || 'Investment submitted!';
  } catch (err) {
    document.getElementById('responseMessage').innerText = 'Error: Could not reach server.';
  }
});
