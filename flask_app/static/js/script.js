


// https://api.github.com/users/ - base url then..
// attach a github user name to the end 
// ex. /users/username (adion81)

async function github_api_call(element){
    let response = await fetch('https://api.github.com/users/DaliusBeckjr')
    let data = await response.json()
    console.log(data) //  user data 
    console.log('name: ' + data.name) // user name
    console.log('pic: ' + data.avatar_url) // user profile picture
    console.log('followers: ' + data.followers) // shows users followers on github
    //bonus
    console.log('login: ' + data.login) // show user login for the user

    gitCard.innerHTML = `
        <br />
        <img src="${data.avatar_url}" alt="picture of ${data.name}" 
        class="w-50 p-3 rounded-circle">
        <h2> Hello ${data.name}!</h2>
        <h2> you have ${data.followers} followers on Github</h2>
    `
}


