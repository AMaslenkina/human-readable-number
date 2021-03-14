module.exports = function toReadable (number) {
    if (number === 0){
        return 'zero'
    }else {
        const arr_1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const arr_2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if(number < 20){
            return arr_1[number]
        }else if (number < 100){
            let result = arr_2[Math.floor(number / 10)]+ ' ' + arr_1 [number%10];
            return result.trim();
        }else{
            let num = number.toString().split('');
            let result = arr_1[num[0]]+ ' hundred '
            let s = parseInt(num[1]+num[2]);
            if (s < 20){
                result += arr_1[s]
                return result.trim();
            }else {
                result += arr_2[Math.floor(s / 10)]+ ' ' + arr_1 [s%10];
                return result.trim();
            }
        }
    }
}
