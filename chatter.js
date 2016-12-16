window.addEventListener('load', function() {
    getMessage();
    console.log('yippee!')
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
       for (let i = 0; response.chats.length; i++) {
           let inMessage = document.createElement('li');
           inMessage.textContent = response.chats[i].message;
           parent.appendChild(inMessage);
           console.log(response.chats.id);
        }   
    });
request.send();
}