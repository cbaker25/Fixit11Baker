var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(choice){
    if (typeof(choice) == "object")   
      return                    
    else {  // the user picked something
          lblPrompt.value = ("The choice is " + drpDesserts.selection + ".")
    }
}

btnNext2.onclick=function(){
  ChangeForm(describeYou)
}
