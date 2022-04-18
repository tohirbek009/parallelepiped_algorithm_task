/*

    Open this code in any code edtior(VsCode, Webstorm, ...) and run calculateDistance() function
    with required values(ABC, X1Y1, X2Y2) like this -> example: ABC = [1, 1, 1], X1Y1 = [1, 1], X2Y2 = [1, 1];

 */

let calculateCordinates = function (ABC, X, Y){
    let A = ABC[0], B = ABC[1], C = ABC[2];
    let x, y, z
    if(X <= C && Y >= B + C && Y <= 2*B + C){
        x = C; y = Y; z = C - X;
    }else if(X >= C && X <= A + C && Y >= 2*B + C && Y <= 2*(B + C)){
        x = X; y = 2*B + C; z = Y - (2*B + C);
    }else if(X >= C + A && Y >= B + C && Y <= 2*B + C){
        x = A + C; y = Y; z = X - (A + C);
    }else if(X >= C && X <= A + C && Y >= B && Y <= B + C){
        x = X; y = B + C; z = B + C - Y;
    }else if(X >= C && X <= A + C && Y < B){
        x = X; y = 2*B + C - Y; z = C;
    }else{
        x = X; y = Y; z = 0;
    }

    return [x, y, z];
}

let calculateDistance = function (ABC, X1Y1, X2Y2){
    let X1 = X1Y1[0], Y1 = X1Y1[1], X2 = X2Y2[0], Y2 = X2Y2[1];
    let X1Y1Z1 = calculateCordinates(ABC, X1, Y1);
    let X2Y2Z2 = calculateCordinates(ABC, X2, Y2);

    let x1 = X1Y1Z1[0];
    let y1 = X1Y1Z1[1];
    let z1 = X1Y1Z1[2];

    let x2 = X2Y2Z2[0];
    let y2 = X2Y2Z2[1];
    let z2 = X2Y2Z2[2];

    let d = Math.pow((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2)), 0.5)

    return d;

}


// Check:  calculateDistance(ABC, X1Y1, X2Y2);  example: ABC = [2, 2, 2], X1Y1 = [3, 3], X2Y2 = [5, 5];
console.log(calculateDistance([2, 2, 2], [3, 3], [5, 5]));