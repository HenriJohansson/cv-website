export default (defaultName: string ,condition: boolean, conditionalName: string): string => {
  /**
   * @remarks
   * replaces difficult syntax using `${defaultName} ${condition ? conditionalName : ''}` .
   *
   * @param defaultName - Name that the class retains if the condition is false
   * @param condition - Condition that decides wheather defaultName or conditionalName is used
   * @param conditionalName - The name that defaultName will be replaced with.
   * @returns If the condition is true return conditionalName else return defaultName
   */
  if(condition === true){
    return conditionalName
  } else {
    return defaultName
  }
}
export const none = (condition: boolean, className: string): string => {
  if(condition === true){
    return className
  } else {
    return ""
  }
}
