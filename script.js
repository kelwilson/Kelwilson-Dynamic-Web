/* mobile menu  */
const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");

  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");

  navbar.classList.remove("active");
};
// mobile-end

// testimonial-section-starts
const speakers = [
  {
    name: "Akshay Mishra",
    title: "Associate Software Developer | India",
    description:
      " Adrian, I wanted to thank you for your React courses. I have personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago.",
    image: "./assets/3.png",
  },
  {
    name: "Akshay Mishra",
    title: "Associate Software Developer | India",
    description:
      " Adrian, I wanted to thank you for your React courses. I have personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago.",
    image: "./assets/3.png",
  },
  {
    name: "Akshay Mishra",
    title: "Associate Software Developer | India",
    description:
      " Adrian, I wanted to thank you for your React courses. I have personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago.",
    image: "./assets/3.png",
  },
  {
    name: "Akshay Mishra",
    title: "Associate Software Developer | India",
    description:
      " Adrian, I wanted to thank you for your React courses. I have personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago.",
    image: "./assets/3.png",
  },
  {
    name: "Akshay Mishra",
    title: "Associate Software Developer | India",
    description:
      " Adrian, I wanted to thank you for your React courses. I have personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago.",
    image: "./assets/3.png",
  },
  {
    name: "Akshay Mishra",
    title: "Associate Software Developer | India",
    description:
      " Adrian, I wanted to thank you for your React courses. I have personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago.",
    image: "./assets/3.png",
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  const data = document.createElement("div");
  data.classList.add("testimonials");
  data.innerHTML = `
                <div class="students-testimonials">
                <div class="testimonial-bg">
                <img src="${speakers[i].image}" alt=" " />
                </div>

                <div class="student-info">
                    <h3 class="student-name">
                    ${speakers[i].name}
                    </h3>
                    <span class="student-position">
                    ${speakers[i].title}
                    </span>
                    <hr />
                    <p class="testimonial">
                    ${speakers[i].description}
                    </p>
                </div>
                </div>
    `;

  document.querySelector(".testimonials").appendChild(data);
}
