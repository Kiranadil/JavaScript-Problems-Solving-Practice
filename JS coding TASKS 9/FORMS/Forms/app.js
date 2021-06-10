
document.getElementById('btn').onclick = clickMe;
function clickMe() {
    let element1 = document.getElementById('inp1');
    let element2 = document.getElementById('inp1');

    if (element1.value == null && element2.value == null) {
        alert("Fill the empty spaces");
    }
    else if (element1.value == null || element2.value == null){
        alert('Some blanks are not filled');
    }
    else {
        alert('Logged In Successfully')
    }
    if (element2 < 8){
        alert('Length is too short')
    }
}
