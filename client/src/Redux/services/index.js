var services={};

services.loginWithGoogle = async(data)=>{
    try{
        console.log("data in services =====>",data)
        const response = await fetch('http://localhost:8000/login',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(data)
        })
        return response;
    }catch(err){
        console.log("errror in services",err,data);
        return err;
    }
}

export default services;