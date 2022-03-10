import styles from "./Contact.module.css";
import EmailIcon from "@material-ui/icons/Email";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#686F6F", width: "100%",top:"100px"}} id="contact">
      <div className={styles.contact}>
        <div className={styles.contactDetails}>
          <p>CONTACT ME</p>   

          <div>
            <LocationOnIcon style={{ color: "white" }}></LocationOnIcon>
            <p>Odisha, India</p>
          </div>   
          <div>
            <LocalPhoneIcon style={{ color: "white" }}></LocalPhoneIcon>
            <p>+91 9937062128</p>
          </div>   

          <div>
            <EmailIcon style={{ color: "white" }}></EmailIcon>
            <p>soumyak.bhoi.2001@gmail.com</p>
          </div>
        </div>
        <form
          className={styles.formContainer}
          action="mailto:soumyak.bhoi.2001@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <label>Name</label>
          <input type="text" name="name" required></input>
          <label>Email</label>
          <input type="email" name="email" required></input>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write something.."
            required
          ></textarea>
          <button type="submit" value="SEND">
            SEND <LocalPostOfficeOutlinedIcon></LocalPostOfficeOutlinedIcon>
          </button>
        </form>
      </div>
    </div>
  );
}
