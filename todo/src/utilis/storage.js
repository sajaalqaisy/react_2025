export const saveToLocalstorage =(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
export const getFromLocalstorage=(key)=>{
    const data =localStorage.getItem(key)
}
