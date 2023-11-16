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
    }, 500);
}

function bubbleSort(array){
    const moves = [];
    for (let i = 0; i < array.length; i++)
    {
        var swapped = false;
        let j = i;
        while (j > 0)
        {
            moves.push({
                indices: [j + 1, j],
                type:"comp"
            });
            if (array[j - 1] > array[j])
            {
                swapped = true;
                moves.push({
                indices: [j - 1, j],
                type:"swap"
                }); 
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
            }
            else break;
            j--;
        }
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