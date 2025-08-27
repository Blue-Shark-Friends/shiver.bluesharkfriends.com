function showHideMenu()
{
    var menu = document.getElementsByClassName("menu")[0];
    if (menu.style.visibility === "visible")
    {
        menu.style.visibility = "hidden";
        document.getElementsByClassName("content")[0].style.paddingLeft = "0";
    }
    else
    {
        menu.style.visibility = "visible";
        document.getElementsByClassName("content")[0].style.paddingLeft = "10em";
    }
}