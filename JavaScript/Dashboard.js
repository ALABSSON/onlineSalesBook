const SelectDate = document.getElementById('SelectDate')
const SubmitDate = document.querySelector('.SubmitDate')
const PastDate = document.querySelector('.PastDate')




    // Local Storage For Date

let DataArray = JSON.parse(localStorage.getItem("DataInfo")) || []

SubmitDate.onclick = ()=>{
if (!SelectDate.value) {
    alert('Insert Date')
} else {
    DataArray.push(SelectDate.value)
    localStorage.setItem("DataInfo", JSON.stringify(DataArray))
    window.location.reload()
}
}

{
    DataArray.length ? 
    DataArray.forEach((elemen) => {
        const adding = `
                <div class="PastDateList">${elemen}</div>

        `
        PastDate.innerHTML += adding
    }) : PastDate.innerHTML += "Sorry no data"
}





// Income Part Code

function Multiply() { 

const QTY = document.getElementById('QTY')
const Price = document.getElementById('Price')
const Amount = document.getElementById('Amount')

Amount.value = Number(QTY.value) * Number(Price.value)

}



// Local Storage for Income 

const AllIncome = document.querySelector('.InconeDivTwoDesOne4')
const Description = document.getElementById('Description')
const QTY = document.getElementById('QTY')
const Price = document.getElementById('Price')
const Amount = document.getElementById('Amount')
// const SumTotal = document.getElementById('SumTotal')
// const MultiAmount = document.querySelector('.MultiAmount')


let IncomeArray = JSON.parse(localStorage.getItem("IncomeInfo")) || []

document.querySelector('.MovetoIncom').onclick = function () {

if (!Description.value, !QTY.value, !Price.value) {
    alert('Insert Sales Details')
    } else {
        IncomeArray.push({Description:Description.value, QTY:QTY.value, Price:Price.value, Amount:Amount.value})
        localStorage.setItem("IncomeInfo", JSON.stringify(IncomeArray))
        window.location.reload()
    }
}


{
    IncomeArray.length ? 
    IncomeArray.forEach((element) => { 
        const adding2 = `
        <div class="InconeDivTwoDesOne pastelistttttt"> 
                <div class="PasteIcomeList">${element.Description}</div>
                <div class="PasteIcomeList">${element.QTY}</div>
                <div class="PasteIcomeList">${element.Price}</div>
                <div class="PasteIcomeList">${element.Amount}</div>
        </div>
        `
        AllIncome.innerHTML += adding2
    }) : AllIncome.innerHTML += "Sorry no data"
}


// {
//     IncomeArray.length ? 
    
//         AllIncome.innerHTML += `
//         <div class="InconeDivTwoDesOne">
//             <input type="text" value='${Description.value}'>
//             <input type="text" value='${QTY.value}'>
//             <input type="text" value='${Price.value}'>
//             <input type="text" value='${Amount.value}' onblur="AddAllTotal()" class='MultiAmount'>
//         </div>
//     `

//      : AllIncome.innerHTML += "Sorry no data"
// }





// Expenditure Part 


function ExpendMultiply() { 

    const ExpendQTY = document.getElementById('ExpendQTY')
    const ExpendPrice = document.getElementById('ExpendPrice')
    const ExpendAmount = document.getElementById('ExpendAmount')
    
    ExpendAmount.value = Number(ExpendQTY.value) * Number(ExpendPrice.value)
    
    }
    
    
    
    
    document.querySelector('.MoveToExpend').onclick = function () {
        
        const AllExpenditure = document.querySelector('.AllExpenditure')
        const ExpendDescription = document.getElementById('ExpendDescription')
        const ExpendQTY = document.getElementById('ExpendQTY')
        const ExpendPrice = document.getElementById('ExpendPrice')
        const ExpendAmount = document.getElementById('ExpendAmount')

        const SumTotal = document.getElementById('SumTotal')
        const MultiAmount = document.querySelector('.MultiAmount')
        
        
        if (!AllExpenditure.value, !ExpendQTY.value, !ExpendQTY.value) {
            alert('Insert Sales Details')
        } else {
            AllExpenditure.innerHTML += `
            <div class="InconeDivTwoDesOne">
                <input type="text" value='${ExpendDescription.value}'>
                <input type="text" value='${ExpendQTY.value}'>
                <input type="text" value='${ExpendPrice.value}'>
                <input type="text" value='${ExpendAmount.value}' onblur="AddAllTotal()" class='MultiAmount'>
            </div>
        `
        
        SumTotal.innerHTML += MultiAmount.value
    } 
    }


