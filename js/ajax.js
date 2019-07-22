let content = document.getElementById('ajax-content')

function fetchContent(el) {

    let view = el.getAttribute('view');
    console.log(`./views/${view}.html`);
    //let folder = el.getAttribute('folder');
     fetch(`./${view}.html`)
         .then(r => {
             alert('teste')
             return r.text();
         }).then(html => {
             console.log(html)
             content.innerHTML = html;
         }
         );
}