import _ from "lodash";
export function amountByPercent(percent:number, total:number) {
  if (percent === 0 || total === 0) {
    return 0;
  }
  return _.round((parseFloat(`${percent}`) / 100) * total);
}

export function percentByAmount(amount:number, total:number) {
  if (amount === 0 || total === 0) {
    return 0;
  }
  return _.round((parseFloat(`${amount}`) / total) * 100, 2);
}

export function formatCurrency(value, currency = "IDR") {
  return value.toLocaleString("en-US", { style: "currency", currency });
}

export function formatPercent(value) {
  let percent = value + " %";
  return percent;
}

export function calculateTax(
  value:number,
  values:any,
  variable:string,
  type:string,
  index:number,
  setFieldValue:any,
) {
  let taxPercent = 0;
  let taxAmount = 0;
  if (isNaN(value)) {
    value = 0;
  }
  if (type === "percent") {
    taxPercent = parseFloat(`${value}`);
  } else if (type === "amount") {
    taxAmount = parseFloat(`${value}`);
  }
  if (index >= 0) {
    const totalPrice = parseFloat(
      values[variable][index].unitPrice ) * parseFloat(values[variable][index].qty)
   
    const discountAmount = parseFloat(values[variable][index].discountAmount);
    if (type === "percent") {
      taxAmount = amountByPercent(taxPercent, totalPrice - discountAmount);
    } else if (type === "amount") {
      taxPercent = percentByAmount(taxAmount, totalPrice - discountAmount);
    }
    const dataItem = [...values[variable]];
    dataItem[index].taxPercent = taxPercent;
    dataItem[index].taxAmount = taxAmount;
    setFieldValue(variable, dataItem);
  } else {
    const discountAmount = parseFloat(values.discountAmount);
    const subTotal = values.subTotal;
    if (type === "percent") {
      taxAmount = amountByPercent(taxPercent, subTotal - discountAmount);
    } else if (type === "amount") {
      taxPercent = percentByAmount(taxAmount, subTotal - discountAmount);
    }
    setFieldValue("taxAmount", taxAmount);
    setFieldValue("taxPercent", taxPercent);
    setFieldValue("grandTotal", subTotal - discountAmount + taxAmount);
  }
}

export function calculateDiscount(
  value:number,
  values:any,
  variable:string,
  type:string,
  index:number,
  setFieldValue:any,
) {
  let discountPercent = 0;
  let discountAmount = 0;
  let grandTotal = 0;
  let taxAmount = 0;

  if (isNaN(value)) {
    value = 0;
  }
  if (type === "percent") {
    discountPercent = parseFloat(`${value}`);
  } else if (type === "amount") {
    discountAmount = parseFloat(`${value}`);
  }
  if (index >= 0) {
    const dataItem = [...values[variable]];
    const totalPrice = parseFloat(values[variable][index].unitPrice) * parseFloat(values[variable][index].qty)
    const taxPercent = parseFloat(values[variable][index].taxPercent);
    if (type === "percent") {
      discountAmount = amountByPercent(discountPercent, totalPrice);
    } else if (type === "amount") {
      discountPercent = percentByAmount(discountAmount, totalPrice);
    }
    dataItem[index].discountPercent = discountPercent;
    dataItem[index].discountAmount = discountAmount;
    if (taxPercent > 0) {
      const taxAmount = amountByPercent(
        taxPercent,
        totalPrice - discountAmount
      );
      dataItem[index].taxAmount = taxAmount;
    }
    setFieldValue(variable, dataItem);
  } else {
    const subTotal = values.subTotal;
    const taxPercent = parseFloat(values.taxPercent);
    if (type === "percent") {
      discountAmount = amountByPercent(discountPercent, subTotal);
    } else if (type === "amount") {
      discountPercent = percentByAmount(discountAmount, subTotal);
    }

    setFieldValue("discountAmount", discountAmount);
    setFieldValue("discountPercent", discountPercent);
    if (taxPercent > 0) {
      taxAmount = amountByPercent(taxPercent, subTotal - discountAmount);
      setFieldValue("taxAmount", taxAmount);
    }
    let totalAddCost = 0;
    if (typeof values.additionalCost !== "undefined") {
      for (const addCost of values.additionalCost) {
        totalAddCost += addCost.costPrice;
      }
    }
    grandTotal = subTotal - discountAmount + taxAmount;
    grandTotal += totalAddCost;
    setFieldValue("grandTotal", grandTotal);
  }
}

export function formatDate(dateImp, withTime = false) {
  if (dateImp === "0001-01-01T06:42:04+06:42") {
    return "";
  }
  var date = new Date(dateImp);
  let dateString =
    date.getFullYear() +
    "-" +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + date.getDate()).slice(-2);

  if (withTime) {
    dateString +=
      ", " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2) +
      ":" +
      ("00" + date.getSeconds()).slice(-2);
  }

  return dateString;
}

export function formatTime(timeImp:Date) {
  var time = new Date(timeImp);
  var h = ("00" + time.getHours()).slice(-2);
  var m = ("00" + time.getMinutes()).slice(-2);
  var pm = parseInt(h) - 12 <= 9 ? "0" + (parseInt(h) - 12) : parseInt(h) - 12;
  let timeString = parseInt(h) > 11 ? pm + ":" + m + " PM" : h + ":" + m + " AM";

  return timeString;
}

export function calculatePrice(setFieldValue) {}
