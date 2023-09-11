export function isPrimitive(test) {
    return test !== Object(test);
}

export function createCopy(obj){
    if (isPrimitive(obj)) return obj;
    if (Array.isArray(obj)) return obj.map((elem)=>createCopy(elem));
    const copy = {};
    for(const key in obj){copy[key] = createCopy(obj[key]);}
    return copy;
}

export function isEqual(obj1, obj2){
    if (isPrimitive(obj1) && !isPrimitive(obj2)) return false;
    if (!isPrimitive(obj1) && isPrimitive(obj2)) return false;
    if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;
    

    if (!Array.isArray(obj1) && Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && !Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for(let i = 0; i< obj1.length;i++){
            if (!isEqual(obj1[i],obj2[i])) return false;
        } 
        return true;
    }

    for(let key in obj1){
        if (!isEqual(obj1[key],obj2[key])) return false;
    }
    for(let key in obj2){
        if (!isEqual(obj1[key],obj2[key])) return false;
    }
    return true;
}