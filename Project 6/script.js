const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const fetchBtn = document.getElementById('fetch-btn');
const cardContainer = document.getElementById('card-container');

fetchBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl, true);
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const avatarUrl = data.avatar_url;
            const name = data.name;
            const followers = data.followers;

            const cardHTML = `
                    <div class="card">
                        <img src="${avatarUrl}" alt="Avatar">
                        <h1>${name}</h1>
                        <p>Followers: ${followers}</p>
                    </div>
                    `;
            cardContainer.innerHTML = cardHTML;
        }
    }
    xhr.send();
});