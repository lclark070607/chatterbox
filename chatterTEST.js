//global var. keeps count of amount of messages
let idCount = 0;
let initialIdCount = 0;
window.addEventListener('load', function() {
    getIdCount();

});


console.log(initialIdCount +' current id count up top');
// timed update function
setInterval(function () {

    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        for (i = 0; i< response.chats.length; i++) 
            idCount = response.chats[i].id;
            if (idCount > initialIdCount) {
                initialIdCount++;
//this prints to dome in outgoing-message box. currently getting error message. 
// console.log(response.chats[i].id);         
//                 if (response.chats[i].id === 'Louise') {
// console.log(response.chats[i].from);
//                     let parent = document.querySelector('#outgoing-message');
//         for (let i = initialIdCount; i < response.chats.length; i++) {
//             let inMessage = document.createElement('li');
//             let inUser = document.createElement('div');
//             inMessage.textContent = response.chats[i].message;
//             //  + response.chats[i].from;
//             inUser.textContent = response.chats[i].from + ' :';
//             parent.appendChild(inUser);
//             parent.appendChild(inMessage);
//         }    


                // }else {
            
//print to dom code starts here
            let parent = document.querySelector('#incoming-message');
        for (let i = initialIdCount; i < response.chats.length; i++) {
            let inMessage = document.createElement('li');
            let inUser = document.createElement('div');
            inMessage.textContent = response.chats[i].message;
            //  + response.chats[i].from;
            inUser.textContent = response.chats[i].from + ' :';
            parent.appendChild(inUser);
            parent.appendChild(inMessage);
             
                } 
//code ends here    
}
            let user = response.chats[idCount];
            newMessage(user); 

    });
    request.send();
    console.log('idCount is ' + idCount);
// currently refreshes every 3 seconds
}, 3000);


//this currently logs number of messages
function newMessage(str) {
    let name = document.createElement('li');
    name.textContent = str.from +' this is the new messages '+ str.message;
    let parent = document.querySelector('#incoming-messages')
}

// this function logs the id count when the page is initially loaded. this number 
// is then compared to idCount which gets updated every refresh interval.
function getIdCount() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        for (i = 0; i< response.chats.length; i++) { 
            initialIdCount = response.chats[i].id;
console.log(response.chats[i].id +' bottom id number');
        }
    });
    request.send();
}
console.log('current id count ' +initialIdCount);