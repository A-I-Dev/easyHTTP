(() => {
    const http = new easyHTTP;

    http.get('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data));

    // const data = {
    //     title: 'Post 101',
    //     body: 'Asd qwqwerqw w rqwrqwqwr wq'
    // };

    // http.post('https://jsonplaceholder.typicode.com/posts', data).then(data => console.log(data));

    // http.put('https://jsonplaceholder.typicode.com/posts/1', data).then(data => console.log(data));    

    // http.delete('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data));     
})()