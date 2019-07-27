let content = document.getElementById('ajax-content')

function fetchContent(el) {

    let view = el.getAttribute('view');
    //let folder = el.getAttribute('folder');
     fetch(`./${view}.html`)
         .then(r => {
             return r.text();
         }).then(html => {
             content.innerHTML = html;
         }
         ).then(()=>{
             const script = document.createElement('script');
             script.async = true;
             script.src = `/js/${view}.js`;
             document.body.appendChild(script);

         })
         
         ;
}