const fillMember2Button = document.getElementById('fillMember2');
        const member2Form = document.getElementById('member2Form');
        const submit = document.getElementById('submit');

        fillMember2Button.addEventListener('click', () => {
            member2Form.style.display = 'block';
            fillMember2Button.style.display = 'none';
            submit.style.display = 'block';
        });
        function validateAkgecEmail(email) {
    const regex = /(\d{7,8})/;
    const match = email.match(regex);
    if (!match) {
        alert("Enter your college email.");
        return false;
    }
    const studentNo = match[1];
    if (!(studentNo.startsWith("22") || studentNo.startsWith("23") || studentNo.startsWith("24"))) {
        alert(`Invalid student number '${studentNo}'. Must start with 22, 23, or 24.`);
        return false;
    }
    return true;
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }
    return true;
}

function validateHackerrankId(id) {
    const hackerrankRegex = /^[a-zA-Z0-9_.]+$/;
    if (!hackerrankRegex.test(id)) {
        alert("Invalid HackerRank ID.");
        return false;
    }
    return true;
}

function validateName(name) {
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(name)) {
        alert("Name must have alphabets only.");
        return false;
    }
    return true;
}

function validateStudentNumber(studentNo) {
    if (!(studentNo.startsWith("22") || studentNo.startsWith("23"))) {
        alert("Student number must be valid (start with 22 or 23).");
        return false;
    }
    return true;
}

function validateForm() {
    const member1Email = document.getElementById('member1Email').value;
    const member1Phone = document.getElementById('member1Phone').value;
    const member1Hackerrank = document.getElementById('member1Hackerrank').value;
    const member1Name = document.getElementById('member1Name').value;
    const member1StudentNo = document.getElementById('member1StudentNo').value;

    if (!validateAkgecEmail(member1Email)) return false;
    if (!validatePhone(member1Phone)) return false;
    if (!validateHackerrankId(member1Hackerrank)) return false;
    if (!validateName(member1Name)) return false;
    if (!validateStudentNumber(member1StudentNo)) return false;

    const member2Form = document.getElementById('member2Form');
    if (member2Form.style.display === 'block') {
        const member2Email = document.getElementById('member2Email').value;
        const member2Phone = document.getElementById('member2Phone').value;
        const member2Hackerrank = document.getElementById('member2Hackerrank').value;
        const member2Name = document.getElementById('member2Name').value;
        const member2StudentNo = document.getElementById('member2StudentNo').value;

        if (!validateAkgecEmail(member2Email)) return false;
        if (!validatePhone(member2Phone)) return false;
        if (!validateHackerrankId(member2Hackerrank)) return false;
        if (!validateName(member2Name)) return false;
        if (!validateStudentNumber(member2StudentNo)) return false;
    }

    return true;
}

document.getElementById('teamForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        window.location.href = "index2.html";
    }
});
