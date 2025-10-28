import SectionHeader from "./SectionHeader";
import ContactmeForm from "./ContactmeForm";
import MySocials from "./MySocials";

export default function ContactMe() {
  return (
    <div className="p-6 !overflow-x-hidden flex flex-col gap-6">
      <SectionHeader title="Contact me" />
      <ContactmeForm />
      <MySocials />
    </div>
  );
}
