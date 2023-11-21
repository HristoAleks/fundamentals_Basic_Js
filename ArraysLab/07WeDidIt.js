function demo(arr1,arr2){
    let arrBig = [];
    let arrSmall = [];
    let sum = 0;
    let fail = false;
    let index = 0;
    if(arr1.length <= arr2.length){
        arrBig = arr2;
        arrSmall = arr1;
    }else{
        arrBig = arr1;
        arrSmall = arr2;
    }

  for(let i = 0; i < arrBig.length; i++){
    let ch = Number(arrBig[i])
    if(arrBig[i] == arrSmall[i]){
        sum += Number(arr1[i]);
    }else{
        index = i;
        fail = true;
        break;
    }
  }
  if(fail){
    //console.log(`Arrays are identical. Sum: ${sum}`);
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }else{
    console.log(`Arrays are identical. Sum: ${sum}`);
    //console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
  
}

demo(['1','2','3','4','5'], ['1','2','4','4','5'])