function delete_message(btn){
   // btn.style.backgroundColor = "blue";
   //btn.parentElement.style.display = "none";
   btn.parentElement.parentElement.remove();
}

function send_message(){
    var my_list = document.getElementById("my_list");
    var message_input = document.getElementById("message");

    if(message_input.value != ""){
        var new_message = document.createElement("P");
        new_message.innerHTML = message_input.value;

        var new_delete_btn = document.createElement("BUTTON");
        new_delete_btn.innerHTML = "X";
        
        var new_attr = document.createAttribute("onclick");
        new_attr.value = "delete_message(this)";
        new_delete_btn.setAttributeNode(new_attr);

        var new_span = document.createElement("SPAN");
        new_span.appendChild(new_delete_btn);

        new_message.appendChild(new_delete_btn);

        my_list.appendChild(new_message);
        message_input.value = "";
    }
}