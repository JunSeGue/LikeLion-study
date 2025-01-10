//js es6 module 사용 방법
export default function add(x =0 , y = 0) {
    return x + y;
}

export function subtract(x = 0, y = 0) {
    return x - y;
}

// export { add, subtract }; // named export