let div = document.querySelector(".Form24")
let form = document.createElement('script')

form.innerText = "(function(w,d,u){ var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0); var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h); })(window,document,'https://cdn-ru.bitrix24.by/b3453949/crm/form/loader_16.js');\n"

form.setAttribute("data-b24-form", "inline/16/3o15it")
form.setAttribute("data-skip-moving", "true")

console.log(form);

div.appendChild(form)



