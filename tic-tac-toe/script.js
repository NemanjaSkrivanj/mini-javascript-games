let eigrac = document.getElementById("igrac");
let etabla = document.getElementById("tabla");
let erezultat = document.getElementById("rezultat");

let naPotezu = "X";

let brojPoteza = 9;

let tabla = 
[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

let krajIgre = true;

function ispisTabele()
{
    etabla.innerHTML = "";

    for(let i = 0; i<tabla.length; i++)
    {
        for(let j = 0; j< tabla[i].length; j++)
        {
            etabla.innerHTML += `
                <div class="polje" onclick="potez(${i}, ${j})"> ${tabla[i][j]}  </div>
            `
        }
    }
}

function Provera()
{
    if     (tabla[0][0] != "" && tabla[0][0] == tabla[0][1] && tabla[0][0] == tabla[0][2])
        return true;
    else if(tabla[1][0] != "" && tabla[1][0] == tabla[1][1] && tabla[1][0] == tabla[1][2])
        return true;
    else if(tabla[2][0] != "" && tabla[2][0] == tabla[2][1] && tabla[2][0] == tabla[2][2])
        return true;

    else if(tabla[0][0] != "" && tabla[0][0] == tabla[1][0] && tabla[0][0] == tabla[2][0])
        return true;
    else if(tabla[0][1] != "" && tabla[0][1] == tabla[1][1] && tabla[0][1] == tabla[2][1])
        return true;
    else if(tabla[0][2] != "" && tabla[0][2] == tabla[1][2] && tabla[0][2] == tabla[2][2])
        return true;

    else if(tabla[0][0] != "" && tabla[0][0] == tabla[1][1] && tabla[0][0] == tabla[2][2])
        return true;
    else if(tabla[0][2] != "" && tabla[0][2] == tabla[1][1] && tabla[0][2] == tabla[2][0])
        return true;

    else
    
        return false;
}

ispisTabele();

function potez(i, j)
{
    if(tabla[i][j] == "" && krajIgre)
    {
        tabla[i][j] = naPotezu;

        ispisTabele();

        if(Provera())
        {
            erezultat.innerHTML= `Pobednik je: ${tabla[i][j]}`;
            krajIgre = false;
        }

        if (naPotezu == "X")
        {
            naPotezu = "O"
        }
        else 
        {
            naPotezu = "X";
        }

    }   

    eigrac.innerText = naPotezu;
}