function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    var name_arrows = document.getElementById("name_img");
    var country_arrows = document.getElementById("country_img");
    table = document.getElementById("table");
    switching = true;
    
    dir = "asc"; 
    
    while (switching) {

      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        
        
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

            shouldSwitch= true;
            if(n == 0){
                name_arrows.src = "images/arrow_down.svg"                
            }
            else if (n == 1){                
                country_arrows.src = "images/arrow_down.svg"
            }
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            if(n == 0){
                name_arrows.src = "images/arrow_up.svg"                
            }
            else if (n == 1){                
                country_arrows.src = "images/arrow_up.svg"
            }
            break;
          }
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function openModal(n) {
    var table = document.getElementById("table");
    var username = document.getElementById("username");
    
    var row = table.rows[n + 1];    
    var name = row.cells[1].innerText.trim();
    
    console.log("Name:", name);
  
    var modal = document.getElementById("myModal");
  
    var span = document.getElementsByClassName("close")[0];

    username.textContent = name;
    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  