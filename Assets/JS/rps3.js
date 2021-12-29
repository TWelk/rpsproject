const area = document.getElementById("rps")
const hd = document.getElementById("header")
const hd2 = document.getElementById("header2")

let lvl

const lvls = ["Easy", "Medium", "Hard"]

const handleLvl = (e) => {
    lvl = e.target.id
    hd.innerHTML = ""
    hd2.innerHTML = "Please choose weapon..."
    area.innerHTML = ""
    game()
}

for (let i = 0; i < lvls.length; i++) {
    const button = document.createElement("button")
    button.id = lvls[i]
    button.innerHTML = lvls[i]
    button.addEventListener("click", handleLvl)
    area.appendChild(button)
}


function game() {
    //This might help with EASY NORMAL HARD modes
    const UCD = document.createElement("h1")
    const CCD = document.createElement("h1")
    const RD = document.createElement("h1")
    const RA = document.getElementById("results")
    const RA2 = document.getElementById("fr")
    const PA = document.getElementById("UserC")
    const PA2 = document.getElementById("PCC")
    RA.append(UCD, CCD)
    
    let choices
    let pic
    let pic2

    if (lvl == "Easy") {
        choices = ["Rock", "Paper", "Scissors"]
    } else if (lvl == "Medium") {
        choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    } else if (lvl == "Hard") {
        choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock", "Spiderman", "Batman", "Wizard", "Glock"]
    }

    let UC
    let CC
    let R

    const handleClick = (e) => {
        PA.innerHTML = ""
        PA2.innerHTML = ""
        UC = e.target.id
        UCD.innerHTML = "You chose " + UC

        if (UC == "Rock" ) {
            pic = "./Assets/Images/Rock.JPG"
        } else if (UC == "Paper") {
            pic = "./Assets/Images/Paper_LI.jpg"
        } else if (UC == "Scissors") {
            pic = "./Assets/Images/Scissors_LI.jpg"
        } else if (UC == "Lizard") {
            pic = "./Assets/Images/Lizard_LI.jpg"
        } else if (UC == "Spock") {
            pic = "./Assets/Images/Spock_LI.jpg"
        }
    
        function getPic() {
            var x = document.createElement("IMG");
            x.setAttribute("src", pic );
            PA.appendChild(x);
        }

        genCC()

        if (CC == "Rock" ) {
            pic2 = "./Assets/Images/Rock.JPG"
        } else if (CC == "Paper") {
            pic2 = "./Assets/Images/Paper_LI.jpg"
        } else if (CC == "Scissors") {
            pic2 = "./Assets/Images/Scissors_LI.jpg"
        } else if (CC == "Lizard") {
            pic2 = "./Assets/Images/Lizard_LI.jpg"
        } else if (CC == "Spock") {
            pic2 = "./Assets/Images/Spock_LI.jpg"
        }
    
        function getPic2() {
            var x = document.createElement("IMG");
            x.setAttribute("src", pic2 );
            PA2.appendChild(x);
        }

        getR()
        getPic()
        getPic2()
        RA2.append(RD)
    }

    const genCC = () => {
        const randC = choices[Math.floor(Math.random() * choices.length)]
        CC = randC
        CCD.innerHTML = "Computer chose " + CC
    }

    for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button")
        button.id = choices[i]
        button.innerHTML = choices[i]
        button.addEventListener("click", handleClick)
        area.appendChild(button)
    }

    const getR = () => {
        switch (UC.toLowerCase() + CC.toLowerCase()){
            case "scissorspaper":
            case "rockscissors":
            case "paperrock":
            case "spockrock":
            case "scissorslizard":
            case "rocklizard":
            case "paperspock":
            case "lizardspock":
            case "spockscissors":
            case "lizardpaper":
            case "spockwizard":
            case "wizardbatman":
            case "batmanspiderman":
            case "spidermanglock":
            case "glockrock":
            case "rockwizard":
            case "wizardpaper":
            case "spockspiderman":
            case "spidermanlizard":
            case "lizardbatman":
            case "batmanscissors":
            case "scissorswizard":
            case "wizardlizard":
            case "paperglock":
            case "glockbatman":
            case "batmanrock":
            case "lizardglock":
            case "glockspock": 
            case "rockspiderman":
            case "spidermanpaper":
            case "paperbatman":
            case "batmanspock":
            case "scissorsspiderman":
            case "spidermanwizard":
            case "wizardglock":
            case "glockscissors":
                RD.innerHTML = "You Win!!!"
                break
            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
            case "rockspock":
            case "lizardscissors":
            case "lizardrock":
            case "spockpaper":
            case "spocklizard":
            case "scissorsspock":
            case "paperlizard":
            case "wizardspock":
            case "batmanwizard":
            case "spidermanbatman":
            case "glockspiderman":
            case "rockglock":
            case "wizardrock":
            case "paperwizard":
            case "spidermanspock":
            case "lizardspiderman":
            case "batmanlizard":
            case "scissorsbatman":
            case "wizardscissors":
            case "lizardwizard":
            case "glockpaper":
            case "batmanglock":
            case "rockbatman":
            case "glocklizard":
            case "spockglock": 
            case "spidermanrock":
            case "paperspiderman":
            case "batmanpaper":
            case "spockbatman":
            case "spidermanscissors":
            case "wizardspiderman":
            case "glockwizard":
            case "scissorsglock":  
                RD.innerHTML = "You lose!"
                break
            case "lizardlizard":
            case "spockspock":
            case "spidermanspiderman":
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
            case "batmanbatman":
            case "wizardwizard":
            case "glockglock":
                RD.innerHTML = "Draw!!"
                break
        }
    }
}
