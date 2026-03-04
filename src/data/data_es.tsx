import { ColoredText } from "../components/ColoredText";

export const DATA_ES = {
  name: "Guillermo Mena",
  about: "Frontend Developer from Madrid, Spain",
  summary: (
    <p className="leading-relaxed">
      Soy un
      <ColoredText label="desarrollador frontend" />
      con 5 años de experiencia profesional, especializado en{" "}
      <ColoredText label="React" variant="orange" />,
      <ColoredText label="TypeScript" variant="emerald" /> y{" "}
      <ColoredText label="JavaScript" variant="blue" />, y con experiencia
      previa en desarrollo de videojuegos con Unity.
      <br />
      I'm also dedicated to independent development of mobile applications with{" "}
      <ColoredText label="Flutter" variant="blue" />, now exceeding 370,000
      downloads.
    </p>
  ),
};
