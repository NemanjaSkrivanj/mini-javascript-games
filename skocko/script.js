class Simbol
{
    constructor(naziv)
    {
        this.naziv = naziv;
        this.provereno = false;
    }
}


const simboli = ['karo', 'pik', 'skocko', 'srce', 'tref', 'zvezda'];


let resenje = NasumicnaKombinacija();
console.log(resenje);

let odigrano = [];

let brPoteza = 1;
let brProvere = 1;

let krajIgre = false;

function ispisSimbola()
{  
    let el = document.getElementById('simboli');
    el.innerHTML = '';
    for(let i = 0; i < simboli.length; i++)
    {
    el.innerHTML += 
    `
    <div id='${simboli[i]}'onclick=Potez(this)>
     <img src='img/${simboli[i]}.png'/'>
      </div>
    `
    }
}



function ispisCiklusa()
{
    let el = document.getElementById('ciklusi');
    el.innerHTML = '';
    let brPolja = 1;
    let brProvera = 1;
    for(let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 4; j++) {
            el.innerHTML += 
            `
            <div class='polje' id='polje${brPolja}'>  </div>
            `
            brPolja++;
        }

        for (let j = 0; j < 4; j++) {
            document.getElementById('ciklusi').innerHTML += 
            `
            <div class='provera' id='provera${brProvera}'>  </div>
            `
            brProvera++;
        }
    }
}



function ispisPoljaResenja()
{
    let el = document.getElementById('resenje');
    el.innerHTML = '';
    let brResenja = 1;
    for(let i = 0; i < 4; i++)
    {
        el.innerHTML += 
        `
        <div id='resenje${brResenja}'> </div>
        `
        brResenja++;
    }
}

function Start()
{
    ispisSimbola();
    ispisCiklusa();
    ispisPoljaResenja();
}

Start();

function NasumicnaKombinacija()
{
    let kom=[];

    for(let i = 0; i < 4; i++)
    {
        let broj = Math.ceil(Math.random() * 60);
    
        if(broj < 10) kom[i] = new Simbol('karo');
        else if(broj < 20) kom[i] = new Simbol('pik');
        else if(broj < 30) kom[i] = new Simbol('skocko');
        else if(broj < 40) kom[i] = new Simbol('srce');
        else if(broj < 50) kom[i] = new Simbol('tref');
        else               kom[i] = new Simbol('zvezda');
    }

    return kom;
}

function Potez(e)
{
    if(!krajIgre)
    {
        odigrano.push(new Simbol(e.id));
        let el = document.getElementById(`polje${brPoteza}`).innerHTML +=
        `
        <img src='img/${e.id}.png'/>
        `
        if( brPoteza % 4 == 0)
        {
            proveraKombinacije();
        }

        brPoteza++;
    }

}

function proveraKombinacije()
{
    let naMestu = 0;
    let postoje = 0;
    for(let i = 0; i < 4; i++)
    {
        if(resenje[i].naziv == odigrano[i].naziv)
        {
            resenje[i].provereno = true;
            odigrano[i].provereno = true;
            naMestu++;
        }
        else 
        {
            resenje[i].provereno = false;
        }
    }
        for(let i = 0; i < 4; i++)
        {
            if(resenje[i].provereno ==false)
            {
                for(let j = 0; j < 4; j++)
                {
                    if(resenje[i].naziv == odigrano[j].naziv && odigrano[j].provereno == false)
                    {
                        postoje++;
                        odigrano[j].provereno = true;
                        break;
                    }
                }
            }
        }

    odigrano = [];
   ProveraResenja(naMestu, postoje);

   if(naMestu == 4 || brPoteza == 24)
   {
        ispisResenja();
        krajIgre = true;
   }
}

function ProveraResenja(naMestu, postoje)
{
    for(let i = 0; i < naMestu; i++)
    {
        let el = document.getElementById(`provera${brProvere}`);
        el.style.backgroundColor = "red";
        brProvere++;
    }

    for(let i = 0; i < postoje; i++)
    {
        let el = document.getElementById(`provera${brProvere}`);
        el.style.backgroundColor = "yellow";
        brProvere++;
    }

    brProvere = brPoteza+1;
}

function ispisResenja()
{
    let brResenja = 1;
    for(let i = 0; i < resenje.length; i++)
    {
        document.getElementById(`resenje${brResenja}`).innerHTML +=
        `
        <img src='img/${resenje[i].naziv}.png'/>
        `
        brResenja++;
    }
}

function restart()
{

    resenje = NasumicnaKombinacija();
    

    odigrano = [];

    brPoteza = 1;
    brProvere = 1;

    krajIgre = false;
    Start();
}

