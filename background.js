/* var background = {
  Word:"",
  Init:function(){

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      console.log(request);
      // if(request.fn in background){
      //   background[request.fn](request, sender, sendResponse);
      // }
    });

  },

  setWord:function(request, sender, sendResponse){
    this.Word = request.word;
  },

  getWord:function(){
    return this.Word;
  }
};

background.Init();
 */