const FormatPrice=({price})=>{
return Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INr",
    minimumFractionDigits:2,
}).format(price/100);
}
export default FormatPrice;