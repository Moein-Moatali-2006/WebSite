var main = document.getElementById("main");

function show_items(){
    // form
    main.style.width = "30%";
    main.style.backgroundColor = "white";
    main.style.marginTop = "10px";
    main.style.borderRadius = "25px";
    main.style.padding = "10px";
    // item 1
    var title = document.createElement("P");
    title.innerText = "ثبت نام";
    title.style.direction = "rtl";
    main.appendChild(title);
    // item 2
    var title = document.createElement("P");
    title.innerText = "تاریک";
    main.appendChild(title);

    var dark = document.createElement("INPUT");
    dark.type = "checkbox";
    dark.style.display = "inline";
    main.appendChild(dark);

    dark.addEventListener("change", function () {
    if (dark.checked) {
        main.style.backgroundColor = "lightgray";
    } else {
        main.style.backgroundColor = "white";
    }});
    // line
    var line = document.createElement("HR");
    main.appendChild(line);
    // item 3
    var name = document.createElement("H2");
    name.innerText = "نام";
    name.style.direction = "rtl";
    main.appendChild(name);

    var input_name = document.createElement("INPUT");
    input_name.placeholder = "Enter your name";
    input_name.style.width = "100%";
    main.appendChild(input_name);

    // item 4
    var email = document.createElement("H2");
    email.innerText = "ایمیل";
    email.style.direction = "rtl";
    main.appendChild(email);

    var input_email = document.createElement("INPUT");
    input_email.type = "email";
    input_email.placeholder = "Enter your email";
    input_email.style.width = "100%";
    main.appendChild(input_email);

    //item 4
    var text = document.createElement("P");
    text.innerText = "ایمیل شما به کاربران نمایش داده نمی شود";
    text.style.direction = "rtl";
    main.appendChild(text);
    //item 5
    var pass = document.createElement("H2");
    pass.innerText = "کلمه عبور";
    pass.style.direction = "rtl";
    main.appendChild(pass);

    var input_pass = document.createElement("INPUT");
    input_pass.type = "password";
    input_pass.placeholder = "Password";
    input_pass.style.width = "100%";
    main.appendChild(input_pass);

    //item 6
    var radio_single = document.createElement("INPUT");
    radio_single.type = "radio";
    radio_single.name = "status";
    radio_single.id = "single";
    

    var label_single = document.createElement("LABEL");
    label_single.innerText = "مجرد";
    label_single.setAttribute("for", "single");
    label_single.style.marginLeft = "10px";

    var radio_married = document.createElement("INPUT");
    radio_married.type = "radio";
    radio_married.name = "status";
    radio_married.id = "married";

    var label_married = document.createElement("LABEL");
    label_married.innerText = "متاهل";
    label_married.setAttribute("for", "married");
    label_married.style.marginLeft = "10px";

    main.appendChild(radio_single);
    main.appendChild(label_single);
    main.appendChild(radio_married);
    main.appendChild(label_married);

    radio_single.addEventListener("change", function () {
        if (this.checked) {
            console.log("وضعیت: مجرد");
        }
    });

    radio_married.addEventListener("change", function () {
        if (this.checked) {
            console.log("وضعیت: متأهل");

            var husband = document.createElement("H2");
            husband.innerText = "نام همسر";
            husband.style.direction = "rtl";
            main.appendChild(husband);

            var input_husband = document.createElement("INPUT");
            input_husband.placeholder = "Enter your husband's name";
            input_husband.style.width = "100%";
            main.appendChild(input_husband);
        }

        var child = document.createElement("P");
        child.innerText = "دارای فرزند";
        child.style.direction = "rtl";
        main.appendChild(child);

        var have_child = document.createElement("INPUT");
        have_child.type = "checkbox";
        
        main.appendChild(have_child);

        have_child.addEventListener("change", function () {
        if (have_child.checked) {
            var btn_add = document.createElement("BUTTON");
            var btn_remove = document.createElement("BUTTON");
            btn_add.innerText = "+";
            btn_add.setAttribute("onclick", "add_child()");
            btn_remove.innerText = "-";
            btn_remove.setAttribute("onclick", "remove_child()");

            btn_add.style.backgroundColor = "green";
            btn_add.style.margin = "5px";
            btn_add.style.borderStyle = "none";

            btn_remove.style.backgroundColor = "red";
            btn_remove.style.margin = "5px";
            btn_remove.style.borderStyle = "none";

            main.appendChild(btn_add);
            main.appendChild(btn_remove);

        } else {
            pass;
        }});

    });
    var btn_submit = document.createElement("BUTTON");
    btn_submit.innerText = "ثبت";
    btn_submit.style.backgroundColor = "blue";
    btn_submit.style.display = "flex";
    btn_submit.style.width = "50px";
    btn_submit.style.color = "white";
    btn_submit.style.fontSize = "20px";

    btn_submit.style.alignItems = "end";
    main.appendChild(btn_submit);

    main.style.direction = "rtl";
} 

function add_child(){
    var new_child = document.createElement("INPUT");
    new_child.type = "text";
    new_child.placeholder = "Children name";
    new_child.style.margin = "3px";
    new_child.style.width = "100%";
    new_child.setAttribute("class", "children");
    main.appendChild(new_child);
}

function remove_child(){
    var children = document.getElementsByClassName("children");

    if (children.length > 0) {
        children[children.length - 1].remove();
    }
}


