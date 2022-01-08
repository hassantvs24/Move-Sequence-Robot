
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
        let dir = 0;
 
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