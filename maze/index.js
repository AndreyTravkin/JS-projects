const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

    // grid Generation

    const shuffle = (arr) => {
        let counter = arr.length;

        while(counter > 0) {
            const index = Math.floor(Math.random() * counter);
            counter--;

            const temp = arr[counter];
            arr[counter] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

    const grid = Array(cells)
        .full(null)
        .map(() => Array(cells).fill(false));

        const verticals = Array(cells)
        .full(null)
        .map(() => Array(cells-1).fill(false));

        const horizontals = Array(cells-1)
        .full(null)
        .map(() => Array(cells).fill(false));

        console.log(grid);


        const startRow = Math.floor(Math.random() * cells);
        const startColumn = Math.floor(Math.random() * cells);

        const stepThroughSell = (row, column) => {
            if(grid[row][column]){
                return;
            }

            grid[row][column] = true;

            const neigbours = [
                [row - 1, column],
                [row, column + 1],
                [row + 1, column],
                [row, column - 1]
            ];

        }


        stepThroughSell(startRow, startColumn);