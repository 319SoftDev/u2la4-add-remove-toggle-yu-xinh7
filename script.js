const heading = document.querySelector("#heading");


const changeFontColor = ()  => {
    heading.classList.add("blue-text");
}

heading.addEventListener("click", changeFontColor);


//  subheading 
const subheading = document.querySelector("#subheading");

const changeFontColors = () => {
    subheading.classList.toggle("blue-text");
}

subheading.addEventListener("click", changeFontColors);

//  Reply buttons
const replyButton = document.querySelector ("#reply-button");
const replyMessage = document.querySelector ("#reply-message");

const openReplyMessage = () => {
    replyMessage.classList.remove("hidden");
}

replyButton.addEventListener("click", openReplyMessage);

// Send d& cancel buttons hide text box ( and hidden )

const sendButton = document.querySelector ("#send-button");
const cancelButton = document.querySelector ("#cancel-button");

const closeReplyMessage = () => {
    replyMessage.classList.add("hidden");
}

cancelButton.addEventListener("click", closeReplyMessage );
sendButton.addEventListener("click", closeReplyMessage );

// medium activities
const isRead = document.querySelector("#is-read");
const inboxMessage = document.querySelector("inbox-message");
const markUnread = document.querySelector("#mark-button");

const open = () => {
    inbox.classlist.add("isRead");
    inboxMessage.classList.remove("hidden");
    markUnread.classList.remove("#hidden")
}

open.addEventListener("click", isRead);
open.addEventListener("click", inboxMessage);
open.addEventListener("click", markUnread);

const close = () => {
    
}
