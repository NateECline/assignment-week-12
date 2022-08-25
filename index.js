var number = 0;
function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1), cell0 = row.insertCell(0), cell1 = row.insertCell(1), cell2 = row.insertCell(2), cell3 = row.insertCell(3), cell4 = row.insertCell(4);
  var input1 = document.getElementById("form_name").value, input2 = document.getElementById("form_lastname").value, input3 = document.getElementById("form_tag").value, input4 = document.getElementById("form_role").value;
  number++
  cell0.innerHTML = '<strong>'+number+'</strong>';
  cell1.innerHTML = input1;
  cell2.innerHTML = input2;
  cell3.innerHTML = input3;
  cell4.innerHTML = input4;
}

class Game{
  constructor(name){
      this.name = name
  }
}
class Menu{
  constructor(){
      this.games = []
      this.selectedGames = null
  }
  start(){
      let selection = this.showMainMenuOptions()
      while(selection!=0){
          switch(selection){
              case `1`:
              this.createGame()
              break
              case `2`:
              this.deleteGame()
              break
              case `3`:
              this.displayGame()
              break
              default:
              selection = 0
          }
          selection=this.showMainMenuOptions()
      }
   alert(`Goobye Bich`)
  }
  showMainMenuOptions(){
      return prompt(`
      0) Exit
      1) Create Game
      2) Delete Game
      3) Display Games
      `)
  }
  displayGame(){
      let gameString = ``
      for(let i=0;i<this.games.length;i++){
          gameString+=i+`) `+this.games[i].name+`\n`
      }
      alert(gameString)
  }
  createGame(){
      let name = prompt(`Enter thy game`)
      this.games.push(new Game(name))
  }
  deleteGame(){
      let index = prompt(`what will be removed from existence?`)
      if(index>=0&&index<this.games.length){
          this.games.splice(index,1)
      }
  }
}
let menu = new Menu()
menu.start()