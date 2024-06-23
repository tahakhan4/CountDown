const endDate = '23 June 2024 11:38 AM';

document.getElementById("end-date").innerHTML = endDate;

const input = document.querySelectorAll('input');

function clock() {
    const End = new Date(endDate);
    const New = new Date();
    const Diff = (End - New) / 1000;

    if (Diff < 0){
        return;
    }
    input[0].value = Math.floor(Diff / 3600 / 24);
    input[1].value = Math.floor(Diff / 3600) % 24;
    input[2].value = Math.floor(Diff / 60) % 60;
    input[3].value = Math.floor(Diff) % 60;

}
clock();

setInterval(() => {
    clock()
}, 1000);    
