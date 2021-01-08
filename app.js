function countCharacters(string, char) {
    let counted = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] == char) {
            counted += 1;
        }
    }
    return counted;
}