  const testDate=(req,res,next)=>{
    const date=new Date();
    const day=date.getDay();
    const hour=date.getHours();
  if(day>5|| hour<9 || hour>17){
    res.send("<h1> we are closed </h1>")

  }else{

  }
}
  module.exports=testDate