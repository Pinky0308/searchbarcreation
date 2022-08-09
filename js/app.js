$(function(){
    let searchBtn=$('.searchIcon')
    searchBtn.click(function(){
        let searchBar=$('button')
        searchBar.show()
    })

    let cancelIcon=$('.cancel_icon')
    cancelIcon.click(function(){
        let searchBar=$('button')
        searchBar.hide()
    })
})