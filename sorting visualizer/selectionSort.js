const n = 10;
const array = []
init();
function init()
{
    for (let i = 0; i < n; i++)
    {
        array[i] = Math.random();
    }
    showBars();
}

for (let i = 0; i < n; i++)
{
    array[i] = Math.random();
}

function play()
{
    const copy = [...array];
    const moves = bubbleSort(copy);
    animate (moves);
}

function animate (moves)
{
    if (moves.length == 0) 
    {
        showBars();
        return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;

    if (move.type=="swap")
    {
        [array[i], array[j]] = [array[j], array[i]];
    }

    showBars(move);
    setTimeout(function(){
        animate(moves);
    }, 300);
}

function bubbleSort(array){
    const moves = [];
    for (let i = 0; i < array.length; i++)
    {
        var swapped = false;
        for (let j = i + 1; j < array.length; j++)
        {
            moves.push({
                indices: [i, j],
                type:"comp"
            });
            if (array[i] < array[j])
            {
                swapped = true;
                moves.push({
                    indices: [i, j],
                    type:"swap"
                }); 
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        if (!swapped) break;
    }
    return moves;
}

function showBars(move){
    container.innerHTML = "";
    for (let i = 0; i < n; i++)
    {
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.classList.add("bar");
        if (move && move.indices.includes(i))
        {
            bar.style.backgroundColor = move.type == "swap"? "red": "#AFD8F8";
        }
        container.appendChild(bar);
    }
}