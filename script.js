let names=["Benet","Joel","Annie","Zera","kayal","james"]
for(let i=0;i<names.length;i++){
    let namesindex=names[i]
   
    if(namesindex.startsWith('j') || namesindex.startsWith('J') ){
        console.log("Goodbye "+namesindex);
    }
    else{
        console.log("Hello "+namesindex)
    }
}