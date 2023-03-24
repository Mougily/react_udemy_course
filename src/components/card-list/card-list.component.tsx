import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card";

interface CardListProps {
className? : string;
monsters : MonsterProps[];
}

interface MonsterProps {
  id: string;
  name: string;
  email: string;
}

class CardList extends Component <CardListProps>{
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id}/>;
        })}
      </div>
    );
  }
}

export default CardList;
