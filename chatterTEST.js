let idCount = 0;
setInterval(function () {

    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);

        let parent = document.querySelector('#incoming-message');
        for (let i = 0; i < response.chats.length; i++) {
            let inMessage = document.createElement('li');
            let inUser = document.createElement('div');
            inMessage.textContent = response.chats[i].message;
            inUser.textContent = response.chats[i].from + ' :';
            parent.appendChild(inUser);
            parent.appendChild(inMessage);

        }

    });
    request.send();

    // let request = new XMLHttpRequest();
    // request.open('GET', 'http://api.queencityiron.com/chats');
    // request.addEventListener('load', function () {
    //     let response = JSON.parse(request.responseText);
    //     for (let i = 0; i < response.chats.length; i++) {
    //         idCount = response.chats[i].id;
    //         console.log('idCount logging');
    //     }
    //     return idCount;
    // });
    // request.send();
    console.log('timeout request sent');
    console.log(idCount);
    newMessages();
}, 3000);
