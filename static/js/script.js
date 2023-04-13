// This downloads and parses the events json
$.get("http://api.allorigins.win/get?url=https%3A//cloud-gul.uc3m.es/s/akcbfyMdAMmT3Gf/download%3Fpath%3D%252Feventos%26files%3Devent_data.json", function (data) {
    let parsed = JSON.parse(data.contents);
    $.each(parsed, function(key, val) {
        $("#" + key).append(val.toString());
    });
});

// This downloads and inserts the event program
$.get("http://api.allorigins.win/get?url=https%3A//cloud-gul.uc3m.es/s/akcbfyMdAMmT3Gf/download%3Fpath%3D%252Feventos%26files%3Dprograma.txt", function (data) {
    $("#programa").html(data.contents);
});

/*$.ajax({
    url: "https://cloud-gul.uc3m.es/s/akcbfyMdAMmT3Gf/download?path=%2Feventos&files=event_data.json",
    dataType: "jsonp",
    contentType: "text/plain",

    success: function(data) {
        alert("Success!");
        let items = [];
        $.each(data, function(key, val) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    }
});*/

/*const xhr = new XMLHttpRequest();
xhr.open("GET", "https://cloud-gul.uc3m.es/s/akcbfyMdAMmT3Gf/download?path=%2Feventos&files=event_data.json");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
xhr.responseType = "json";
xhr.send();
xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
    } else {
        console.log(`Error: ${xhr.status}`);
    }
};*/