import "@/components/webSiteBand/webSiteBand.css";

export default function WebSiteBand({ title }) {
  return (
    <div className="webSiteBandContainer">
      <h3>{title}</h3>
    </div>
  );
}
