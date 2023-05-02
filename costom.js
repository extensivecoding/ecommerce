function getproduct() {
  let str = "";
  axios.get("https://fakestoreapi.com/products").then((res) => {
    //console.log(res.data)
    res.data.forEach((items, index) => {
      str += `<div class="col-sm-4 mt-3 ">
            <div class="card">
  <img class="card-img-top pimage" src="${items.image}" alt="Card image">
  <div class="card-body">
  
    <h4 class="card-text">Catagory:${items.category}.</h4>
    <p class="card-text">Rs:${items.price}.</p>
    <a href="#" onclick="singleProductDetail(${items.id})" data-toggle="modal" data-target="#myModal" class="btn btn-primary">See Profile</a>
  </div>
</div>
            </div>`
    })
    document.getElementById("result").innerHTML = str;
  }).catch((error) => {
    console.log(error)
  })
}
getproduct();
async function singleProductDetail(c){
console.log(c)
let res= await axios.get(`https://fakestoreapi.com/products/${c}`);
console.log(res.data)
document.getElementById("title").innerHTML=res.data.title;
document.getElementById("productimage").innerHTML=`<img src=${res.data.image} class='img-fluid' " />`;
document.getElementById("category_name").innerHTML=res.data.category;
document.getElementById("desc").innerHTML=res.data.description;
document.getElementById("price").innerHTML=res.data.price;
document.getElementById("rating").innerHTML=res.data.rating.rate;

}
async function getAllCategory(){
  let res=await axios.get(`https://fakestoreapi.com/products/categories`)
  let str=" ";
res.data.forEach((items)=>{
  str+=`<li class="nav-item">
  <a class="nav-link" href="#"  onclick='getcategory(this.innerText)'>${items}</a>
</li>`
});
document.getElementById("category_data").innerHTML=str;
}
getAllCategory();
function getcategory(b){
  console.log(b)
  let str = "";
  axios.get(`https://fakestoreapi.com/products/category/${b}`).then((res) => {
    //console.log(res.data)
    res.data.forEach((items, index) => {
      str += `<div class="col-sm-4 mt-3 ">
            <div class="card">
  <img class="card-img-top pimage" src="${items.image}" alt="Card image">
  <div class="card-body p-4">
  
    <p class="card-text">Catagory:${items.category}.</p>
    <p class="card-text">Rs:${items.price}.</p>
    <a href="#" onclick="singleProductDetail(${items.id})" data-toggle="modal" data-target="#myModal" class="btn btn-primary">See Profile</a>
  </div>
</div>
            </div>`
    })
    document.getElementById("result").innerHTML = str;
  })
  
}