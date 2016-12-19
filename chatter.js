window.addEventListener('load', function () {
    getMessage();
    let submitBtn = document.querySelector('#send');
    submitBtn.addEventListener('click', addMessage);


    //emojify.run(); 

    //    getMessage();
});
function getMessage() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);

        let parent = document.querySelector('#incoming-message');
        for (let i = 0; i < response.chats.length; i++) {
            let inMessage = document.createElement('li');
            let inUser = document.createElement('div');
            inMessage.textContent = response.chats[i].message;
            //  + response.chats[i].from;
            inUser.textContent = response.chats[i].from + ' :';
            parent.appendChild(inUser);
            parent.appendChild(inMessage);

        }
        // let adopter = document.querySelector('#side-bar');
        // for (let i = 0; i < response.chats.length; i++) {
        //     let users = document.createElement('li');
        //     users.textContent = response.chats[i].from;
        //     adopter.appendChild(users);
        //     let emoji = require('node-emoji');
        //     console.log('node.js', emoji,heart, 'emoji');
        // }

    });
    request.send();
}

function addMessage() {
    let push = new XMLHttpRequest();
    push.open('POST', 'http://api.queencityiron.com/chats');
    console.log(document.querySelector('#type'));
    let body = JSON.stringify({
        message: document.querySelector('#type').value,
        from: document.querySelector('#myname').value,
    });
    document.querySelector('#type').value = ' ';
    push.send(body);
}

    function newMessages() {
            let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
            let response = JSON.parse(request.responseText);
        for (let i =0; i < response.chats.length; i++) {
            if (idCount < response.chats.length) {
                console.log('new message printout');
            }
        }console.log('new message');
    }

