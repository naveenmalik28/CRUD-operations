let id = $("input[name*='id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let bookname = $("input[name*='name']");
    let bookpublisher = $("input[name*='address']");
    let bookprice = $("input[name*='product']");

    id.val(textvalues[0]);
    name.val(textvalues[1]);
    address.val(textvalues[2]);
    product.val(textvalues[3].replace("$", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}