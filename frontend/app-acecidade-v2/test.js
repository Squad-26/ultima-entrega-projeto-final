import fetch from "node-fetch";
fetch('https://api.github.com/users/jonasjesus42')
.then( async (res) => {
    const dadosApiGithub = await req.json()
    console.log(dadosApiGithub.name)
}) 