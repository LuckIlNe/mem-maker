$(document).ready(function() {
    $("#lasts").on("ajax:success", (event) => {
        [data, status, xhr] = event.detail;
        draw_posts(data);
    })
})

function draw_posts(data) {
    //var posts = $('#posts');
    //posts.innerHTML = '';
    document.getElementById('posts').innerHTML = "";
    postsHTML = '';
    console.log(data)
    arr = data.value
    var arr_posts = [];
    arr.forEach(post => {
        let user = "<div class='card-user'> " + post.nickname + "</div>";
        let header = "<div class='card-header'> "+ user + "<div class='card-time'> " + post.mem.created_at + " </div>" + " </div>";
        let body = " <div class='card-body'>" + "<div class='card-title'>" + post.mem.title + "</div>" +"<div class='card-text'> " + post.mem.context + "</div>" + " </div>";
        let image = new Image();
        image.src = post.photo_url;
        image.onload = function() { /* LOAD IMAGE */ 
        };
        let canvas = "<canvas id='" + post.id + "' height='" + image.naturalHeight + "' width='" + image.naturalWidth + "'> </canvas> ";
        let postInner = "<div class='card text-center post'> " + header + canvas + body + "</div> <br/>";
        postsHTML += postInner;
        memmaker = new memMaker(post.id); 
        console.log(image);
        memmaker.getImage(image)
        let top = post.mem.top_text
        let bottom = post.mem.bottom_text
        memmaker.getText(top, bottom);
        arr_posts.push(memmaker);
    });

    //posts.innerHTML = postsHTML;
    $('#posts').append(postsHTML);
    arr_posts.reverse().forEach(post => {
        post.draw();
    })
}