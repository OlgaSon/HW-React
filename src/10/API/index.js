export const APIfetchUsers = () => fetch('https://api.github.com/users')
.then(response => response.json());


export const APIfetchOneUser = () => fetch('https://api.github.com/users/OlgaSon')
.then(response => response.json());