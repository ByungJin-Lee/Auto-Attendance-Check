var colorControl = document.querySelector("#colorControl");

colorControl.addEventListener("change",function(){  
    chrome.tabs.executeScript({
        code: 'document.querySelector("body")'
    }, function(result){
        result[0].style.background = "#000000";
    });      
});


/* function hello(){    
    new Twitch.Player("main-embed", {
        channel: "erenjjing",
        width: 400,
        height: 180
    });
} */