document.addEventListener("DOMContentLoaded", function () {
    console.log('Hello World');
    var request = new XMLHttpRequest();
    var grossery = document.querySelector('#grossery');

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var response = JSON.parse(request.response);
                response.forEach(element => {
                    var div = document.createElement('div');
                    div.className = 'col-12 col-md-4 col-lg-3 my-3';
                    var card = document.createElement('div');
                    card.className = 'card bg-warning';
                    var cardbody = document.createElement('div');
                    cardbody.className = 'card-body'

                    html = '<div class="text-danger text-bold text-uppercase">' + element.category + '</div>' + '<div> ' + element.type + ' </div>' + '<div> <h4 class="text-danger">' +
                        element.item + '</h4></div><div><hr></div>' + '<div class="text-uppercase">' + element.brand + '</div>' + '<div class="d-flex flex-row-reverse my-3"><span> Qty / ' + element.qty + '</span></div>';

                    cardbody.innerHTML = html;
                    card.appendChild(cardbody);
                    div.appendChild(card);
                    grossery.appendChild(div);
                });
            } else {
                html = '<div>No records found.</div>'
                grossery.appendChild(html);
            }

        }
    }
    request.open('Get', '../data/mock-data.json');
    request.send();
});
