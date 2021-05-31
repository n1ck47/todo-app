const gcd = (m1,m2) => {
    let small=m1, large=m2;
    if(m1>m2){
        small = m2;
        large = m1;
    }
    while(true){
        if(large%small===0){
            return small;
        }
        let temp = small;
        small = large%small;
        large = temp;
    }
}

const findMods = key => {
    let m1 = null, m2 = null;
    for(let i=2; i < Math.floor(Math.sqrt(key)+1); i++){
        if(key%i===0){
            let temp = Math.floor(key/i);
            if(key%temp === 0 && temp!==i && gcd(temp,i)===1){
                m1 = i;
                m2 = temp;
                break;
            }
        }
    }
    return [m1,m2];
}

const genRandomUniqueNums = key => {
    let [m1,m2] = findMods(key);
    
    if(m1===null || m2===null) return null;

    var numsMatrix = [];
    for(let i=0;i<m2;i++){
        let x = [];
        for(let j=0;j<m1;j++){
            x.push(-1);
        }
        numsMatrix.push(x);
    }
    
    let M = m1*m2;
    let M1=m2, M2=m1;

    let X1=null, X2=null;

    for(let x=1;x<key;x++){
        let temp = M1*x;
        if((temp%m1)===1){
            X1 = x;
            break;
        }

    }

    for(let x=1;x<key;x++){
        let temp = M2*x;
        if((temp%m2)===1){
            X2 = x;
            break;
        }

    }

    let answer = [];

    for(let i=0;i<m1;i++){
        for(let j=0;j<m2;j++){
            let randomNumber = (M1*X1*i + M2*X2*j) % M;
            if(randomNumber < key){
                answer.push(randomNumber);
            }
        }
    }
    return answer;
}

var ids = genRandomUniqueNums(1000);

export default ids;