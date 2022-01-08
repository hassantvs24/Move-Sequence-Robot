class Table {
	constructor (tableSelector, rowsSelector, columnsSelector) {
	  this.rowsSelector = rowsSelector
	  this.columnsSelector = columnsSelector
	  this.tableObj = document.querySelector(tableSelector)
	}
  
	generate = () => {
	  let tableHTML = ''
	  const rowsNumber = parseInt(document.querySelector(this.rowsSelector).value) + 1
	  const columnsNumber = parseInt(document.querySelector(this.columnsSelector).value) + 1
	  
  
	  for (let i = 0; i < rowsNumber; i++) {
		let tr = '<tr>'
		let td = ''
  
		for (let j = 0; j < columnsNumber; j++) {
		  const cellPosition = i +','+ j
		  const cellContent = i+'_'+j
  
			td = `<td id="cell${cellContent}">${cellPosition}</td>`;
		
		  tr += td
		}
  
		tr += '</tr>'
		tableHTML += tr
	  }
	  
	  this.tableObj.innerHTML = tableHTML
	}

	pointer = () =>{
		let position = [0,0]
		let cellID = `#cell${position[0]}_${position[1]}`
		//document.querySelector(cellID).style.background = "red"
	}
  }
  
  const table = new Table('.table', '.rows', '.columns')
  
  document.querySelector('.button').addEventListener('click', () => {
	table.generate()
	table.pointer()
  });
  
  const inputs = document.querySelectorAll('input');
  


    function getPosition(path = 'RFLFFLRF')
    {
 
		// N = 0
        // E = 1
        // S = 2
        // W = 3
        // Initialize starting
        // point for robot as
        // (0, 0) and starting
        // direction as N North
        let x = 0, y = 0;
        let dir = 1;
 
        // Sequence of the path the path
        for (let i = 0; i < path.length; i++)
        {
 
            // Find current move
            let move = path[i];
 
            // If move is left or
            // right, then change direction
            if (move == 'R')
                dir = (dir + 1) % 4;
            else if (move == 'L')
                dir = (4 + dir - 1) % 4;
 
            // If move is Forword, then
            // change x or y according to
            // current direction
            // if (move == 'F')
            else
            {
                if (dir == 0)
                    y++;
                else if (dir == 1)
                    x++;
                else if (dir == 2)
                    y--;
                else // dir == 3
                    x--;
            }
        }
 
        return `${x},${y}#${dir}`;
    }
     
    let path = "RFLFFLRF";
    document.write(getPosition(path));