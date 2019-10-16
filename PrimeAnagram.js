
anagNums = (list1) => {
    var anList = []
    console.log(list1.length)
    for (let i = 0; i < list1.length; i++) {
        for (let j = i + 1; j < list1.length; j++) {
            let Str1 = String(list1[i]);
            let Str2 = String(list1[j]);
            if (Anagram(Str1, Str2)) {
                anList.push(list1[i], list1[j])

            } else continue
        }
    } return anList
}
module.exports = { anagNums }