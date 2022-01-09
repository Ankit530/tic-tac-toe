var val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0, val6 = 0, val7 = 0, val8 = 0, val9 = 0;
var user = 0;
var set = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]];
var player1 = [];
var player2 = [];
var win = 0;
function op(val)
{
    if(win == 0){
    if(val == 1)
    {
        if(val1 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box1").innerHTML = "X";
                document.getElementById("box1").style = "color : black";
                user = 1;
                val1 = 1;
                player1.push(1);
                check1();
            }
            else
            {
                document.getElementById("box1").innerHTML = "O";              
                document.getElementById("box1").style = "color : black";
                user = 0;
                val1 = 2;
                player2.push(1);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 2)
    {
        if(val2 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box2").innerHTML = "X";                
                document.getElementById("box2").style = "color : black";
                user = 1;
                val2 = 1;
                player1.push(2);
                check1();
            }
            else
            {
                document.getElementById("box2").innerHTML = "O";
                document.getElementById("box2").style = "color : black";
                user = 0;
                val2 = 2;
                player2.push(2);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 3)
    {
        if(val3 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box3").innerHTML = "X";
                document.getElementById("box3").style = "color : black";
                user = 1;
                val3 = 1;
                player1.push(3);
                check1();
            }
            else
            {
                document.getElementById("box3").innerHTML = "O";
                document.getElementById("box3").style = "color : black";
                user = 0;
                val3 = 2;
                player2.push(3);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 4)
    {
        if(val4 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box4").innerHTML = "X";
                document.getElementById("box4").style = "color : black";
                user = 1;
                val4 = 1;
                player1.push(4);
                check1();
            }
            else
            {
                document.getElementById("box4").innerHTML = "O";
                document.getElementById("box4").style = "color : black";
                user = 0;
                val4 = 2;
                player2.push(4);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 5)
    {
        if(val5 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box5").innerHTML = "X";
                document.getElementById("box5").style = "color : black";
                user = 1;
                val5 = 1;
                player1.push(5);
                check1();
            }
            else
            {
                document.getElementById("box5").innerHTML = "O";
                document.getElementById("box5").style = "color : black";
                user = 0;
                val5 = 2;
                player2.push(5);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 6)
    {
        if(val6 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box6").innerHTML = "X";
                document.getElementById("box6").style = "color : black";
                user = 1;
                val6 = 1;
                player1.push(6);
                check1();
            }
            else
            {
                document.getElementById("box6").innerHTML = "O";
                document.getElementById("box6").style = "color : black";
                user = 0;
                val6 = 2;
                player2.push(6);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 7)
    {
        if(val7 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box7").innerHTML = "X";
                document.getElementById("box7").style = "color : black";
                user = 1;
                val7 = 1;
                player1.push(7);
                check1();
            }
            else
            {
                document.getElementById("box7").innerHTML = "O";
                document.getElementById("box7").style = "color : black";
                user = 0;
                val7 = 2;
                player2.push(7);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 8)
    {
        if(val8 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box8").innerHTML = "X";
                document.getElementById("box8").style = "color : black";
                user = 1;
                val8 = 1;
                player1.push(8);
                check1();
            }
            else
            {
                document.getElementById("box8").innerHTML = "O";
                document.getElementById("box8").style = "color : black";
                user = 0;
                val8 = 2;
                player2.push(8);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    else if(val == 9)
    {
        if(val9 == 0)
        {
            if(user == 0)
            {
                document.getElementById("box9").innerHTML = "X";
                document.getElementById("box9").style = "color : black";
                user = 1;
                val9 = 1;
                player1.push(9);
                check1();
            }
            else
            {
                document.getElementById("box9").innerHTML = "O";
                document.getElementById("box9").style = "color : black";
                user = 0;
                val9 = 1;
                player2.push(9);
                check2();
            }
        }
        else
        {
            alert(" click on the empty space !!!")
        }
    }
    }
    else if(win == 1)
       alert("player 1 wins")
    else if(win == 2)
       alert("player 2 wins")
    if(user == 0)
    {
        document.getElementById("pl1").style.color = "red";
        document.getElementById("pl2").style.color = "#cccccc";
    }
    else
    {
        document.getElementById("pl1").style.color = "#cccccc";
        document.getElementById("pl2").style.color = "red";
    }
}
function check1()
{
    for(let i=0; i<set.length; ++i)
    {
        var flag = 1;
        for(let j=0; j<3; ++j)
        {
            var flag1 = 0;
            for(let k=0; k<player1.length; ++k)
            {
                if(set[i][j] == player1[k])
                {
                    flag1 = 1;
                    break;
                }
            }
            if(flag1 == 0)
            {
                flag = 0;
                break;
            }
        }
        if(flag == 1)
        {
            alert("player 1 wins")
            win = 1;
            break;
        }
    }
}
function check2()
{
    for(let i=0; i<set.length; ++i)
    {
        var flag = 1;
        for(let j=0; j<3; ++j)
        {
            var flag1 = 0;
            for(let k=0; k<player2.length; ++k)
            {
                if(set[i][j] == player2[k])
                {
                    flag1 = 1;
                    break;
                }
            }
            if(flag1 == 0)
            {
                flag = 0;
                break;
            }
        }
        if(flag == 1)
        {
            alert("player 2 wins")
            win = 2;
            break;
        }
    }
}
function refresh()
{
    window.location.reload();
}