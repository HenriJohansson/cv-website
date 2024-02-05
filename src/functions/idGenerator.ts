
const ids: Array<string> = [];

export const addNewId = (idPrefix: string): void => {
  if(getIdsIndex(idPrefix) === -1 ){
    ids.push(idPrefix)
  }
}

export const getNewId = (str: string): string => {
  const id = getIdsIndex(str)
  if(id < 0){
    throw new Error(`No such id included in the ids try adding your id using
    addNewId(idPrefix: string)
    or using correct id prefix`)
  }
  //Slice off the string, add one to the resulting string and add it back to the prefix
 ids[id] = str + (+ids[getIdsIndex(str)].slice(str.length) + 1)
  return ids[id];
}

//Local function
function getIdsIndex (idPrefix: string): number {
  for(let i: number = 0 ; i < ids.length;  i++) {
    if(ids[i].startsWith(idPrefix)){
      return i
    }
  }
  return -1
}

export const _test = {
  getIdsIndex, ids
}
