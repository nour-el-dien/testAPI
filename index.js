let x = new XMLHttpRequest()


x.open("GET", "https://newsapi.org/v2/everything?q=apple&from=2025-10-20&to=2025-10-20&sortBy=popularity&apiKey=7c59ca07324c4ab2bae434589b8bcbe3");

x.send()

x.addEventListener('readystatechange',function(){
    console.log(x.readyState);
     if (x.readyState == 4 && x.status == 200) {
        allData = JSON.parse(x.response).articles;
        
        display()
  
        } 
})


function display(list){
    let cartona = `` ;
        for (let i = 0; i < allData.length; i++) {
        cartona += `<div class="col-md-4">
                <div class="item">
                    <img src="${allData[i].urlToImage}" class="w-100" alt="">
                    <h3>${allData[i].title}</h3>
                </div>
            </div>`
    }
    document.querySelector("#myData").innerHTML = cartona


}
