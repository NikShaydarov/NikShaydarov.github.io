
function changePopupHiddenState(isHidden){
    var popup_background = document.getElementById("popup_background");
    popup_background.hidden = isHidden;
}

function startPopup(e){
    e.preventDefault();
    changePopupHiddenState(false);
    
    window.history.forward();
}

function closePopup(e){
    e.preventDefault();
    changePopupHiddenState(true);

    window.history.back();
}

function nameInputSaving(){
    var nameInput = document.getElementById("nameInput");
    localStorage['nameinputdata'] = nameInput.value;
}

function emailInputSaving(){
    var emailInput = document.getElementById("emailInput");
    localStorage['emailinputdata'] = emailInput.value;
}

function textInputSaving(){
    var textInput = document.getElementById("textInput");
    localStorage['textinputdata'] = textInput.value;
}

function personalDataCheckboxSaving(){
    var personalDataCheckbox = document.getElementById("personalDataCheckbox");
    localStorage['personaldatacheckboxdata'] = personalDataCheckbox.checked;
}


function main(){
    
    window.history.pushState({page:"nopopup"}, "", "nopopup");
    window.history.pushState({page:"popup"}, "", "popup");
    window.history.back();

    $(function(){
        $("#justform").submit(function(e){
            e.preventDefault();
            var href = $(this).attr("action");
            $.ajax({
                type: "POST",
                dataType: "json",
                url: href,
                data: $(this).serialize(),
                success: function(response){
                    if(response.status == "success"){
                        alert("We received your submission, thank you!");
                    }else{
                        alert("An error occured: " + response.message);
                    }
                },
                error: function(jqXHR, errorString){
                    console.log(errorString)
                }
                
            });
        });
    });


    var justbutton = document.getElementById("justbutton");
    justbutton.onclick = startPopup;
    var closebutton = document.getElementById("closebutton");
    closebutton.onclick = closePopup;

    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var textInput = document.getElementById("textInput");
    var personalDataCheckbox = document.getElementById("personalDataCheckbox");

    if (localStorage['nameinputdata']){
        nameInput.value = localStorage['nameinputdata'];
    }

    if (localStorage['emailinputdata']){
        emailInput.value = localStorage['emailinputdata'];
    }

    if (localStorage['textinputdata']){
        textInput.value = localStorage['textinputdata'];
    }

    if (localStorage['personaldatacheckboxdata']){
        personalDataCheckbox.checked = localStorage['personaldatacheckboxdata'] == 'true';
    }

    nameInput.onkeyup = nameInputSaving;
    emailInput.onkeyup = emailInputSaving;
    textInput.onkeyup = textInputSaving;
    personalDataCheckbox.onclick = personalDataCheckboxSaving;
}

function changeState(){
    console.log("change state");
    if (window.history.state.page == "nopopup"){
        changePopupHiddenState(true);
    }
    if (window.history.state.page == "popup"){
        changePopupHiddenState(false);
    }
}

document.addEventListener("DOMContentLoaded", main);
window.onpopstate = changeState;
