const modalClassName = "mymodal";
const modalOpenName = "open";

const siblings = (elem) => {
    let siblings = [];

    if (!elem.parentNode) {
        return siblings;
    }

    let sibling = elem.parentNode.firstElementChild;

    do {
        if (sibling != elem) {
            siblings.push(sibling);
        }
    } while (sibling = sibling.nextElementSibling);
		
    return siblings;
};

function toggleModal(){
    var source = event.target || event.srcElement;
    var modal = null;

    if(source.classList.contains("mymodal_button")){
        modal = source.parentElement;
    }
    else{
        modal = source.nextElementSibling;
    }

    modal.classList.toggle(modalOpenName);

    var body = document.getElementsByTagName("body").item(0);

    body.classList.toggle("no-scroll");
}   

