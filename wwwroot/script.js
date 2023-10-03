function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'cc5115dc55c04a3cbe6f51206e1987e1'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}

function doSearch() {
    $("searchButton").click(function () {
        apiSearch();
    });
}

function getTime() {
    const now = new Date();
    var time = now.getHours() + ":" + now.getMinutes();
    return time;
}

function displayTime() {
    const currentTime = getTime();

    $('#time').text(currentTime);

    $('#time').dialog({
        modal: true,
        title: 'Current Time',
        buttons: {
            Close: function () {
                $(this).dialog('close');
            }
        }

    });
}

let isBackground1 = true;
function cycleBackground() {
    const body = document.body;

    if (isBackground1) {
        body.style.backgroundImage = "url('background2.jpg')";
    } else {
        body.style.backgroundImage = "url('background1.jpg')";
    }
    isBackground1 = !isBackground1;
}



