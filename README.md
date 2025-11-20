# Conquer-Agency-Website
A full-screen, scroll-driven creative agency website featuring smooth animations using GSAP and Locomotive Scroll, a custom cursor, Swiper slider, and a loading screen.
# 🟠 Conquer Agency Website

**A full-screen, modern creative agency portfolio website featuring advanced scrolling mechanics, dynamic animations, and a bespoke user experience.**

This project is a showcase of front-end development using modern techniques to create a smooth, visually engaging user interface.

## ✨ Key Features

* **Smooth Scrolling:** Implemented using **Locomotive Scroll** for a custom, performance-optimized scrolling experience.
* **Dynamic Animations:** Utilizes **GSAP (GreenSock Animation Platform)** and **ScrollTrigger** for sophisticated, scroll-based animations on elements like text, sections, and the footer.
* **Custom Cursor:** A bespoke cursor that changes size and color/text based on the section it hovers over (`#page1` and `#page4`).
* **Pre-loader Animation:** A engaging loading sequence that animates in text before displaying the main content.
* **Interactive Menu Panel:** A side-sliding menu triggered on hover, with staggered link animations.
* **Image Slider:** A visually appealing 3D Coverflow slider powered by **Swiper.js** on `#page5`.
* **Responsive Design:** Includes basic media queries to ensure decent viewing on smaller screens (e.g., in the footer and menu).

## 🛠️ Technologies Used

* **HTML5** (Structure)
* **CSS3** (Styling, Custom Fonts, Sphere Animation)
* **JavaScript** (Interactivity and Logic)
* **GSAP (GreenSock Animation Platform):** For all major animations.
* **Locomotive Scroll:** For the main scrolling mechanism.
* **ScrollTrigger (GSAP Plugin):** To link GSAP animations to the custom scroll position.
* **Swiper.js:** For the interactive image carousel.
* **RemixIcon:** For vector icons used in the footer.

## 🚀 Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/Conquer-Agency-Website.git](https://github.com/YourUsername/Conquer-Agency-Website.git)
    cd Conquer-Agency-Website
    ```
2.  **Open the file:**
    Simply open the `index.html` file in your web browser. This project is purely front-end and requires no server setup.

### ⚠️ Note on Assets:

The project uses several external media files (`.mp4` videos and `.ttf` fonts) that are not included in this code-only file list. To run the project exactly as intended, you will need to replace the placeholder links with your own assets or acquire the necessary video files (`7710243-uhd_3840_2160_30fps.mp4`, `Z2BZfpbqstJ98kkB_RJ-HIGHLIGHT-Work-01.mp4`, etc.) and font files.

## 📄 File Structure

| File | Description |
| :--- | :--- |
| `index.html` | The main HTML structure, including links to external libraries and all sections. |
| `style.css` | All the styling for the website, including custom fonts and responsive media queries. |
| `script.js` | Contains all the JavaScript logic, including the setup for Locomotive Scroll, GSAP animations, the custom cursor, Swiper, and the loader. |
| `*.mp4`, `*.avif` | Placeholder video and image assets for different sections (not included in the provided code). |
| `*.ttf` | Custom font files (not included in the provided code). |

## 💡 Customization

* **Fonts:** Update the `@font-face` rules in `style.css` with your preferred font files.
* **Colors:** Modify the primary color variable (e.g., `#ff5f38` for the cursor) in `style.css`.
* **Animations:** The GSAP timelines in `script.js` (e.g., `page2Animation`, `footerAnimation`) can be tweaked to change the animation's timing, duration, and effects.

---

This content should be perfect for setting up your GitHub repository!

Would you like me to help you set up the actual Git commands for cloning, committing, and pushing this project?
