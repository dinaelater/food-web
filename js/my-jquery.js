$("button").click(function(){
    $("#w3s").attr("href", function(i, origValue){
      return origValue + "/jquery/"; 
    });
  }); 