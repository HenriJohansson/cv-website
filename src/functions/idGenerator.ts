
const ids: Array<string> = [];

export const getNewId = (idPrefix: string): string => {
  const id = getIdsIndex(idPrefix)
  if(id < 0){
    ids.push(idPrefix);
  }
  //Slice off the string, add one to the resulting string and add it back to the prefix
  ids[id] = idPrefix + (+ids[getIdsIndex(idPrefix)].slice(idPrefix.length) + 1);
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
