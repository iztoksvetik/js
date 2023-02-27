export default function narcissistic(number) {
    let numbers = number.toString().split('');
    return numbers.map(n => Math.pow(n, numbers.length)).reduce((part, n) => part + n, 0) === number;
};
