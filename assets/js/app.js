const stdForm = document.getElementById('stdForm');
const fnameControl= document.getElementById("fname");
const lnameControl = document.getElementById("lname");
const emailControl = document.getElementById("email");
const contactControl = document.getElementById("contact");
const stdTable = document.getElementById("stdTable");

function generateNumericId() {
    const timestamp = Date.now(); // Get the current timestamp (in milliseconds)
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random number (0 to 9999)
    return `${timestamp}${randomNum}`; // Concatenate both to form the ID
  }


let stdArr = [
    {
        fname : "Suresh ",
        lname : "Patil",
        email : "sureshpatil.svp@gmail.com",
        contact : 9168885222,
        id:generateNumericId(),
    }
];

const onEdit = (e) => {
    console.log(e);
}

const onRemove = (e) => {
    console.log(e);
}

const templateStd = (arr) => {
    let result ="";
    arr.forEach((ele,i) => {
        result += `
                    <tr style="line-height:34px" id=${ele.id}>
                        <td>${i+1}</td>
                        <td>${ele.fname}</td>
                        <td>${ele.lname}</td>
                        <td>${ele.email}</td>
                        <td>${ele.contact}</td>
                        <td><button type="button" class="btn btn-outline-primary" onClick=onEdit(this)>Edit</button></td>
                        <td><button type="button" class="btn btn-outline-danger" onClick=onRemove(this)>Remove</button></td>
                    </tr>
                  `;
    });
    stdTable.innerHTML = result;
}
templateStd(stdArr);

const createTr = (obj) => {
    let tr = document.createElement("tr");
    tr.id = obj.id;
    tr.innerHTML = `
                    <td>${stdArr.length}</td>
                    <td>${obj.fname}</td>
                    <td>${obj.lname}</td>
                    <td>${obj.email}</td>
                    <td>${obj.contact}</td>
                    <td><button type="button" class="btn btn-outline-primary" onClick=onEdit(this)>Edit</button></td>
                    <td><button type="button" class="btn btn-outline-danger" onClick=onRemove(this)>Remove</button></td>
                    `;
    stdTable.append(tr);
}


const onStdAdd = (eve) => {
    eve.preventDefault();
    let newStd = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact: contactControl.value,
        id:generateNumericId(),
    }
    stdArr.push(newStd);
    console.log(newStd);
    eve.target.reset();
    createTr(newStd);
}


stdForm.addEventListener("submit", onStdAdd);