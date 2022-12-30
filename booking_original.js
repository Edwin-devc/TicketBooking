const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
    if(username) {
        window.alert(generateTicketID());
    }
    
})

//fuctions

const validateForm = () => {
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
const generateTicketID = () => {
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

