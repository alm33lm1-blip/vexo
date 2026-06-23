function addXP(amount){


let user = JSON.parse(

localStorage.getItem("vexo_current")

);



if(!user){

return;

}




user.xp += amount;




while(user.xp >= user.level * 100){


user.xp -= user.level * 100;


user.level++;


alert("Level Up!");


}





localStorage.setItem(

"vexo_current",

JSON.stringify(user)

);





let users = JSON.parse(

localStorage.getItem("vexo_users")

) || [];




let index = users.findIndex(

u => u.id === user.id

);



if(index !== -1){


users[index] = user;


localStorage.setItem(

"vexo_users",

JSON.stringify(users)

);


}



}