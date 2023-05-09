const fetcher = async ({url, method, body, json = true}) => {
    // console.log(JSON.stringify(body))
    const res = await fetch(url, {
        method,
        ...(body && {body: JSON.stringify(body)}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        // handle errors
        throw new Error('API error');
    }

    if (json) {
        console.log('json')
        const data = await res.json();
        // console.log('data', data.data);
        return data.data;

    }
}

export const register = (user) => {
    return fetcher({url: '/api/register', method: 'POST', body: user})
}

export const signin = (user) => {
    return fetcher({url: '/api/signin', method: 'POST', body: user})
}
