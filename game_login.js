// Create function addUser()
 {
  // Get value of user by id player1_name_input and player2_name_input

  // Store these values locally

  //Assign "game_page.html" to window.location
  function addUser() {
    player1_name =document.getElementById("player1_name_input").value;
    player2_name =document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location ="index.html";
  }
  
  function send() {
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    actual_answer = paraseInt(number1) * parseInt(number2);
  }
}

