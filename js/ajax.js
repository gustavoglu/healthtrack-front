let content = document.getElementById('ajax-content')

function fetchContent(el) {

    let view = el.getAttribute('view');
    console.log(`./views/${view}.html`);
    //let folder = el.getAttribute('folder');
     fetch(`./${view}.html`)
         .then(r => {
             return r.text();
         }).then(html => {
             content.innerHTML = html;
         }
         );
}