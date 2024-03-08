const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { 
    style:"decimal"
})
const FormatPop = (pop:number) => {
  return CURRENCY_FORMATTER.format(pop)  ;
}

export default FormatPop;