export const Utils = {
  showError(err: string) {
    console.log(err)
  },
  isCorrectType<T>(type: any, byArr?: T[]): type is T {
    if (!!byArr) {
      // @ts-ignore
      return byArr.includes(type)
    }

    return !!type
  },
}
