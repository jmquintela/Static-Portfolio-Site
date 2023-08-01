
export function createGallery(GalleryLength, padding, filePath, fileName, ext ) {
    let fileNames = [...Array(GalleryLength).keys()].map(x => x+1);
    let gallery=[];

     gallery =  fileNames.map( (item, index, arr) =>  {
     return {
        "filePath" : [ filePath + fileName + String(item).padStart(padding,"0")+ext].toString() ,
        "name": fileName+"_"+String(item) ,
        "id": index
                 }
    }) 
  
return gallery;
}



