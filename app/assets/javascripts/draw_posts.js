//function draw_posts(data) {
//    //var posts = $('#posts');
//    //posts.innerHTML = '';
//    document.getElementById('posts').innerHTML = "";
//    postsHTML = '';
//    console.log(data)
//    arr = data
//    var arr_posts = [];
//    arr.forEach(post => {
//        let user = "<div class='card-user'> " + post.nickname + "</div>";
//        let title = "<div class='card-title'>" + post.mem.title + "</div>";
//        let date = "<div class='card-time'> " + post.date + " </div>"
//        let header = "<div class='card-header'> " + title + date + " </div>";
//        let content =  "<div class='card-text'> " + post.mem.context + "</div>";
//        let body = " <div class='card-body'>" + user + content + " </div>";
//        let image = new Image();
//        image.src = post.photo_url;
//        image.onload = function() { /* LOAD IMAGE */ };
//        let i = 0;
//        if (!image.naturalWidth) {
//            image.onload();
//        }
//        console.log(image.naturalHeight,image.naturalWidth, "WIDthhhhhhhhhhhhhhhhhhhhhhhhhh")
//        let canvas = "<canvas id='" + post.mem.id + "' height='" + image.naturalHeight + "' width='" + image.naturalWidth + "'> </canvas> ";
//        console.log(canvas)
//        let postInner = "<div class='card text-center post'> " + header + canvas + body + "</div> <br/>";
//        postsHTML += postInner;
//        memmaker = new memMaker(post.mem.id); 
//        console.log(image);
//        memmaker.getImage(image.src)
//        let top = post.mem.top_text
//        let bottom = post.mem.bottom_text
//        memmaker.getText(top, bottom);
//        arr_posts.push(memmaker);
//    });
//
//    //posts.innerHTML = postsHTML;
//    $('#posts').append(postsHTML);
//    arr_posts.reverse().forEach(post => {
//        post.draw();
//    })
//}