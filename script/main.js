const landingPage = document.querySelector('.landing-page')
const visitorHomePage = document.querySelector('.visitor-home-page')


let selectArtistMenu = document.querySelector('#selectArtist')

selectArtistMenu.addEventListener('click', (event) => {
    event.stopPropagation()
    event.preventDefault()
})

let hashHandler = _ => {

    let hash = location.hash

    landingPage.style.display = 'none'
    visitorHomePage.style.display = 'none'

   if(hash == ''){

    landingPage.style.display = 'block'

   }else {
    if(hash.includes('#artists')){

    } else if(hash.includes('#visitors')){
        visitorHomePage.style.display = 'block'

    }
   }
}

window.addEventListener('load', hashHandler)
window.addEventListener('hashchange', hashHandler)