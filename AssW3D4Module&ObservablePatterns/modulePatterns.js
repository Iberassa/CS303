const shoppingCart = (function () {
    let basket = [];
    return {
        upsertItem(product) {
            if (basket.length === 0) {
                basket.push(product);
            } else {
                for (let item of basket) {
                    if (item.id === product.id) {
                        item.count++;
                        return basket;
                    }
                }
                basket.push(product);
            }
            return basket;
        },
        getItemsCount() {
            return basket.length
        },
        getTotalPrice() {
            let total = 0;
            for(let item of basket){
                total+=item.price;
            }
            return total;
        },
        removeItemById(id) {
            basket.map((item,index)=>{
                if(item.id===id){
                    basket.splice(index,1)
                }
            })
            return basket
            }
        }
    });

