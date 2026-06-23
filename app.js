document.addEventListener(
"DOMContentLoaded",
function(){



if(!user){

return;

}



let name =
document.querySelector(".user-name");


if(name){

name.innerHTML =
user.name;


if(user.verified){

name.innerHTML +=
' <span class="verified">⬡V</span>';

}

}





let username =
document.querySelector(".username");


if(username){

username.innerHTML =
"@" + user.username;

}





let level =
document.querySelector(".level");


if(level){

level.innerHTML =
"LVL " + user.level;

}





let bio =
document.querySelector(".bio");


if(bio){

bio.innerHTML =
user.bio || "No Bio";

}





let clan =
document.querySelector(".clan");


if(clan){

clan.innerHTML =
"🏆 " + user.clan;

}





let stats =
document.querySelectorAll(".stats strong");



if(stats.length >= 3){

stats[0].innerHTML =
user.followers;


stats[1].innerHTML =
user.following;


stats[2].innerHTML =
user.sparks;


}



});