chrome.runtime.onMessage.addListener(function(request){
    var chatList = document.querySelector(".ts-message-list");
    var click = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });

    if(chatList == null){
        alert("Cannot access Messagebox");
        return;
    } 

    console.log("\nCognize Messagebox\n");

    var work = function(){
        var listItem = chatList.querySelectorAll(".ts-message-list-item");
        var lastItem = listItem[listItem.length-1];
        var text = lastItem.querySelector(".message-body-content div").textContent;
        
        chrome.storage.sync.get(function(result){
            if(text.indexOf(result.enterWord) >= 0){            
                if(!result.enter && !result.stop){
                    var input = document.querySelector(".cke_enable_context_menu div");
                    var clickInput = document.querySelector("#send-message-button");
                    input.textContent = result.name + " " + result.enterWord;
                    clickInput.dispatchEvent(click);
                    chrome.storage.sync.set({enter:true});
                }                        
            }
    
            if(text.indexOf(result.exitWord) >= 0){            
                if(!result.exit && !result.stop){               
                    var input = document.querySelector(".cke_enable_context_menu div");
                    var clickInput = document.querySelector("#send-message-button");                         
                    input.textContent = result.name + " " + result.exitWord;
                    clickInput.dispatchEvent(click);
                    chrome.storage.sync.set({exit:true});
                }                        
            }
        });        
    }

    if(request.Run){
        console.log("!Start Program");
        alert("Cognize Messagebox, Start Program");
        chrome.storage.sync.set({running: true});
        chatList.addEventListener("DOMSubtreeModified", work);
    }
    else{
        chatList.removeEventListener("scroll",work);
        console.log("Shut Down Program");  
        alert("Shut Down Program");      
    }
});
