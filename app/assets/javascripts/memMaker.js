class memMaker {
    constructor(can_id) {//, img) {
        this.canvas_id = can_id;
        //this.getImage(img);
    }

    async loadImage() {
        return await new Promise(function (resolve, reject) {
            if (this._image && this._image.src == this.imageSrc) {
                return this._image;
            }
            let img = new Image();
            img.addEventListener('load', e => resolve(img));
            img.addEventListener('error', () => reject(new Error(`Failed to load image's URL: ${this.imageSrc}`)));
            img.src = this.imageSrc;
            this._image = img;
        }.bind(this));
    }

    getImage(img) {
        this.imageSrc = img;
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
        this.loadImage().then(this.drawWithImage.bind(this))
    }

    drawWithImage(image) {
        let max_w = image.naturalWidth;
        let max_h = image.naturalHeight;
        this.drawImg(image);
        this.drawTop(max_w, max_h);
        this.drawBottom(max_w, max_h);
    }

    drawImg(image) {
        this.context.drawImage(image, 0, 0);
    }

    drawTop(max_w, max_h) {
        var top = this.wrapText(this.top_text, max_w, max_h);

        console.log("не в цикле")
        for( let i = 0; i < top.length; i++) {
            console.log("в цикле")
            console.log(top[i]);
            this.context.strokeText(top[i], max_w / 2, (40) * (i + 1));
            this.context.fillText(top[i], max_w / 2, 40*(i+1))
        }
    }

    drawBottom(max_w, max_h) {
        var top = this.wrapText(this.bottom_text, max_w, max_h);
        for( let i = 0; i < top.length; i++) {
            console.log(top[i]);
            this.context.strokeText(top[top.length - i - 1], max_w / 2, max_h - (40) * (i + 1));
            this.context.fillText(top[top.length - i - 1], max_w / 2, max_h - (40) * (i + 1));
        }
    }

    wrapText(text, max_w, max_h){

    var words = text.split(' ');
    if (this.context.measureText(text).width < max_w ){
        console.log("вмещается!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        return [text];
    }
    console.log(words)
    var lines = [];
    while (words.length > 0) {
        var line = '';
        var packed = false;
        var maxChars = parseInt(max_w / this.context.measureText('w').width) - 0.5
        if (this.context.measureText(words[0]).width > max_w && max_w != 0){
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
        if (this.context.measureText(line + ' ' + words[0]).width <= max_w){
            line = line + ' ' + words.shift();
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