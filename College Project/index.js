let slide = document.querySelectorAll(".patientCard");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn");

let count = 0;

slide.forEach(function (slides, index) {
  slides.style.left = `${index * 100}%`;
});

function myFun() {
  slide.forEach(function (curVal) {
    curVal.style.transform = `translateX(-${count * 99}%)`;
  });
}

setInterval(function () {
  count++;
  if (count == slide.length) {
    count = 0;
  }
  myFun();
}, 2000);

card.forEach(function (cards) {
  cards.addEventListener("click", function () {
    // Get the doctor's name to determine which paragraph to show
    let doctorName = cards.querySelector("p").innerText;

    // Define content for each doctor
    let content = '';
    if (doctorName.includes("Ramakant Deshpande")) {
      content = `
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>Dr. Ramakant Deshpande</h1>
            <p>Dr. Ramakant Deshpande is a highly skilled Surgical Oncologist and Oncologist in Mumbai, India.
              His expertise includes Thoracic Tumours, Breast cancer, and Children’s Cancer. Dr. Deshpande has specialized in endoscopic surgery, particularly Thoracoscopy.
              Senior of Robotic surgery at the Asian Cancer Institute, he was also a former doctor at Tata Memorial.
            </p>
        </div>
      `;
    } else if (doctorName.includes("YK Mishra")) {
      content = `
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>Dr. YK Mishra</h1>
            <p>One of the most well-known and accomplished cardiac surgeons in India, Dr. Y K Mishra is ranked among the top ten cardiologists there. He has performed over 15000 open heart procedures and over 510 robotic surgeries successfully. He has over 34 years of experience and is well-known. Dr. Mishra’s interest in education, research, and training complement his clinical work, and he frequently receives invitations to give guest lectures throughout the globe. Additionally, the doctor has presided over scientific sessions at conferences held in the Far East, China, Italy, Japan, France, the United States, the United Kingdom, and other countries. Dr. Mishra presented actual examples during his workshops in Thailand, Bangladesh, and Nepal. Dr Mishra has completed a residency in cardiovascular surgery at the Swedish University Hospital Uppsala’s Thoracic Center. Additionally, he has received training in robotic cardiac surgery at the Ohio State University Columbus Medical Center, University Hospital Utrecht, Netherlands, and Odessa, Texas, USA. Odessa, Texas, USA-based minimally invasive cardiac surgery.
            </p>
        </div>
      `;
    } else if (doctorName.includes("Vivek Vij")) {
      content = `
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>Dr. Vivek Vij</h1>
            <p>Dr. Vivek Vij is a liver transplant surgeon in India, known for his expertise in Liver Transplantation and Hepatobiliary Sciences. He is the Director at ‘The Department of Liver Transplantation & Gastrointestinal Surgery’ at Fortis Health Care (Fortis Escorts, FMRI, Fortis Noida, Fortis Chandigarh). He and his team have a cumulative experience of more than 4000+ liver transplants with a record of 97% patients and 100% donor success rate. Dr. Vij is the first liver surgeon from Indian subcontinent to publish a series of laparoscopic donor hepatectomy in ‘Liver Transplantation’. In 2015, he was honored with a special award at International Liver Transplant Society (ILTS), in Chicago. He is the youngest liver transplant doctor in India to complete 800 independent liver transplants with Lowest Biliary Complication Rate.
            </p>
        </div>
      `;
    }

    // Display the content in contentDetail
    document.querySelector(".contentDetail").innerHTML = content;
    document.querySelector(".content").style.display = "block";

    // Close button functionality
    closeBtn.addEventListener("click", function () {
      document.querySelector(".content").style.display = "none";
    });
  });
});

connectBtn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if (email.value == "" && pass.value == "") {
    alert("Please Enter Details");
  } else {
    alert("You Logged In");
    email.value = "";
    pass.value = "";
  }
});
