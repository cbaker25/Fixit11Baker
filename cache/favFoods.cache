let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

btnNextForm.onclick=function(){
  ChangeForm(dessertVoting)
}


favFoods.onshow=function(){
    listFood.clear()
    for (i = 0; i <= goodFoods.length - 1; i++) 
        listFood.addItem(goodFoods[i])
}

listFood.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
    return
    
  lblOutput.value = ("The choice is " + goodFoods[choice] + ".")
}
