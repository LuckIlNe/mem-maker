$(document).ready(function() {
    $('select').data('picker');
    $('select').imagepicker({
        hide_select: false,
        show_label: true,
        clicked:function(){
            console.log($(this).find("optipn[value='" + $(this).val() + "']").data('img-src'));
        }
    })
})

function loadImagePicker() {
    $('select').data('picker')
}


function drawmem() {
    let canvas = $('#canvas');
    if (canvas != null);
    console.log(canvas[0].id);
    memmaker = new memMaker(canvas[0].id); //
    console.log($('select').data('picker').sync_picker_with_select());
    console.log(1);
    let image = new Image();
    div = document.getElementsByClassName("thumbnail selected")[0];
    console.log(div.getElementsByClassName("image_picker_image")[0].src);
    image.src = div.getElementsByClassName("image_picker_image")[0].src.replace(/thumb/,"normal")
    //image = div.getElementsByClassName("image_picker_image");
    console.log(image);
    memmaker.getImage(image)
    let top = document.getElementById('top_text').value
    console.log(top);
    let bottom = document.getElementById('bottom_text').value
    memmaker.getText(top, bottom);
    console.log(2);
    memmaker.draw();
    console.log(3);
}