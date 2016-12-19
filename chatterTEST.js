idCount = 0;
setInterval(function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        for (let i = 0; i < response.chats.length; i++) {
            idCount = response.chats[i].id;
            console.log('idCount logging');
        }
        return idCount;
    });
    request.send();
    console.log('timeout request sent');
    console.log(idCount);
    newMessages();
}, 3000);
