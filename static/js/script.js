// This downloads and parses the events json
$.get("https://cloud-gul.uc3m.es/s/akcbfyMdAMmT3Gf/download?path=%2Feventos&files=event_data.json", function (data) {
    let parsed = JSON.parse(data);
    $.each(parsed, function(key, val) {
        $("#" + key).text(val.toString());
    });
    $("#separador-horas").text(" - "); // añadimos el separador después para que no se vea el guión suelto mientras carga

    if("link" in parsed) {
        $("#link").html("<a href=\"" + parsed["link"] + "\" target=\"_blank\">Enlace del evento</a>")
    } else {
        $("#info-link-container").remove();
    }
});

// This downloads and inserts the event program
$.get("https://cloud-gul.uc3m.es/s/akcbfyMdAMmT3Gf/download?path=%2Feventos&files=programa.txt", function (data) {
    $("#programa").html(data);
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