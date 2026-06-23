sparks.reverse().forEach(spark => {

sparkBox.innerHTML += `

<div class="spark-card">

<div class="spark-video">
<video src="${spark.video}" autoplay muted loop></video>
</div>

<h3>@${spark.username}</h3>

<p>${spark.description}</p>

<div class="actions">

<button onclick="likeSpark(${spark.id})">
❤️ ${spark.likes}
</button>

</div>

</div>

`;

});