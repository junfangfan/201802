class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp); // 42
  }
}



for(var i = 0; i<3 ;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },10)
    })(i)
}