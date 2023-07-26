employee={}
function add(){
    if(floatingInputId.value && floatingInputName.value && floatingInputDesg.value && floatingInputSalary.value){
        // alert("All inputs are present")
        employee.id = floatingInputId.value
        employee.name = floatingInputName.value
        employee.desg = floatingInputDesg.value
        employee.salary = floatingInputSalary.value
        console.log(employee);
        //permanently store employee
        localStorage.setItem("employee",JSON.stringify(employee))
        //redirect to showEmp.html
        window.location = "showEmp.html"
    }
    else{
        alert("please fill all the details")
    }
}

//get data from local storage
if(localStorage.getItem("employee")){
    var displayData = JSON.parse(localStorage.getItem("employee"))
    console.log(displayData);
    display.innerHTML = `
    <div class="card shadow" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${displayData.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">ID: ${displayData.id}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Designation: ${displayData.desg}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Salary: ${displayData.salary}</h6>
  </div>
</div>
    `
}
else{
    display.innerHTML = `<h1 class="text-center text-danger">Nothing to display</h1>`
}

function emp(){
    window.location = "addEmp.html"
}