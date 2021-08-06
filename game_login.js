function logon()
{
    var player1_name= document.getElementById("PL1").value;
    localStorage.setItem("player1_name", player1_name);

    var player2_name = document.getElementById("PL2").value;
    localStorage.setItem("player2_name",player2_name);

    window.location.replace("game_page.html");
}

