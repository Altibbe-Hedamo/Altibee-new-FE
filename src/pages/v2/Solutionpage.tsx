import Navbar from "../../components/Navbar";
import Articles from "../../components/v2/solutionpage/Articles";
import ComparisonTable from "../../components/v2/solutionpage/comparisionTable";
import Participants from "../../components/v2/solutionpage/Participants";
import SolutionHero from "../../components/v2/solutionpage/SolutionHero";
import SolutionLinks from "../../components/v2/solutionpage/SolutionLinks";


export default function SolutionPage() {
  return (
    <main className="bg-white">
        <Navbar className="bg-white text-black"/>
      <SolutionHero/>
      <SolutionLinks />
      <Articles />
      <ComparisonTable />
      <Participants />
    </main>
  );
}