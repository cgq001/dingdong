
const car = {
	namespaced: true,
    state: {
        car:[] ,//购物车数组
		allPrice: 0.00,  //选中商品的总价格
		allCheck: false , //是否全选
		order: [] ,//订单
		ids: null, // 地址选择ID
		classIndex: -1 //分类选中页码
    },
    mutations :{
		setIds(state,id){
			state.ids = id;
			console.log(id)
		},
		setClass(start,id){
			start.classIndex = id
		},
	   addCar(state,shopJson){  //添加购物车
		    let src = state.car
			let srcOff = src.some(item=>{
			  return item.id === shopJson.id
		   })
		   
		   if(srcOff){
			   for(let i=0;i<src.length;i++){
				   if(src[i].id === shopJson.id){
					   src[i].number = src[i].number+1
				   }
			   }
		   }else{
			   if(src.length > 0){
				   // 
				   src = [...src,shopJson]
				  
			   }else{
				   src.push(shopJson)
				   // 
			   }
			   
		   }
			state.allCheck = src.every(item=>{
				return item.checkeds === true
			})
		   state.car = src
	   },
	   changeRadio(state,id){  //选中 与 取消
		    let src = state.car
			for(let i=0;i<src.length;i++){
				if(src[i].id === id){
					src[i].checkeds = ! src[i].checkeds
				}
			}
			console.log(src)
			let allPrice = 0
			for(let i=0; i<src.length; i++){
				if(src[i].checkeds){
					allPrice += src[i].price * src[i].number
				}
			}
			
			state.allCheck = src.every(item=>{
				return item.checkeds === true
			})
			
			state.allPrice = allPrice
			
					
			state.car = src
	   },
	   removeNumber(state,id){ //购物车--
		    let src = state.car
			for(let i=0;i<src.length;i++){
				if(src[i].id === id){
					if(src[i].number >1){
						src[i].number = src[i].number -1
					}else{
						src.splice(i,1)
						uni.showToast({
						    title: '已删除',
							icon: 'none',
						    duration: 2000
						})
					}
					
				}
			}
			
			let allPrice = 0
			for(let i=0; i<src.length; i++){
				if(src[i].checkeds){
					allPrice += src[i].price * src[i].number
				}
			}
			
			state.allCheck = src.every(item=>{
				return item.checkeds === true
			})
			
			state.allPrice = allPrice
			
			state.car = src
	   },
	   addNumber(state,id){  //购物车 ++
		    let src = state.car
			for(let i=0;i<src.length;i++){
				if(src[i].id === id){
					if(src[i].number < 10){
						src[i].number = src[i].number + 1
					}else{
						src[i].number = 10
						uni.showToast({
						    title: '最多购买十件',
							icon: 'none',
						    duration: 2000
						})
					}
				}
			}
			
			let allPrice = 0
			for(let i=0; i<src.length; i++){
				if(src[i].checkeds){
					
					allPrice += src[i].price * src[i].number
				}
			}
			state.allPrice = allPrice
			
			state.car = src
	   },
	   allCheck(state){ //全选 或 全不选
			if(state.car.length === 0){
				state.allCheck = false
				return false;
			}
		   if(state.allCheck === false){
			   let src = state.car
			   for(let i=0; i<src.length; i++){
				   src[i].checkeds = true
			   }
			   let allPrice = 0
			   for(let i=0; i<src.length; i++){
			   	if(src[i].checkeds){
			   		allPrice += src[i].price * src[i].number
			   	}
			   }
			   
			   state.allCheck = src.every(item=>{
			   	return item.checkeds === true
			   })
			   
			   state.allPrice = allPrice
			   state.car = src
		   }else{
			   let src = state.car
			   for(let i=0; i<src.length; i++){
					src[i].checkeds = false
			   }
			  
			   
			   
			   state.allCheck = src.every(item=>{
			   	return item.checkeds === true
			   })
			   
			   state.allPrice = 0.00
			   state.car = src
		   }
	   },
	   addOrder(state,src){  //提交订单的 商品数组
		   state.order = src
	   },
	   removeCheck(state){
		   let src = state.car
		   let car = src.filter(item=>{
			   return item.checkeds === false
		   })
		   state.car = car
		   state.allPrice = 0.00
		   state.allCheck = false
	   }
    },
    actions:{

    },
}

export default car;