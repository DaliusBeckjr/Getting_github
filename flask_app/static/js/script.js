


// https://api.github.com/users/ - base url then..
// attach a github user name to the end 
// ex. /users/username (adion81)

async function github_api_call(element){
    let response = await fetch('https://api.github.com/users/DaliusBeckjr')
    let data = await response.json()
    console.log(data) //  user data 
    console.log(data.name) // user name
    console.log(data.avatar_url) // user profile picture
    console.log(data.followers) // shows users followers on github

    gitCard.innerHTML = `
        <br />
        <img src="${data.avatar_url}" alt="picture of ${data.name}" 
        class="w-50 p-3 rounded-circle">
        <h2> Hello ${data.name}!</h2>
        <h2> you have ${data.followers} followers on Github</h2>


    `
}

// async function github_api_call() {
//     let response = await fetch('https://api.github.com/users/DaliusBeckjr')
//     let data = await response.json()
//     console.log(data) // all of the user data in the console
//     console.log(data.name)
//     console.log(data.avatar_url)

//     gitCard.innerHTML = `
//         <br />
//         <img src="${data.avatar_url}" alt="picture of ${data.name}" 
//         class="w-50 p-3 rounded-circle">
//         <h2> Hello ${data.name}!</h2>


//     `
// }

