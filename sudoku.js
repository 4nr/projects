
//is there a simple way to populate a 4-dimensional array?
var sudoku = [[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]],[[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]];
var solved = 0;
var known = [];
while (solved<9){

    //engine to solve rows
    solved = 0;
    for(i=0; i<=6; i+=3){
        for(y=0; y<3; y++){
            for(x=i; x<i+3; x++){
                for(z=0; z<3; z++){//create real code in this z loop
                    // if(Array.length xyz == 1)
                    // push xyz onto Array known
                }
            }
            {
                //include this block in all 3 solve loops
                if (known.length == 9){
                    solved +=1;
                    return;
                }
                if (!known.length){
                    return;
                }
            }
            {
                for(x=i; x<i+3; x++){
                    for(z=0; z<3; z++){//create real code in this z loop
                        // if(Array.length xyz > 1)
                        // remove known from xyz
                    }
                }
            }
        }
    }
    //end of row engine

    //engine to solve columns
    solved = 0;
    for(i=0; i<3; i++){
        for(z=0; z<3; z++){
            for(x=i; x<=i+6; x+=3){
                for(y=0; y<3; y++){//create real code in this y loop
                    // if(Array.length xyz == 1)
                    // push xyz onto Array known
                }
            }
            {
                //include this block in all 3 solve loops
                if (known.length == 9){
                    solved +=1;
                    return;
                }
                if (!known.length){
                    return;
                }
            }
            {
                for(x=i; x<=i+6; x+=3){
                    for(y=0; y<3; y++){//create real code in this y loop
                        // if(Array.length xyz > 1)
                        // remove known from xyz
                    }
                }
            }
        }
    }
    //end of column engine

    //engine to solve blocks
    solved = 0;
    for(x=0; x<9; x++){
        for(y=0; y<3; y++){
            for(z=0; z<3; z++){//create real code in this z loop
                // if(Array.length xyz == 1)
                // push xyz onto Array known
            }
        }
        {
            //include this block in all 3 solve loops
            if (known.length == 9){
                solved +=1;
                return;
            }
            if (!known.length){
                return;
            }
        }
        {
            for(y=0; y<3; y++){
                for(z=0; z<3; z++){//create real code in this z loop
                    // if(Array.length xyz > 1)
                    // remove known from xyz
                }
            }
        }
    }
    //end of block engine

}
