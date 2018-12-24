$(document).ready(function() {
    $('select').imagepicker({
        hide_select: false,
        show_label: true,
        clicked:function(){
            console.log($(this).find("optipn[value='" + $(this).val() + "']").data('img-src'));
        }
    })

    $('#top').on("change",function () {
        console.log($(this).val())
        check_input_filed($(this))
    })

    $('#bot').on("change",function () {
        console.log($(this).val())
        check_input_filed($(this))
    })

    if ($('#mem_photo_id').lenght == 0) loadImagePicker()

})

function check_input_filed(dom) {
    if (dom.val().length > 89) {
        alert("many words \n Max number of symbols = 90 \n sorry but i should delete lasts symbols")
    }
    str = dom.val();
    while (str.length > 89 ) str = str.slice(0,-1);
    dom.val(str);
    console.log(dom.attr('id'));
    warn_id = "#" + dom.attr('id') + "_help";
    $(warn_id).val("only 90 symbols")
}

function loadImagePicker() {
    $('select').data('picker');
    if ($('.thumbnail').length != 0) window.location.reload();
    console.log($('.thumbnail'))
    console.log($('select'))
    console.log($('ul'))
    console.log($('li'))
    console.log($('.thumbnails'))
    console.log($('.kek'))
    console.log(document.getElementsByClassName('thumbnail'))
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
    //image.src = div.getElementsByClassName("image_picker_image")[0].src.replace(/thumb/,"normal")
    //image = div.getElementsByClassName("image_picker_image");
    console.log(image);
    //memmaker.getImage(image)
    var dowanload = new Image();
    dowanload = function() {
        image.src = this.src
    };
    console.log(image)
    dowanload.src = div.getElementsByClassName("image_picker_image")[0].src.replace(/thumb/,"normal")
    memmaker.getImage(div.getElementsByClassName("image_picker_image")[0].src.replace(/thumb/,"normal"))
    let top = $('#top').val();
    console.log(top);
    let bottom = $('#bot').val();
    memmaker.getText(top, bottom);
    console.log(2);
    memmaker.draw();
    console.log(3);
    //drawmem1();
}

function drawmem1() {
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
    var dowanload = new Image();
    dowanload = function() {
        image.src = this.src
    };
    
    dowanload.src = div.getElementsByClassName("image_picker_image")[0].src.replace(/thumb/,"normal")
    console.log(image)
    memmaker.getImage(div.getElementsByClassName("image_picker_image")[0].src.replace(/thumb/,"normal"))
    let top = document.getElementById('top_text').value
    console.log(top);
    let bottom = document.getElementById('bottom_text').value
    memmaker.getText(top, bottom);
    console.log(2);
    memmaker.draw();
    console.log(3);
}