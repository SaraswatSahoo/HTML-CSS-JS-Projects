let eventList = [];

function renderPage(){
let htmlList='';
for(let i=0;i<eventList.length;i++){
    let todoEventName = eventList[i].eventname;
    let todoEventDate = eventList[i].eventDate;
    let html = `
            <div class="name">${todoEventName}</div> 
            <div class="date">${todoEventDate}</div>
            <button class="delete" onclick="
                eventList.splice(${i},1);
                renderPage();
            ">Delete</button>
        `;
    htmlList += html;
}
document.querySelector('.js-todo-List').innerHTML=htmlList;
}

function addEvent(){
    let event = document.querySelector('.js-input');
    let dateSelect = document.querySelector('.js-date');
    let eventname = event.value;
    let eventDate = dateSelect.value;
    eventList.push({eventname,eventDate});
    //similar to eventList.push({eventname: eventname, eventDate: eventDate});
    event.value = '';
    dateSelect.value = '';
    renderPage();
}
