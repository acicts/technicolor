import Graphic from "../assets/tshirt.webp";
import Poster from "../assets/poster.png";
import Video from "../assets/video.png";
import Manipulation from "../assets/manipulation.png";

const Category = ({ name, icon }) => (
  <div className="h-[25rem] w-[95%] max-w-sm md:w-96 mx-5 my-5 border-4 shadow-lg border-black rounded-md">
    <span className="text-3xl w-full inline-block mt-10 text-center font-[Praktika-Bold]">
      {name}
    </span>
    <img src={icon} alt={name} className="w-56 mx-auto mt-10" />
  </div>
);

const Categories = () => (
  <div>




    <div id="categories">
      <span className="section-title">Categories</span>
      <div className="flex flex-wrap  justify-around">
        <Category name="Poster Design" icon={Poster} />
        <Category name="Mockup" icon={Graphic} />
        <Category name="Video Editing" icon={Video} />
        <Category name="Manipulation" icon={Manipulation} />
      </div>

    </div>

    <div id="rnr">
    <span class="section-title mt-20">Rules and Regulations</span>

    <section class="guidelines" id="guidelines">
        <div class="guidelines-section">
            <h2>General Rules and Guidelines</h2>
            <ul>
                <li>- This competition is exclusively for students of Ananda College.</li>
                <li>- This is an individual competition; team submissions are not allowed.</li>
                <li>- Each contestant may submit only ONE entry per competition category.</li>
                <li>- Submissions received after the specified deadline will not be accepted under any circumstances.</li>
                <li>- All project files must be uploaded to Google Drive.</li>
                <li>- A shareable link to the Google Drive folder must be submitted via the official submission form.</li>
                <li>- The Google Drive folder must also contain 5 screenshots of your workspace during the creation process.</li>
                <li>- The main project file (or zip file) must be renamed in the format: "Grade_YourName.zip" (e.g., "11_KamalSilva.zip").</li>
                <li>- Final artwork must be submitted in either .png or .jpg format, unless otherwise specified.</li>
            </ul>
        </div>

        <div class="guidelines-section">
            <h2>Mockup</h2>
            <ul>
                <li>- <strong>Task:</strong> Design a t-shirt design for the Ananda College ICT Society.</li>
                <li>- Design both the front and back of the t-shirt.</li>
                <li>- Use only Ananda College colors as the main colors: Maroon, Gold, and White.</li>
                <li>- The design should be relevant to the Ananda College ICT Society.</li>
                <li>- Software: Adobe Photoshop or Adobe Illustrator only.</li>
                <li>- The artwork must be exported in either .png or .jpg format.</li>
            </ul>
        </div>

        <div class="guidelines-section">
            <h2>Video Editing </h2>
            <ul>
                <li>- <strong>Task:</strong> Create a trailer for "Technicolor '24."</li>
                <li>- Output format: .mp4.</li>
                <li>- Software: Adobe After Effects or Adobe Premier Pro only.</li>
                <li>- Resolution: Must be greater than HD (1280x720).</li>
            </ul>
        </div>

        <div class="guidelines-section">
            <h2>Poster Design</h2>
            <ul>
                <li>- <strong>Task:</strong> Create a poster for a Robotics Competition organized by the Ananda College ICT Society.</li>
                <li>- Dimensions: 1080 x 1080 pixels.</li>
                <li>- Content: The poster must clearly communicate the details of the Robotics Competition.</li>
                <li>- Software: Adobe Photoshop or Canva.</li>
                <li>- The artwork must be exported in either .png or .jpg format.</li>
            </ul>
        </div>

        <div class="guidelines-section">
            <h2>Photo Manipulation</h2>
            <ul>
                <li>- <strong>Task:</strong> Create a photo manipulation based on the theme "The Rise of AI and Robots in Cyber Warfare."</li>
                <li>- Theme: "The Rise of AI and Robots in Cyber Warfare."</li>
                <li>- Software: Adobe Photoshop only.</li>
                <li>- Dimensions: Any dimensions are acceptable.</li>
                <li>- Project Files: Submit ALL project files (including any textures, overlays, images, etc.) as a .zip file.</li>
                <li>- Final artwork must be exported in either .png or .jpg format.</li>
            </ul>
        </div>

        <div class="guidelines-section">
            <h2>Submission</h2>
            <ul>
                <li>- Ensure that your Google Drive folder permissions are set to "Anyone with the link can view."</li>
                <li>- Double-check your file names and formats before submitting.</li>
                <li>- Any form of plagiarism will result in disqualification.</li>
                <li>- The judges' decisions are final.</li>
            </ul>
        </div>
    </section>
</div>

  </div>
);
export default Categories;
