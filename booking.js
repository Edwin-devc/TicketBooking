const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form); //collecting the form data
    //assigning form data
    const firstname = formData.get("username");
    const secondname = formData.get("otherNames");
    const email = formData.get("emailID");
    const contact = formData.get("telNo");
    const data = {
        firstname: firstname,
        secondname: secondname,
        email: email,
        contact: contact,
        ticketId: generateTicketId()
    };
    validateForm();
    displayTicketIdGenerated();
    form.reset();
})


//functions
const validateForm = () => {
    //surname
    const username = document.inputForm.username.value;
    const sname = document.getElementById("sname");
    if(username.trim() == "")
    {
        const errormsg = document.getElementById("errormsg_surname");
        errormsg.innerHTML = "Surname can't be blank!";
        errormsg.style.color = 'red';
        sname.style.outlineColor = 'red';
    } else {
        const errormsg = document.getElementById("errormsg_surname");
        errormsg.innerHTML = "";
        sname.style.outlineColor = 'rgb(144, 246, 35)';
        sname.style.outlineWidth = '2px';
    }
    //other names
    const otherNames = document.inputForm.otherNames.value;
    const secondName = document.getElementById("secondName");
    if (otherNames.trim() == "")
    {
        const errormsg = document.getElementById("errormsg_otherNames");
        errormsg.innerHTML = "Other names can't be blank!";
        errormsg.style.color = 'red';
        secondName.style.outlineColor = 'red';
    } else {
        const errormsg = document.getElementById("errormsg_otherNames");
        errormsg.innerHTML = "";
        secondName.style.outlineColor = 'rgb(144, 246, 35)';
        secondName.style.outlineWidth = '2px';
    }
    //email address
    const emailID = document.inputForm.email.value;
    const emailAddress = document.getElementById("emailAddress")
    if (emailID.trim() == "")
    {
        const errormsg = document.getElementById("errormsg_email");
        errormsg.innerHTML = "Email address can't be blank!";
        errormsg.style.color = 'red';
        emailAddress.style.outlineColor = 'red';
    } else {
        const errormsg = document.getElementById("errormsg_email");
        errormsg.innerHTML = "";
        emailAddress.style.outlineColor = 'rgb(144, 246, 35)';
        emailAddress.style.outlineWidth = '2px';
    }
    //telephone number
    const telNo = document.inputForm.telno.value;
    const telphoneNumber = document.getElementById("telephone_number");
    if (telNo.trim() == "")
    {
        const errormsg = document.getElementById("errormsg_tel");
        errormsg.innerHTML = "Telephone number can't blank!";
        errormsg.style.color = 'red';
        telphoneNumber.style.outlineColor = 'red';
    } else if ((telNo[0] + telNo[1] + telNo[2] + telNo[3]) != '+256')
    {
        const errormsg = document.getElementById("errormsg_tel");
        errormsg.innerHTML = "Enter a valid telephone number!";
        errormsg.style.color = 'red';
        telphoneNumber.style.outlineColor = 'red';
    } else {
        const errormsg = document.getElementById("errormsg_tel");
        errormsg.innerHTML = "";
        telphoneNumber.style.outlineColor = 'rgb(144, 246, 35)';
        telphoneNumber.style.outlineWidth = '2px';
    }
}

//generation of ticketID
const generateTicketId = () => {
    const ticket = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];
    let getRandomNumber = () => {
        return Math.floor(Math.random() * ticket.length);
    }
    let ticketNumber = "#";
    for (i=0; i<6; i++) {
        ticketNumber += ticket[getRandomNumber()];
    }
    return ticketNumber;
}
//Displaying ticket Number 
const displayTicketIdGenerated = () => {
    const username = document.inputForm.username.value;
    const otherNames = document.inputForm.otherNames.value;
    const emailID = document.inputForm.email.value;
    const telNo = document.inputForm.telno.value;
    if(username.trim() != "" && otherNames.trim() != "" && emailID.trim() != "" && telNo.trim() != "" && (telNo[0] + telNo[1] + telNo[2] + telNo[3]) == '+256') {
        window.alert(generateTicketId());
    }
}
//getting form data 
const getData = () => {

}
