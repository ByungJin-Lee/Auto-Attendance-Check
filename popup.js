var colorControl = document.querySelector("#colorControl");
window.onload = function(){
    chrome.storage.sync.get(function(data){
        colorControl.value = data.userColor;         
        changeBackground();
    })    
}

//use chrome storage to save user config
colorControl.addEventListener("change",function(){          
    changeBackground();
    chrome.storage.sync.set({
        userColor:colorControl.value
    });    
});

function changeBackground(){
    chrome.tabs.executeScript({
        code: 'document.querySelector("body").style.background = "'+colorControl.value+'";'
    }); 
}