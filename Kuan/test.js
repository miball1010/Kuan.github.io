
const a=(status)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(status){
            resolve();
        }
        else{
            reject();
        }
    },1000);

});
};

a(true)
.then((hi) => {
    console.log();
    return a(true);
})
.then(res=>{
    console.log(res);

})
.catch(()=>{
    console.log("no");
});