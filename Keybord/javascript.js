document.addEventListener('keydown', (event) => {
    const insertDiv = document.getElementById('insert');
    
    // Clear the content of the `#insert` div
    insertDiv.innerHTML = `
        <div class="key-box">
            <p>Key: <strong>${event.key === ' ' ? 'Space' : event.key}</strong></p>
            <p>Code: <strong>${event.code}</strong></p>
            <p>KeyCode: <strong>${event.keyCode}</strong></p>
        </div>
    `;
});
