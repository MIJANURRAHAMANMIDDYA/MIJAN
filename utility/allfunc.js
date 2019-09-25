module.exports = {
    IsPrime(n) {
        try {
            if (typeof n !== 'number') {
                throw "invalid value"
            }

            let count = 0;
            for (let i = 1; i <= n; i++) {
                if (n % i == 0)
                    count++;
            }
            if (count > 2 || count < 2)
                return false;
            else
                return true;
        }
        catch (err) {
            return err;
        }
    },

    IsAnagram(string1, string2) {
        try {
            if (typeof string1 === 'Boolean' || typeof string2 === 'Boolean') {
                throw "invalid value"
            }
            let str1 = String(string1);
            let str2 = String(string2);
            if (str1.length == str2.length) {
                let arr1 = str1.split('');
                let arr2 = str2.split('');
                arr1.sort();
                arr2.sort();
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        catch (err) {
            return err;
        }

    },

    IsPalindromestr(string) {
        try {

            if (typeof string !== String) {
                throw "invalid value"
            }
            let reversed = '';
            for (let k = string.length - 1; k < string.length; k--) {
                reversed = reversed + string.chatAt(k);
            }
            if (string.equals(reversed))
                return true;
            else
                return false;
        }
        catch (err) {
            return err
        }
    },
    BinarySearchnum(arr, low, high, n, data) {
        try {
            if (typeof data != 'number') {
                throw "invalid data"
            }

            let mid = parseInt((low + high) / 2);
            while (low <= high) {
                if (arr[mid] < data) {
                    low = mid + 1;
                }

                else if (arr[mid] == data) {
                    console.log("value is found in: " + mid);
                    break;
                }

                else {
                    high = mid - 1;
                }
                mid = parseInt((low + high) / 2);
            }
            if (low > high) {
                console.log("element not found");
            }
        }
        catch (err) {
            return err;
        }
    },

    BubbleSort(arr, n) {
        try {
            if (typeof n !== 'number') {
                throw "invalid"
            }
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log(arr);
        }
        catch (err) {
            return err;
        }
    },

    InsertionSort(arr, n) {
        try {
            if (typeof n !== 'number') {
                throw "invalid"
            }
            let i, j, key;
            for (i = 1; i < n; i++) {
                j = i;
                while (j > 0 && arr[j - 1] > arr[j]) {
                    key = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = key;
                    j--;
                }
            }
            console.log(arr);
        }
        catch (err) {
            return err;
        }

    },
    IsFull(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0)
                return false;
        }
        return true;
    },


    DayofWeek(day, month, year) {
        try {
            console.log(day)
            
            
            console.log(typeof month)
            console.log( typeof year)
            

            if (typeof day !== 'number' || typeof month !== 'number' || typeof year !== 'number') {
                throw "invalid data"
            }
            let y1 = year - parseInt((14 - month));
            let x = y1 + parseInt(y1 / 4) - parseInt(y1 / 100) - parseInt(y1 / 400);
            m1 = month + 12 * parseInt((14 - month) / 12) - 2;
            d1 = (day + x + parseInt((31 * m1) / 12)) % 7;
            return d1;
        }
        catch (err) {
            return err;
        }
    },
    LeapYear(year) {
        try {
            if (typeof year !== 'number') {
                throw "invalid year"
            }
            if (year % 400 == 0)
                return true;
            else if (year == 2005)
                return true;
            else if (year % 100 != 0 && year % 4 == 0)
                return true;
            else
                return false;
        }
        catch (err) {
            return err;
        }
    },
    IsPalindromenum(num) {
        try {
            if (typeof num !== 'number') {

                throw "invalid number"
            }

            let temp, digit, sum = 0;
            temp = num;
            while (num > 0) {
                digit = num % 10;
                sum = sum * 10 + digit;
                num = parseInt(num / 10);
            }
            if (sum == temp) {
                return true;
            }
            else {
                return false;
            }
            return false;
        }
        catch (err) {
            return err;
        }
    },
    Triplet(arr, size) {
        try {
            if (typeof size !== 'number') {
                throw "invalid value"
            }
            let found = false;
            for (let i = 0; i < arr.length - 2; i++) {
                for (let j = i + 1; j < arr.length - 1; j++) {
                    for (let k = j + 1; k < arr.length; k++) {
                        if (arr[i] + arr[j] + arr[k] == 0) {
                            console.log(arr[i]);
                            console.log("")
                            console.log(arr[j]);
                            console.log("")
                            console.log(arr[k]);
                            console.log("\n");
                            found = true;
                        }
                    }
                }
            }
            if (found == false) {
                console.log("not exit");
            }
        }
        catch (err) {
            return err;
        }
    },
    TempSpeed(t, v) {
        try {
            if (typeof t !== 'number' || t > 50) {
                throw "invalid value of temperature"
            }
            if (typeof v !== 'number' || (v < 3 && v > 120)) {
                throw "invalid value of speed"
            }
            if (t <= 50 && v <= 120 && v > 3) {
                let w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
                return (" value of w is:" + w);
            }
        }
        catch (err) {
            //   return err;
        }

    },
    FlipCoin(n) {
        try {
            if (typeof n != 'number') {
                throw "invalid"
            }
            let tail = 0;
            let head = 0;
            for (let i = 1; i <= n; i++) {
                let value = parseFloat(Math.random());
                if (value < 0.5)
                    tail++;
                else
                    head++;
            }
            let hvstper = head / tail * 100;
            console.log("head vs tail percentages is :" + hvstper);
            console.log(" number of heads are:" + head);
            console.log('number of tails are:' + tail)
        }
        catch (err) {
            return err;
        }
    },
    Swap(string, index1, index2) {
        try {
            if (typeof string === 'number') {
                throw "invalid"
            }
            let temp = string[index1];
            string[index1] = string[index2];
            string[index2] = temp;
            return string;
        }
        catch (err) {
            return err;
        }
    },

    Permute(string, startIndex, endIndex) {
        if (startIndex === endIndex) {
            console.log(string.join(''));
        }
        else {
            var i;
            for (i = startIndex; i <= endIndex; i++) {
                swap(string, startIndex, i);
                permute(string, startIndex + 1, endIndex);
                swap(string, i, startIndex);
            }
        }
    },
    Power2(n) {
        try {
            if (typeof n !== 'number') {
                throw "invalid"
            }
            let value = Math.pow(2, n);
            console.log('value is:' + value);
        }
        catch (err) {
            return err;
        }
    },
    PrimeFactor(num) {
        try {
            if (typeof num !== 'number') {
                throw "invalid data"
            }
            for (let i = 2; i < num; i++) {
                while (num % i == 0) {
                    console.log(i);
                    num = parseInt(num / i);
                }
            }
            if (num > 2) {
                console.log(num);
            }
        }

        catch (err) {
            return err;
        }
    },
    Replace(String) {
        try {
            if (typeof string !== String) {
                throw "invalid"
            }
            if (username.length >= 3) {
                console.log("Hello" + username + ",how are you?");
            }
        }
        catch (err) {
            return err;
        }
    },
    Binary(num) {
        try {
            if (typeof num !== 'number') {
                throw "invalid value"
            }

            let a;
            let x = "";
            while (num > 0) {
                a = n % 2;
                x = a + x;
                num = parseInt(n / 2);
            }
            let no = x.length;
            let s = "";
            let zero = 8 - no;
            while (zero > 0) {
                s = s + 0;
                zero--;
            }
            s = s + x;
            console.log("binary value of n is: " + s);
        }
        catch (err) {
            return err;
        }
    },
    Findnum(first, last) {
        try {
            if (typeof first !== 'number' || typeof last !== 'number') {
                throw "invalid"
            }

            while (first <= last) {
                let mid = parseInt((first + last) / 2);
                console.log(mid + " is your number:yes or no");
                let v = input.question("enter value:");
                if (v == 'yes') {
                    console.log("hey i find the nuber!!! " + mid);
                    process.exit(0);
                }
                else {
                    console.log("type yes/no for number is between " + first + " to " + (mid - 1) + " and from " + (mid + 1) + " to " + last);
                    let k = input.question("value:");
                    if (k == 'yes') {
                        last = mid - 1;
                    }
                    else {
                        first = mid + 1;
                    }
                }
            }
            if (first > last) {
                console.log("you are wrong!!!");
            }
        }
        catch (err) {
            return err;
        }
    },
    Merge(left, right) {
        var result = [];
        while (left.length || right.length) {
            if (left.length && right.length) {
                if (left[0] < right[0]) {
                    result.push(left.shift());
                }
                else {
                    result.push(right.shift());
                }
            } else if (left.length) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
        return result;
    },
    MergeSort(list) {
        try {
            if (typeof list === 'undefine') {
                throw "invalid"
            }

            if (list.length <= 1)
                return list;
            let middle = parseInt(list.length / 2);
            let left = list.slice(0, middle);
            let right = list.slice(middle, list.length);
            return Merge(MergeSort(left), MergeSort(right));
        }
        catch (err) {
            return err;
        }
    },
    BtoDecimal(arr1) {
        try {
            if (typeof arr1 === 'undefined') {
                throw "invalid"
            }
            number = parseInt(arr1);
            let i = 0.0, value = 0.0;
            while (number > 0) {
                let digit = number % 10;
                value = value + digit * Math.pow(2, i);
                i++;
                number = parseInt(number / 10);
            }

            console.log(number);
        }

        catch (err) {
            return err;
        }
    },
    Temp(c) {
        try {
            if (typeof c !== 'number') {
                throw "invalid"
            }

            let f = (c * 9 / 5) + 32;
            console.log("value of fahrenheit is:" + f);
        }
        catch (err) {
            return err;
        }
    },

    GetChange(arr, change, index) {
        try {
            if (typeof change !== 'number') {
                throw "invalid"
            }

            for (let i = index; i >= 0; i--) {
                if (change >= arr[i]) {
                    let note = parseInt(change / arr[i]);
                    change = change - arr[i] * note;
                    console.log("vending machine display as:" + arr[i] + "X" + note);
                    if (change == 0) {
                        process.exit(0);
                    }
                    GetChange(arr, change, index - 1);
                }
            }
        }
        catch (err) {
            return err;
        }
    }
}


