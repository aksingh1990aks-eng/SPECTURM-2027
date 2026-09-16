/* =========================
   TECHNICAL TRACKS
========================= */

const tracks = [

  "Microwave Engineering and RF Systems",

  "Antenna Design and Smart Antennas",

  "Electromagnetic Theory and Computational Electromagnetics",

  "Wave Propagation and Channel Modeling",

  "Millimeter-Wave and Terahertz Technologies",

  "Microwave Circuits and Devices",

  "5G/6G Wireless Communication Systems",

  "Satellite and Space Communications",

  "Radar Systems and Remote Sensing",

  "Internet of Things (IoT) and Wireless Sensor Networks",

  "AI and Machine Learning Applications in RF and Microwave",

  "Signal Processing Techniques"

];


const tracksGrid =
  document.getElementById("tracksGrid");


tracks.forEach((track,index)=>{

  tracksGrid.innerHTML += `

    <div class="track">

      <span class="track-num">
        ${String(index+1).padStart(2,"0")}
      </span>

      <h3>${track}</h3>

    </div>

  `;

});


/* =========================
   COMMITTEES
========================= */

const committees = {

  "Leadership":[

    [
      "Chief Patron",
      "Prof. Alok Kumar Chakrawal, HVC, GGV Bilaspur CG."
    ],

    [
      "Chair, IEEE MP Section",
      "Prof. G. S. Tomar, Bhopal."
    ],

    [
      "Patron",
      "Prof. Ashwini Kumar Dixit, Registrar, GGV Bilaspur CG."
    ],

    [
      "Patron",
      "Prof. Manish Dixit, Chair (Elect), IEEE MP Section, Bhopal."
    ],

    [
      "Convenor",
      "Prof. M. Chakradhar Rao, Dean SoS (E&T), GGV Bilaspur CG."
    ],

    [
      "Convenor",
      "Dr. Sudakar Singh Chauhan, GGV Bilaspur CG."
    ],

    [
      "Convenor",
      "Dr. Somesh Kumar Dahiya, Chair, IEEE MTT-S MP Section, India."
    ]

  ],


  "General & TPC":[

    [
      "General Chair",
      "Dr. Shrawan Kumar Patel, GGV Bilaspur CG."
    ],

    [
      "General Chair",
      "Dr. Jitendra Agrawal, Vice-Chair, IEEE MP Section."
    ],

    [
      "General Co-Chair",
      "Dr. Anil Kumar Soni, GGV Bilaspur CG."
    ],

    [
      "TPC Chair",
      "Prof. Arokiaswami Alphones, NTU Singapore."
    ],

    [
      "TPC Chair",
      "Prof. Mrinal Kanti Mandal, IIT Kharagpur, WB."
    ],

    [
      "TPC Chair",
      "Dr. Ravi Kumar Arya, Xiangshan 5G/6G Laboratory, ZICUST, China."
    ],

    [
      "TPC Co-Chair",
      "Dr. Subhankar Mazumdar, NIT Meghalaya."
    ],

    [
      "TPC Co-Chair",
      "Dr. Rusan Kumar Barik, CHRIST University, Bengaluru, India."
    ],

    [
      "TPC Co-Chair",
      "Dr. Ranjit Kumar, VIT Chennai."
    ]

  ],


  "Operations":[

    [
      "Finance Chair",
      "Dr. Sumit Kumar Gupta, GGV Bilaspur CG."
    ],

    [
      "Publication Chair",
      "Dr. Ruchi Tripathi, GGV Bilaspur CG."
    ],

    [
      "Publicity Chair",
      "Dr. Dharmendra Kumar, GGV Bilaspur CG."
    ],

    [
      "Publicity Chair",
      "Dr. Sulakshna Chilukuri, VCE Hyderabad, AP."
    ],

    [
      "Publicity Chair",
      "Dr. K. Venkat Kishore, KL University, AP."
    ],

    [
      "Oversight Committee",
      "Dr. Kailash Patidar, BIST, Bhopal (IEEE MP Section)."
    ],

    [
      "Oversight Committee",
      "Dr. Shikha Agarwal, UIT-RGPV, Bhopal (IEEE MP Section)."
    ]

  ],


  "International Advisory":[

    [
      "International Advisory Committee",
      "Prof. Slawomir Koziel, Reykjavik University, Iceland."
    ],

    [
      "International Advisory Committee",
      "Prof. Madhawan Swaminathan, CHIMES, Penn State, USA."
    ],

    [
      "International Advisory Committee",
      "Prof. Amin Abbosh, University of Queensland, Australia."
    ],

    [
      "International Advisory Committee",
      "Prof. Q. S. Cheng, SUSTech, China."
    ],

    [
      "International Advisory Committee",
      "Prof. M. Bozzi, University of Pavia, Italy."
    ],

    [
      "International Advisory Committee",
      "Dr. Ajay Poddar, Synergy Microwave, USA."
    ],

    [
      "International Advisory Committee",
      "Prof. Vladimir Okhmatovski, University of Manitoba, Winnipeg, Canada."
    ],

    [
      "International Advisory Committee",
      "Dr. Amit Krishna Dwivedi, Warwick University, UK."
    ],

    [
      "International Advisory Committee",
      "Dr. Surbhi (Bhatia) Khan, University of Salford, Manchester, UK."
    ],

    [
      "International Advisory Committee",
      "Dr. Mahesh Soni, Renesas Electronics, UK."
    ],

    [
      "International Advisory Committee",
      "Dr. C. Pradeep, Foxconn, Taiwan."
    ]

  ],


  "National Advisory":[

    [
      "National Advisory Committee",
      "Prof. Mahesh P. Abegaonkar, CARE, IIT Delhi, Delhi, India."
    ],

    [
      "National Advisory Committee",
      "Prof. Chinmoy Saha, IIST Thiruvananthapuram, Kerala, India."
    ],

    [
      "National Advisory Committee",
      "Prof. Santanu Kumar Behara, NIT Rourkela, OR."
    ],

    [
      "National Advisory Committee",
      "Prof. Soumava Mukherjee, IIT Kharagpur, WB."
    ],

    [
      "National Advisory Committee",
      "Prof. Maifuz Ali, IIIT Raipur, CG."
    ],

    [
      "National Advisory Committee",
      "Prof. Somak Bhattacharya, IIT BHU, Varanasi, UP."
    ],

    [
      "National Advisory Committee",
      "Dr. Saptarshi Ghosh, IIT Indore, MP., India."
    ],

    [
      "National Advisory Committee",
      "Prof. Ashwani Kumar, DTU, New Delhi, India."
    ],

    [
      "National Advisory Committee",
      "Prof. G. Arun Kumar, NIT Warangal, AP."
    ],

    [
      "National Advisory Committee",
      "Prof. Arani Ali Khan, IIT Jodhpur, RJ."
    ],

    [
      "National Advisory Committee",
      "Prof. Rakesh Sinha, NIT Rourkela, OR."
    ],

    [
      "National Advisory Committee",
      "Prof. Arvind Kumar, VNIT Nagpur, MH."
    ],

    [
      "National Advisory Committee",
      "Dr. P. Arun Babu, CPRI, Bangaluru."
    ],

    [
      "National Advisory Committee",
      "Dr. V. Arjun, Scientist, MMG-IGCAR, Kalpakkam."
    ],

    [
      "National Advisory Committee",
      "Dr. Anand Mukhopadhyay, Mathworks, India."
    ],

    [
      "National Advisory Committee",
      "Dr. M. Bubathi, Honeywell Technologies, Pune."
    ],

    [
      "National Advisory Committee",
      "Dr. Navin Kumar, Amrita Vishwa Vidyapeetham, Bangaluru."
    ],

    [
      "National Advisory Committee",
      "Dr. Pinku Ranjan, IIITM, Gwalior, MP."
    ],

    [
      "National Advisory Committee",
      "Dr. Debasis Das, IIT Jodhpur, RJ."
    ],

    [
      "National Advisory Committee",
      "Dr. Mohit Mishra, IIT Mandi, HP."
    ],

    [
      "National Advisory Committee",
      "Dr. Aditya Kumar Singh, IIT Bhilai, CG."
    ],

    [
      "National Advisory Committee",
      "Dr. Situ Rani Patre, NIT Rourkela, OR."
    ],

    [
      "National Advisory Committee",
      "Dr. R. N. Patel, CSVTU, Bhilai, CG."
    ],

    [
      "National Advisory Committee",
      "Dr. Akanksha Sneh, Mathworks, India."
    ]

  ],


  "Local Organizing":[

    [
      "Local Organizing Committee",
      "Prof. Soma Das, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Nipun Kumar Mishra, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Mr. Manmath Badapanda, Chair, Professional Activity, IEEE MP Section."
    ],

    [
      "Local Organizing Committee",
      "Dr. Anita Khanna, GGV Bilaspur, CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. P. S. Srivastava, GGV Bilaspur, CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Manoj Gupta, GGV Bilaspur, CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Rajiv Dey, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Bhanu Pratap Singh, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Mrs. Beaulah Nath, GGV Bilaspur, CG."
    ],

    [
      "Local Organizing Committee",
      "Mrs. Pragati Patharia, GGV Bilaspur, CG."
    ],

    [
      "Local Organizing Committee",
      "Mr. Deepak Kumar Rathore, GGV Bilaspur, CG."
    ],

    [
      "Local Organizing Committee",
      "Mr. Jitendra Bhardwaj, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Praveena Rajput, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Nikita Kashyap, GGV Bilaspur CG."
    ],

    [
      "Local Organizing Committee",
      "Dr. Chandan Tamrakar, GGV Bilaspur CG."
    ]

  ]

};


/* =========================
   COMMITTEE TABS
========================= */

const tabs =
  document.getElementById("committeeTabs");

const panel =
  document.getElementById("committeePanel");


Object.keys(committees).forEach((name,index)=>{

  const button =
    document.createElement("button");

  button.className =
    "tab" + (index===0 ? " active" : "");

  button.innerText = name;

  button.onclick = ()=>{

    document
      .querySelectorAll(".tab")
      .forEach(btn =>
        btn.classList.remove("active")
      );

    button.classList.add("active");

    showCommittee(name);

  };

  tabs.appendChild(button);

});


function showCommittee(name){

  panel.innerHTML = `

    <div class="committee-list">

      ${committees[name].map(person=>`

        <div class="committee-person">

          <strong>${person[0]}</strong>

          <span>${person[1]}</span>

        </div>

      `).join("")}

    </div>

  `;

}


/* SHOW FIRST COMMITTEE */

showCommittee(
  Object.keys(committees)[0]
);


/* =========================
   MOBILE MENU
========================= */

const menuButton =
  document.querySelector(".menu-btn");

const nav =
  document.getElementById("nav");


menuButton.addEventListener("click",()=>{

  nav.classList.toggle("open");

});


document
  .querySelectorAll("nav a")
  .forEach(link=>{

    link.addEventListener("click",()=>{

      nav.classList.remove("open");

    });

  });


/* =========================
   BACK TO TOP
========================= */

const topButton =
  document.getElementById("topButton");


window.addEventListener("scroll",()=>{

  if(window.scrollY > 500){

    topButton.style.display = "grid";

  }else{

    topButton.style.display = "none";

  }

});


topButton.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year")
  .textContent = new Date().getFullYear();