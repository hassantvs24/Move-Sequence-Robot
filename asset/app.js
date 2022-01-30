var Table = /** @class */ (function () {
    function Table(tableSelector, rowsSelector, columnsSelector, instructions, xAxis, yAxis, directions) {
        this.rowsSelector = rowsSelector;
        this.columnsSelector = columnsSelector;
        this.instructions = instructions;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.directions = directions;
        this.tableObj = document.querySelector(tableSelector);
    }
    //Table generator
    Table.prototype.generate = function () {
        var tableHTML = '';
        var rowsNumber = parseInt(document.querySelector(this.rowsSelector).value);
        var columnsNumber = parseInt(document.querySelector(this.columnsSelector).value);
        for (var i = 0; i < rowsNumber; i++) {
            var tr = '<tr>';
            var td = '';
            for (var j = 0; j < columnsNumber; j++) {
                var cellPosition = j + ',' + i;
                var cellContent = j + '_' + i;
                td = "<td id=\"cell".concat(cellContent, "\">").concat(cellPosition, "</td>");
                tr += td;
            }
            tr += '</tr>';
            tableHTML += tr;
        }
        this.tableObj.innerHTML = tableHTML;
    };
    //Robot Location
    Table.prototype.pointer = function () {
        //N = 0
        // E = 1
        // S = 2
        // W = 3
        // Initialize starting
        var x = parseInt(document.querySelector(this.xAxis).value);
        var y = parseInt(document.querySelector(this.yAxis).value);
        var dir = parseInt(document.querySelector(this.directions).value);
        var path = document.querySelector(this.instructions).value;
        var dirClass;
        // Sequence of the path the path
        for (var i = 0; i < path.length; i++) {
            // Find current move
            var move = path[i];
            if (move != 'R' && move != 'F' && move != 'L')
                this.tableObj.innerHTML = '<p>Invalid instractions</p>';
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
            else {
                if (dir == 0)
                    y--;
                else if (dir == 1)
                    x++;
                else if (dir == 2)
                    y++;
                else
                    x--;
            }
        }
        //Set Class for the direction 
        switch (dir) {
            case 0:
                dirClass = "addBgN"; //North
                break;
            case 1:
                dirClass = "addBgE"; //East
                break;
            case 2:
                dirClass = "addBgS"; //South
                break;
            case 3:
                dirClass = "addBgW"; //West
        }
        //Check Out of the room
        if (x < 0 || y < 0)
            this.tableObj.innerHTML = '<p>Out of the room</p>';
        var cellID = "#cell".concat(x, "_").concat(y);
        document.querySelector(cellID).className = dirClass;
    };
    return Table;
}());
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
var table = new Table('.table', '.rows', '.columns', '.instructions', '.xaxis', '.yxsis', '.direction');
document.querySelector('.button').addEventListener('click', function () {
    table.generate();
    table.pointer();
});
