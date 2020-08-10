var count = 0;

fetch("https://talk-to-stranger-backend.herokuapp.com/count")
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        count = data;
        $(".count-online-users").text(count + 1);
    });