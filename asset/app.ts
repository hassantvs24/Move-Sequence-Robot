class Table {
    private rowsSelector: any
    private columnsSelector: any
    private instructions: any
    private xAxis: any
    private yAxis: any
    private directions: any
    private tableObj: any
    
    constructor (tableSelector, rowsSelector, columnsSelector, instructions, xAxis, yAxis, directions) {
        this.rowsSelector = rowsSelector
        this.columnsSelector = columnsSelector
        this.instructions = instructions
        this.xAxis = xAxis
        this.yAxis = yAxis
        this.directions = directions
        this.tableObj = document.querySelector(tableSelector)
      }

    //Table generator
	generate(): void {

        let tableHTML: string = ''
        const rowsNumber: number = parseInt(document.querySelector(this.rowsSelector).value)
        const columnsNumber: number = parseInt(document.querySelector(this.columnsSelector).value)
        
    
        for (let i: number = 0; i < rowsNumber; i++) {
          let tr: string = '<tr>'
          let td: string = ''
    
          for (let j = 0; j < columnsNumber; j++) {
            const cellPosition: string = j +','+ i
            const cellContent: string = j+'_'+i
    
              td = `<td id="cell${cellContent}">${cellPosition}</td>`;
          
            tr += td
          }
    
          tr += '</tr>'
          tableHTML += tr
        }
        
        this.tableObj.innerHTML = tableHTML
      }

    //Robot Location
	pointer(): void{

        //N = 0
        // E = 1
        // S = 2
        // W = 3
        // Initialize starting
        let x: number = parseInt(document.querySelector(this.xAxis).value)
        let y: number = parseInt(document.querySelector(this.yAxis).value)
        let dir: number = parseInt(document.querySelector(this.directions).value)
        let path: string = document.querySelector(this.instructions).value
        let dirClass:string
    
        // Sequence of the path the path
        for (let i:number = 0; i < path.length; i++)
        {

        // Find current move
        let move: string = path[i];

        if(move != 'R' && move != 'F' && move != 'L')
            this.tableObj.innerHTML = '<p>Invalid instractions</p>'
        

            // If move is left or
            // right, then change direction
            if (move == 'R')
                dir = (dir + 1) % 4
            else if (move == 'L')
                dir = (4 + dir - 1) % 4

                // If move is Forword, then
                // change x or y according to
                // current direction
                // if (move == 'F')
            else
            {
                if (dir == 0)
                    y--
                else if (dir == 1)
                    x++
                else if (dir == 2)
                    y++
                else
                    x--
            }
        }
    
        //Set Class for the direction 
        switch (dir) {
            case 0:
            dirClass = "addBgN"//North
            break
            case 1:
            dirClass = "addBgE"//East
            break
            case 2:
            dirClass = "addBgS"//South
            break
            case 3:
            dirClass = "addBgW"//West
        }
    
        //Check Out of the room
        if(x < 0 || y < 0)
            this.tableObj.innerHTML = '<p>Out of the room</p>'
        
    
        let cellID: string = `#cell${x}_${y}`
        document.querySelector(cellID).className = dirClass
    }
}


/**
 * Table Initialize
 * @param table
 * @param rows
 * @param columns
 * @param instructions
 * @param xaxis
 * @param yxsis
 * @param direction
 */
const table: any = new Table(
    '.table', 
    '.rows', 
    '.columns', 
    '.instructions',
    '.xaxis',
    '.yxsis',
    '.direction'
  )
  
  document.querySelector('.button').addEventListener('click', () => {
	table.generate()
	table.pointer()
  });