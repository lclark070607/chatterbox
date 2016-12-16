window.addEventListener('load', function() {
    getMessage();
    let submitBtn = document.querySelector('#send');
    submitBtn.addEventListener('click', addMessage);
});

function getMessage() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
 
//  *** wrong code ***  
//        let parent = document.querySelector('#incoming-message');
//        for (let i = 0; response.chats.length; i++) {
//            let inMessage = document.createElement('li');
//            inMessage.textContent = response.chats[i].message;
//            parent.appendChild(inMessage);
//            console.log(response.chats.message);
//         }   
//     });
// request.send();
// }

 let parent = document.querySelector('#incoming-message');
       for (let i = 0; i < response.chats.length; i++) {
           let inMessage = document.createElement('li');
           let inUser = document.createElement('li');
           inMessage.textContent = response.chats[i].message;
           inUser.textContent = response.chats[i].from;
           parent.appendChild(inMessage);
           parent.appendChild(inUser);
        } 
 
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
    document.querySelector('#type').value = '';
    push.send(body);
}