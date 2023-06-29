function refreshProgressBars() {
    fetch('https://raw.githubusercontent.com/funtime-foxy1/GatewaysWebsite/main/ignore/progress.json')
        .then(res => res.json())
        .then(json => {
            //json vaiable contains object with data
            let results = json.result;
            document.getElementsByClassName("progress__fill")[0].style.width = results.development + "%";
            document.getElementsByClassName("progress__text")[0].innerHTML = results.development + "%";

            document.getElementsByClassName("progress__fill")[1].style.width = results.playtest + "%";
            document.getElementsByClassName("progress__text")[1].innerHTML = results.playtest + "%";

            document.getElementsByClassName("progress__fill")[2].style.width = results.polish + "%";
            document.getElementsByClassName("progress__text")[2].innerHTML = results.polish + "%";
        });
}

function onpageloadaaa() {
    refreshProgressBars();
}