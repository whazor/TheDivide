module TD {
  export function aboveLine(line: TD.Line, thing: TD.Position): boolean {
    // Do Sander things

    return Math.random() > 0.5;
  }

  export function randomPosition(width:number, height:number): TD.Position {
    var pos = new TD.Position();
    pos.x = Math.floor(Math.random() * (width+1));
    pos.y = Math.floor(Math.random() * (height+1));
    return pos;
  }

  export function randomLine(width:number, height:number): TD.Line {
    var pos = randomPosition(width, height);

    var angle = Math.random() * 2*Math.PI;

    var pos2 = new TD.Position();
    pos2.x = 1337;
    pos2.y = 1337;

    var line = new TD.Line();
    line.point1 = pos;
    line.point2 = pos2;
    return line;
  }

  export function createArmy(n: number, line: TD.Line): Array<Position> {
    var things: Array<Position> = [];

    // Do Sander things
    var points_above = [];
    var points_below = [];

    while (points_above.length < n/2 || points_below.length < n/2) {
      var pos = randomPosition(TD.width, TD.height);

      if (aboveLine(line, pos)) {
        if (points_above.length < n/2) {
          points_above.push(pos);
        }
      } else {
        if (points_below.length < n/2) {
          points_below.push(pos);
        }
      }
    }

    return points_above.concat(points_below);
  }

  // def OBSFUCATEPOINTS(n):
  // # Swaps n points

  export function findCut(army: Array<Position&BoundingBox>): TD.Line {
    return null;
  }
}
