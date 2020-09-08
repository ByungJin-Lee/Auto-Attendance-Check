var par = {
  active: true,
  currentWindow:true
}

var RunningBtn = document.querySelector("#Running");
var nameBox = document.querySelector("#nameBox");
var enter = document.querySelector(".enter");
var exit = document.querySelector(".exit");
var resetbtn = document.querySelector("#reset");

RunningBtn.addEventListener("click",function(){
  if(nameBox.value == ""){
    alert("이름을 입력하세요!");
    return;
  }
  RunningBtn.value = !RunningBtn.value;
  if(RunningBtn.value)
  {   
    
  }
  else
  {
    chrome.storage.sync.set({running:false, exit:false, enter:false});
  }
  chrome.tabs.query(par, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {Run: RunningBtn.value, name: nameBox.value});      
  });
  
  changeColor(RunningBtn);
});
resetbtn.addEventListener("click", function(){
  chrome.storage.sync.set({
    name: "",
    running: false,
    enter: false,
    exit:false
  });
  loadinfo();
});

window.addEventListener("load",function(){  
  loadinfo();
})

var loadinfo = function(){
  chrome.storage.sync.get(function(result){
    enter.textContent = enter.value = result.enter;
    changeColor(enter);
    exit.textContent = exit.value = result.exit;
    changeColor(exit);
    RunningBtn.value = result.running;
    changeColor(RunningBtn);
    nameBox.value = result.name;
  });
};

var changeColor = function(ele){
  if(ele.value){
    ele.style.backgroundColor = "#00ff00";
  }else{
    ele.style.backgroundColor = "#ff0000";
  }
};