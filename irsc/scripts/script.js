$(document).ready(function () {
    $.ajax('scripts/data.json', {
            dataType: 'json',
            contentType: 'application/json',
            cache: false,
        })
        .done(function (response) {
            console.log(response);
            var html;
            $.each(response, function (index, element) {
                html = '<div class="grid-card">';
                html += '<p class="card-heading">' + element.cardHeading + '</p>';
                html += '<p class="venue-date">' + element.venue + '</p>';
                html += '<p class="venue-date">' + element.date + '</p>';
                html += '<p class="random">' + element.random + '</p>';
                html += '<div class="image"><img src="' + element.img + '" alt="dest-logo" /></div>';
                html += '<div class="bottom">';
                html += '<p id="bottom-1-head-id" class="bottom-head">' + element.bottomHead1 + '</p>';
                html += '<p id="bottom-2-head-id" class="bottom-head">' + element.bottomHead2 + '</p>';
                html += '<p id="bottom-3-head-id" class="bottom-head">' + element.bottomHead3 + '</p>';
                html += '<p id="bottom-4-head-id" class="bottom-head">' + element.bottomHead4 + '</p>';
                html += '<p id="bottom-1-data-id" class="bottom-data">' + element.bottomData1 + '</p>';
                html += '<p id="bottom-2-data-id" class="bottom-data">' + element.bottomData2 + '</p>';
                html += '<p id="bottom-3-data-id" class="bottom-data">' + element.bottomData3 + '</p>';
                html += '<p id="bottom-4-data-id" class="bottom-data">' + element.bottomData4 + '</p>';
                html += '</div>';
                html += '<div class="card-footer">';
                html += '<p>' + element.cardFooterp + '</p>';
                html += '<a href="./html/modalHtml/detailsModal.html" class="view-details">' + element.cardFootera + '</a>';
                html += '</div>';
                html += '</div>';
                $('#grid-div').append(html);
            })

            //load more contents (works if display: none)
            $(".grid-card").slice(0, 9).show();
            $("#more").on('click', function (event) {
                event.preventDefault();
                $(".grid-card:hidden").slice(0, 9).slideDown();
                if ($(".grid-card:hidden").length == 0) {
                    $("#more").fadeOut('slow');
                }
            })

            //view details modal
            $(".view-details").on('click', function (event) {
                event.preventDefault();
                this.blur();
                $.get(this.href, function (html) {
                    $(html).appendTo('body').modal();
                });
            });

            //log in modal
            $("#login").on('click', function (event) {
                event.preventDefault();
                this.blur();
                $.get(this.href, function (html) {
                    $(html).appendTo('body').modal();
                });

                $("#customer").on('click', function (event) {
                    event.preventDefault();
                    this.blur();
                    $.get(this.href, function (html) {
                        $(html).appendTo('body').modal();
                    });
                });

                $("#hotel").on('click', function (event) {
                    event.preventDefault();
                    this.blur();
                    $.get(this.href, function (html) {
                        $(html).appendTo('body').modal();
                    });
                });

            });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("Failed : " + errorThrown);
            alert("Problem in loading page...");
        });
});
