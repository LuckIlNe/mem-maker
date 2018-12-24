//class memMaker1 {
//    constructor(can_id) {//, img) {
//        this.canvas = document.getElementById(can_id);
//        this.context = this.canvas.getContext('2d');
//        this.context.lineWidth = 1;
//        this.context.fillStyle = "white";
//        this.context.lineStyle = "black";
//        this.context.textAlign = "center"
//        this.context.font = "40px impact";
//        this.context.strokeStyle= "black";
//        this.context.lineWidth = 4;
//        //this.getImage(img);
//    }
//
//    getImage(img) {
//        this.image = img;
//    }
//
//    getText(top_t, bot_t) {
//        this.top_text = top_t;
//        this.bottom_text = bot_t;
//    }
//
//    draw() {
//        this.context.drawImage(this.image,0,0);
//        this.drawTop();
//        this.drawBottom();
//    }
//
//    max_w() {
//        return this.image.naturalWidth;
//    }
//
//    max_h() {
//        return this.image.naturalHeight;
//    }
//
//    drawTop() {
//        if (this.top_text.lenght > 25 ) {
//            this.context.fillText(this.top_text.substring(0,25), this.max_w() / 2, 40);
//            this.context.fillText(this.top_text.substring(25,this.top_text.lenght), this.max_w() / 2, 80);
//        } else {
//            this.context.fillText(this.top_text, this.max_w() / 2, 40);
//        }
//    }
//
//    drawBottom() {
//        console.log(this.bottom_text.length);
//        console.log(this.max_w());
//        if (this.bottom_text.lenght > 25 ) {
//            this.context.fillText(this.bottom_text.substring(0,25), this.max_w() / 2, this.max_h() - 60);
//            this.context.fillText(this.bottom_text.substring(25,this.bottom_text.lenght), this.max_w() / 2, this.max_h() - 20);
//        } else {
//            this.context.fillText(this.bottom_text, this.max_w() / 2, this.max_h() - 20);
//        }
//    }
//}

class memMaker {
    constructor(can_id) {//, img) {
        this.canvas_id = can_id;
        //this.getImage(img);
    }

    getImage(img) {
        //this.image = img;
        this.image = new Image();
        this.image.src = img;
        //let dowanload = new Image();
        //dowanload = function() {
        //    this.image.src = this.src
        //}
        //dowanload.src = img;
        console.log("IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE")
        console.log(this.image.src)
    }

    getText(top_t, bot_t) {
        this.top_text = top_t;
        this.bottom_text = bot_t;
    }

    setUpCanvas() {
        this.canvas = document.getElementById(this.canvas_id);
        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = 1;
        this.context.fillStyle = "white";
        this.context.lineStyle = "black";
        this.context.textAlign = "center"
        this.context.font = "35px impact";
        this.context.strokeStyle= "black";
        this.context.lineWidth = 4;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        this.setUpCanvas();
        //this.context.drawImage(this.image,0,0);
        console.log("IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE")
        console.log(this.image)
        this.image.addEventListener('load', this.drawImg(), false);
        this.drawImg();
        this.drawTop();
        this.drawBottom();
    }

    drawImg() {
        this.context.drawImage(this.image,0,0);
    }

    max_w() {
        return this.image.naturalWidth;
    }

    max_h() {
        return this.image.naturalHeight;
    }

    drawTop() {
        var top = this.wrapText(this.top_text);
        console.log("не в цикле")
        for( let i = 0; i < top.length; i++) {
            console.log("в цикле")
            console.log(top[i]);
            console.log(this.max_w(), this.image.naturalWidth)
            this.context.strokeText(top[i], this.image.naturalWidth / 2, (40) * (i + 1));
            this.context.fillText(top[i], this.image.naturalWidth / 2, 40*(i+1))
        }
        //if (this.top_text.length > 25) {
        //    this.context.fillText(this.top_text.substring(0,25), this.max_w() / 2, 40);
        //    this.context.fillText(this.top_text.substring(25,this.top_text.lenght), this.max_w() / 2, 80);
        //} else {
        //    this.context.fillText(this.top_text, this.max_w() / 2, 40);
        //}
    }

    drawBottom() {
        var top = this.wrapText(this.bottom_text);
        for( let i = 0; i < top.length; i++) {
            console.log(top[i]);
            this.context.strokeText(top[i], this.max_w() / 2, this.max_h() - 10 - (40 + 1) * (i));
            this.context.fillText(top[i], this.max_w() / 2, this.max_h() - 10 - (40 + 1) * (i))
        }
        //if (this.bottom_text.length > 25 ) {
        //    //var bottoms = this.bottom_text.split(" ");
        //    //var text = ''
        //    //while (text + botom[i] < 25)
        //    this.context.fillText(this.bottom_text.substring(0,25), this.max_w() / 2, this.max_h() - 60);
        //    this.context.fillText(this.bottom_text.substring(25,this.bottom_text.lenght), this.max_w() / 2, this.max_h() - 20);
        //} else {
        //    this.context.fillText(this.bottom_text, this.max_w() / 2, this.max_h() - 20);
        //}
    }

    //formatText(text) {
    //    var words = text.split(' ');
    //    if (this.context.measureText(text).width < this.max_w) {
    //        return [text];
    //    }
    //    console.log(words);
    //    var line1 = [];
    //    var line2 = [];
//
    //}

    wrapText(text){
    var words = text.split(' ');
    if (this.context.measureText(text).width < this.max_w ){
        console.log("вмещается!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        return [text];
    }
    console.log(words)
    var lines = [];
    while (words.length > 0) {
        var line = '';
        var packed = false;
        var maxChars = parseInt(this.image.naturalWidth / this.context.measureText('w').width) - 0.5
        console.log(this.image.naturalWidth, this.context.measureText('a').width)
        console.log("checkkkkkkkk")
        console.log(maxChars)
        if (this.context.measureText(words[0]).width > this.max_w() && this.max_w() != 0){
            console.log("What`s the freak word!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            var word = words[0];
            var tempWord = word.slice(0, maxChars )
            line = tempWord
            words[0] = word.slice(maxChars)
            packed = true;
        }
            else{
            line = words.shift();
            console.log("одно слово вмещается вмещается!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        }

    while (packed === false && words.length > 0){
        if (this.context.measureText(line + ' ' + words[0]).width <= this.image.naturalWidth){
            // if(words[0] == undefined){
            // words.shift();
            // } 
            // else{
            line = line + ' ' + words.shift();
            // }
        }
        else{
            packed = true;
        }
    
    }

        console.log('else')
        console.log(line)
        lines.push(line);
        console.log(line)
    }
    console.log(lines)
    return lines;
    }
}