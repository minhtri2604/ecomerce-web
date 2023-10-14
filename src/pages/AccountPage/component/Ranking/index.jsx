import Benefit from "./component/Benefit";
import Preferential from "./component/Preferential";
import PreferentialLow from "./component/PreferentialLow";
import RankingScore from "./component/RankingScore";

const Ranking = () => {
  return (
    <>
      <RankingScore></RankingScore>
      <Benefit></Benefit>
      <Preferential></Preferential>
      <PreferentialLow></PreferentialLow>
    </>
  );
};

export default Ranking;
