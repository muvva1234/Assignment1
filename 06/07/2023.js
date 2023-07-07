// 
let obj  = {
    name1 : 'Mahesh',
    role :'Admin',
    val :30,
    getData : function() {
      console.log('Hi this is ' + this.name1)
      let address = 'besant'
      let that = obj
      let innerObject = {
        getAdd :function() {
        console.log(this)
        console.log(that.val)
      }
      }
      innerObject.getAdd()
    }
  }
  
  obj.getData()
  
  //console.log(window)