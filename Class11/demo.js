
document.childNodes[1].childNodes[2]
document.childNodes[1].childNodes[2].nodeType
document.childNodes[1].childNodes[2].nodeName





main.childNodes[1].textContent = "Header 2"
main.childNodes[1].textContent += " plus more text"


var paras = document.getElementsByClassName("paras")[0]
paras.textContent = "This is the new paragraph"

var newnode = document.createTextNode("some new text here")
main.appendChild(newnode)

var newnode2 = document.createTextNode("some more text here")
main.insertBefore(newnode2, newnode)

main.insertBefore(newnode2, main.firstChild)

main.removeChild(main.childNodes[2])

main.replaceChild(document.createTextNode("replacement header"), main.childNodes[1])

document.querySelectorAll('input')



var methods = document.forms.shipping.elements.method;
var shipping_method;
for(var i = 0; i < methods.length; i++){
	if (methods[i].checked)
    shipping_method = methods[i].value;
}
for (let m of methods)
  if(m.checked)
    shipping_method = m.value;
