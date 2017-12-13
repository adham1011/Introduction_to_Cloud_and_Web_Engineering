

/*
* global Varibales to Reduce Some Lines of code
*/
var maxboxesnum = 12;
var lastcolor=0;
var mainsection = document.getElementById("boxesSection");

/*
*   function to add event and and run this event after click
*/
function AddEvent(objevent,i){
  if(i==maxboxesnum-1){
    objevent.addEventListener("click",function plusEvent(){
      objevent.classList.remove("plus");
      var newbox = AppendBox();
       maxboxesnum++;
       objevent.removeEventListener("click",plusEvent);// deleting the old listener
       AddEvent(objevent,maxboxesnum-2); // Cahnging Event for the old last box
       AddEvent(newbox,maxboxesnum-1); // creating event for the new lastbox
       newbox.className += " plus";
    });
  }else {
    objevent.addEventListener("click",function(){
      if(objevent.classList.contains("favorite"))
        objevent.classList.remove("favorite");
      else
        objevent.className += " favorite";
    });
  }
};

/*
* Function to create an article with class box and adding it
*to the childs of the child list of mainsection
*/
function AppendBox(){
  var colors = ["lightGreen","oilGreen","darkGreen","lightPurple","purple","lightRed","lighOrange"];
  var mainsection = document.getElementById("boxesSection");
  var articlebox = document.createElement('article');
  articlebox.className="box "+colors[lastcolor++];
  if(lastcolor==7)
    lastcolor=0;
    mainsection.appendChild(articlebox);
    return articlebox;
}
/*
* main function that Run after the dom Loaded and manage
*  the first boxex lists
*/
function BoxesManager(){
  var mainsection = document.getElementById("boxesSection");
  for(var i=0;i<12;i++){
    AddEvent(AppendBox(), i);
  }
  mainsection.lastChild.className+=" plus"
};
