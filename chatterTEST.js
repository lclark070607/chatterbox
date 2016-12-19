//global var. keeps count of amount of messages
let idCount = 0;
let currentIdCount = 0;
window.addEventListener('load', function() {
    getIdCount();

});


console.log(currentIdCount +' current id count up top');
// timed update function
setInterval(function () {

    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        for (i = 0; i< response.chats.length; i++) 
            idCount = response.chats[i].id;
            if (idCount > currentIdCount) {
                currentIdCount++;
                
            
//print to dom code starts here

            let parent = document.querySelector('#incoming-message');
        for (let i = currentIdCount; i < response.chats.length; i++) {
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
            
            //might need to change this counter
            let user = response.chats[idCount];
            newMessage(user); 
            //console.log(response.chats[idCount].from +' this is response.chats[0]')

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
    //console.log(str.from +' new message section ' + str.message)
}



function getIdCount() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/chats');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        for (i = 0; i< response.chats.length; i++) { 
            currentIdCount = response.chats[i].id;
console.log(response.chats[i].id +' bottom id number');
        }
    });
    request.send();
}
console.log('current id count ' +currentIdCount);