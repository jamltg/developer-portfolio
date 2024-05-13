import AboutLead from "../components/AboutLead";
import CollaborateTab from "../components/CollaborateTab";
import CollaborateTitle from "../components/CollaborateTitle";

export default function About() {
  return (
    <div className="bg-[rgb(237,231,222)] dark:bg-[rgb(35,56,49)] transition-colors duration-500">
      <AboutLead/>
      <CollaborateTab/>
      <CollaborateTitle/>
    </div>
  )
}
