fetch('menu.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('menu').innerHTML = data;
    })
    .catch(error => console.error('Error loading menu:', error));
