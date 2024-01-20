export const createAuthFetch = (token) => {
    return (url) => {
        return (options = {}) => {
            options.headers = {
                ...(options.headers || {}),
                'Authorization': `Bearer ${token}`
            };
            return fetch(url, options)
        }
    }
}

// Приклад того як ми можемо, але не будемо робити
// await createAuthFetch(token)(url)();
