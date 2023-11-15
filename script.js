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
    bubbleSort(array);
    showBars();
}

function bubbleSort(array){
    const swaps = [];
    for (let i = 0; i < array.length; i++)
    {
        var swapped = false;
        for (let j = 0; j < array.length - i - 1; j++)
        {
            if (array[j + 1] < array[j])
            {
                swapped = true;
                swaps.push([j + 1, j]);
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
            }
        }
        if (!swapped) break;
    }
}

function showBars(){
    container.innerHTML = "";
    for (let i = 0; i < n; i++)
    {
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}