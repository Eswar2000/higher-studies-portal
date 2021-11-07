const xmlParser=require('xml-js');

const backendService = async (reqType, endpoint, reqBody, username, authHash) => {
    const reqOptions={
        method:reqType,
        headers:{'Content-Type':'application/xml','authhash':authHash,'username':username},
        body:reqType==='GET'?null:xmlParser.js2xml(reqBody,{compact:true})
    }

    let response= await fetch("http://localhost:6969/higher_studies_backend_war_exploded"+endpoint,reqOptions);

    let reader = response.body.getReader();

    let responseBodyString="";

    while(true){
        const {value,done}=await reader.read();
        if(done){
            break;
        }
        responseBodyString+=new TextDecoder().decode(value);
    }

    let data=xmlParser.xml2js(responseBodyString,{compact:true});
    data.statusCode=response.status;
    return data;
}

export default backendService;