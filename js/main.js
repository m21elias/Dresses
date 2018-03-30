var dress00 = {
    image:'img/d1.jpg',
    style: 'Lace Strap',
    colorName:'Pearl White',
    length:'Bodycon',
    price:'110.0',

}

var dress01 = {
    image:'img/d2.jpg',
    style: 'Lace Strap',
    colorName:'Culombia Blue',
    length:'Maxi',
    price:'100.0',

}
var dress02 = {
    image:'img/d3.jpg',
    style: 'Lace Short Sleeve',
    colorName:'Cherry Blossom Pink',
    length:'Pouf',
    price:'160.0',
}
var dress03 = {
    image:'img/d4.jpg',
    style: 'Lace Vneck',
    colorName:'Brunswick Green',
    length:'Apron',
    price:'290.0',
}
var dress04 = {
    image:'img/d5.png',
    style: 'Chiffon Over Lace Strapless',
    colorName:'Black Bronze (metallic)',
    length:'Strapless Gala',
    price:'200.0',
}
var dress05 = {
    image:'img/d6.png',
    style: 'Georgette Strapless',
    colorName:'Amarath Red',
    length:'Trumpet',
    price:'90.0',
}

console.log(dress00, dress01, dress02, dress03, dress04, dress05)


var myImg = document.getElementById('img1');
if(myImg && myImg.style) {
    myImg.style.height = '300px';
    myImg.style.width = '350px';
}

var myImg = document.getElementById('img2');
if(myImg && myImg.style){
    myImg.style.height = '250px';
    myImg.style.width = '350px';
}

function Dress(style,color,price,length,image){
    this.style = style
    this.colorName = colorName
    this.price = price
    this.length = length
    this.image = image
}

var conClothing = new Clothing ('img/d1.jpg', 'Lace Strap', 'Pearl White', 'Bodycon',110.0)
var conClothing1 = new Clothing ('img/d2.jpg', 'Lace Strap', 'Culombia Blue','Maxi',100.0)
var conClothing2 = new Clothing ('img/d3.jpg', 'Lace Short Sleeve', 'Cherry Blossom Pink', 'Pouf',160.0)
var conClothing3 = new Clothing ('img/d4.jpg', 'Lace Vneck', 'Brunswick Green','Apron',290.0)
var conClothing4 = new Clothing ('img/d5.png', 'Chiffon Over Lace Strapless', 'Black Bronze (metallic)', 'Strapless Gala',200.0)
var conClothing5 = new Clothing ('img/d6.png', 'Georgette Strapless', 'Amarath Red', 'Trumpet',90.0)



console.log( conClothing, conClothing1, conClothing2, conClothing3, conClothing4, conClothing5 )

var dress00 = {
    image:'img/d1.jpg',
    style: 'Lace Strap',
    colorName:'Pearl White',
    length:'Bodycon',
    price:'110.0',
    salesTax: function(){
        return this.price/.10
    }
}

var dress01 = {
    image:'img/d2.jpg',
    style: 'Lace Strap',
    colorName:'Culombia Blue',
    length:'Maxi',
    price:'100.0',
    salesTax: function(){
        return this.price/.1
    }

}
var dress02 = {
    image:'img/d3.jpg',
    style: 'Lace Short Sleeve',
    colorName:'Cherry Blossom Pink',
    length:'Pouf',
    price:'160.0',
    salesTax: function(){
        return this.price/.2
    }
}
var dress03 = {
    image:'img/d4.jpg',
    style: 'Lace Vneck',
    colorName:'Brunswick Green',
    length:'Apron',
    price:'290.0',
    salesTax: function(){
        return this.price/.25
    }
}

var dress04 = {
    image:'img/d5.png',
    style: 'Chiffon Over Lace Strapless',
    colorName:'Black Bronze (metallic)',
    length:'Strapless Gala',
    price:'200.0',
    salesTax: function(){
        return this.price/.5
    }
}
var dress05 = {
    image:'img/d6.png',
    style: 'Georgette Strapless',
    colorName:'Amarath Red',
    length:'Trumpet',
    price:'90.0',
    salesTax: function(){
        return this.price/.5
    }
}

console.log(dress00.salesTax(), dress01.salesTax(), dress02.salesTax(), dress03.salesTax(), dress04.salesTax(), dress05.salesTax())

function Clothing(image, style, colorName, length, price ){
    this.image = image;
    this.style = style
    this.colorName = colorName;
    this.length = length;
    this.price = price;
    this.salesTax = function(){
        return this.price/.5
    };
}

var conClothing = new Clothing ('img/d1.jpg', 'Lace Strap', 'Pearl White', 'Bodycon',110.0)
var conClothing1 = new Clothing ('img/d2.jpg', 'Lace Strap', 'Culombia Blue','Maxi',100.0)
var conClothing2 = new Clothing ('img/d3.jpg', 'Lace Short Sleeve', 'Cherry Blossom Pink', 'Pouf',160.0)
var conClothing3 = new Clothing ('img/d4.jpg', 'Lace Vneck', 'Brunswick Green','Apron',290.0)
var conClothing4 = new Clothing ('img/d5.png', 'Chiffon Over Lace Strapless', 'Black Bronze (metallic)', 'Strapless Gala',200.0)
var conClothing5 = new Clothing ('img/d6.png', 'Georgette Strapless', 'Amarath Red', 'Trumpet',90.0)

