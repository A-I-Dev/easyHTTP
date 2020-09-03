class easyHTTP {
    
    async get(url) {
        const response = await fetch(url),
        resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }),
        resData = await response.json();
        return resData;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }),
        resData = await response.json();
        return resData;
    }

    async delete(url) {
        const response = fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-type": 'application/json'
            }
        }),
        resData = await 'Item deleted!';
        return resData;        
    }    
}