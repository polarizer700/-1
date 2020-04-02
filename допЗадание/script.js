let num = 33721;

console.log(mul(num));
let a = mul(num);
a = Math.pow(a,3);
alert(a);
function mul(num) {
            if (num) {
                let s = num.toString();
                return s[0] * s[1] * s[2] * s[3] * s[4];
            }
        }
