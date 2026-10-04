const form = document.getElementById("enrollForm");
const result = document.getElementById("result");

function enroll(courseName) {

    document.getElementById("course").value = courseName;

    document.querySelector(".enrollment").scrollIntoView({
        behavior: "smooth"
    });
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName =
        document.getElementById("studentName").value;

    const email =
        document.getElementById("email").value;

    const course =
        document.getElementById("course").value;

    result.innerHTML = `
        <div class="success">

            <h3>✓ Enrollment Successful!</h3>

            <p>
                <strong>Student:</strong>
                ${studentName}
            </p>

            <p>
                <strong>Email:</strong>
                ${email}
            </p>

            <p>
                <strong>Course:</strong>
                ${course}
            </p>

            <p>
                <strong>Status:</strong>
                Enrolled
            </p>

        </div>
    `;

    form.reset();
});