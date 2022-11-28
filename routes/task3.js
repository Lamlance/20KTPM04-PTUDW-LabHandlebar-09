const {products} = require("../models/data");

function task3Handler(req, res) {
  const queryFilter = parseInt(req.query.categoryFilter);
  
  let filteredProducts = []
  
  if(queryFilter && !isNaN(queryFilter)){
    filteredProducts = products.filter((item)=>{
      return (item.category === queryFilter);
    })
  }else{
    filteredProducts = products;
  }

  res.render("task3",{
    products: filteredProducts
  });
}

module.exports =  task3Handler;