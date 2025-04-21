export const API_KEY='AIzaSyB9nDwzXOo51SyhY19nlUIu3aP1W_RCZZI'
// 'AIzaSyDvS7NQIVZpNnve3JE-bLyaHiJe5nNwivA'

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}