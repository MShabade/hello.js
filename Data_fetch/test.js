document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();

        document.getElementById('data').innerHTML = `
            Task ID: ${data.id} <br>
            User ID: ${data.userId} <br>
            Title: ${data.title} <br>
            Completed: ${data.completed}
        `;
    } catch (error) {
        console.error(error);
        document.getElementById('data').innerText = 'Failed to fetch data';
    }
});
