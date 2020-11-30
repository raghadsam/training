fetch('http://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {

            var y = document.createElement('li');
            var content=`<div class="card" style="width:400px">
                   <img class="card-img-top" src="XXX" alt="Card image">
                  <div class="card-body">
                  <h4 class="card-title">YYY</h4>
                   <p class="card-text">ZZZ</p>
                   <a href="https://en.wikipedia.org/wiki/Flower" target="_blank" class="btn btn-primary">RAGHAD</a>
                </div>
               </div>`;
       var test=content.replace("XXX",json[i].flag)
    test=test.replace("YYY",json[i].name)
       test=test.replace("ZZZ",json[i].capital + '/' + json[i].area + '/' + json[i].region)
            y.innerHTML = test;
            
            
            y.className = 'list-group-item';
            document.getElementById('aya').appendChild(y);


        }
    })