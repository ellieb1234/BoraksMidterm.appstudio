let bucketList=[]
let newItem=prompt("Add an item to the bucket list.  To see the bucket list type 'LIST'.  To end the program type 'STOP'.")

while (newItem!='STOP') {
  if(newItem != 'LIST') {
    bucketList.push(newItem)
  }
  else {
    for (i=0; i<bucketList.length; i++) {
      console.log(bucketList[i])
    }  
  }
  newItem=prompt("Add an item to the bucket list.  To see the bucket list type 'LIST'.  To end the program type 'STOP'.")
}