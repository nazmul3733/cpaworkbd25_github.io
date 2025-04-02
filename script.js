let users = [];

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the requested page
    document.getElementById(pageId).style.display = 'block';
}

function goBack() {
    window.history.back();
}

function registerUser() {
    const fullName = document.getElementById('full-name').value;
    const username = document.getElementById('username').value;
    const bkashNumber = document.getElementById('bkash-number').value;

    const user = {
        fullName,
        username,
        serialNumber: users.length + 1,
        bkashNumber
    };

    users.push(user);
    alert('Registration Successful!');
    showPage('page-1');
}

function searchProfile() {
    const searchUsername = document.getElementById('search-username').value;
    const user = users.find(u => u.username === searchUsername);

    if (user) {
        document.getElementById('user-name').textContent = user.fullName;
        document.getElementById('user-username').textContent = user.username;
        document.getElementById('user-serial').textContent = 'Serial No: ' + user.serialNumber;
        showPage('page-4');
    } else {
        alert('User not found!');
    }
}

function openImpressionLink() {
    const username = document.getElementById('user-username').textContent;
    window.open(`https://101000.shop/92af22c7480006e3af1d/2bb8de396d/?placementName=${username}`, '_blank');
}

function openSignUpLink() {
    const username = document.getElementById('user-username').textContent;
    window.open(`https://101000.shop/92af22c7480006e3af1d/2bb8de396d/?placementName=${username}`, '_blank');
}

function checkAdminPassword() {
    const password = document.getElementById('admin-password').value;
    if (password === '373324') {
        showPage('user-list');
        displayUserList();
    } else {
        alert('Incorrect password!');
    }
}

function displayUserList() {
    const userListDiv = document.getElementById('users');
    userListDiv.innerHTML = '';
    users.forEach((user, index) => {
        userListDiv.innerHTML += `
            <p>${index + 1}. ${user.fullName} - ${user.username} - Serial: ${user.serialNumber} - Bkash: ${user.bkashNumber}</p>
        `;
    });
}
