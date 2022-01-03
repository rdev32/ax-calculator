export class equations {

    /**
    Example to Formula1: x² + 7x + 6 = 0
     
    Example to Formula2: 3x² - 27 = 0
    @description The parameters vary according to the formula
    @param {number} a - For formula 1 -> 1, For formula 2 -> 3
    @param {number} b - For formula 1 -> 7, For formula 2 -> -27
    @param {number} c - For formula 1 -> 6, Do not place anything
    **/

    static secondDegree(a, b, c) {
        if(typeof(c) == 'undefined') {
            var internal = (b * -1) / a;
            if(!Number.isInteger(internal)) {
                var top = b * - 1
                var bottom = a

                //Si la raíz cuadrada es un numero entero
                if(Number.isInteger(Math.sqrt(b * - 1))) {
                    top = Math.sqrt(b * - 1)
                }

                //Si la raíz cuadrada es un numero entero
                if(Number.isInteger(Math.sqrt(a))) {
                    bottom = Math.sqrt(a)
                }

                internal = String(top) + "/" + bottom
                var x = `±√${internal}`
            }

            else {
                var x = Math.sqrt(internal);
            }

            return x;
        }

        else {
            var internal = (b*b) - (4 * a * c);
            var interna2 = Math.sqrt(internal);
            console.log(interna2)

            if(!Number.isInteger(interna2)) {
                interna2 = "√" + internal;
            }
            
            if(internal < 0) {
                interna2 = `\U+1d4be√${String(-1 * internal)}`
            }
            
            if(typeof(interna2) == 'string') {
                var x1 = String(-1 * b) + "/" + String(2 * a) + " + " + interna2 + "/" + String(2 * a)
                var x2 = String(-1 * b) + "/" + String(2 * a) + " - " + interna2 + "/" + String(2 * a)
                
                return {
                    x1, x2
                }
            }

            else {
                var x1 = (((-1 * b) + interna2) / (2 * a)).toFixed(2)
                var x2 = (((-1 * b) - interna2) / (2 * a)).toFixed(2)
            }
            

            if(x1 < 1) {
                var top = ((-1 * b) + Math.sqrt((b*b) - (4 * a * c)));
                var bottom = 2 * a;

                for(let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }

                        else {
                            if(x1 < 0) {
                                x1 = "-" + String(top + "/" + bottom);
                            }

                            else {
                                x1 = String(top + "/" + bottom)
                            }

                            break;
                        }
                    }
                }  
            }

            if(x2 < 1) {
                var top = ((-1 * b) - Math.sqrt((b*b) - (4 * a * c)));
                var bottom = 2 * a;

                for(let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }

                        else {
                            if(top < 0) {
                                x2 = "-" + String(top + "/" + bottom);
                            }

                            else {
                                x2 = String(top + "/" + bottom)
                            }

                            break;
                        }
                    }
                }                
            }
            
            return {
                x1,
                x2
            }
        }
    }

    // static thirdDegree(a, b, c, d) {

    // }
}