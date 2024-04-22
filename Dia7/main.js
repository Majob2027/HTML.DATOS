function fetchSuperHero (){
    let xhr = new XMLHttpRequest();
    let heroID= document.getElementById ('heroId').value;
    console.log (heroID);
    let apiKey ="487f7b22f68312d2c1bbc93b1aea445b";
    let url = `https://superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open ('GET' ,url,true );
    xhr.onreadystatechange=function(){
        if (this.readyState === 4 && this.status === 20){
            let response = JSON.parse (this.responseText);
            console.log(response);
            displayHero(response);
        }else if(this.readystate==4){
            console.log ('Error:' , this.statusText)

            } 
    };
    CharacterData.send ();

}

function displayHero (data){
    let heroInfo = document.getElementById ('superHeroInfo')
    if (data.response ==="error"){
        heroInfo.innerHTML=`<p> Error:$ {data.error}</p>
    }
}


