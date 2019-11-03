
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
    switch(s) {
        case "Login":
            ChangeForm(loginCU)
            break
        case "Fav Foods":
            ChangeForm(favFoods)
            break
        case "Dessert Voting":
            ChangeForm(dessertVoting)
            break
        case "Describing Me":
            ChangeForm(describeYou)
            break
        case "Fav Exercises":
            ChangeForm(favExercises)
            break
    }
}


