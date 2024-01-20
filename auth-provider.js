export const getToken = async () => {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                expiresInMins: 60,
            })
        })
        const {token} = await response.json();
        return token;
    } catch (error) {
        throw new Error(error);
    }
}
