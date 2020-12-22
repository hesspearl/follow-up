import { position } from "../../modals/itemsArray";
import moment from "moment";

export const currentMonth = () => {
  const thisMonth = moment().month();

  const current = position[thisMonth];

  return { current, thisMonth };
};

export const findMonth = (cards, index) => {
  let items = [];
  for (const card of cards) {
    let date = moment(card.format.date, "DD/MM/YYYY", true).format();

    if (moment(date).month() === index) {
      if (moment(date).format("DD/MM/YYYY") === card.format.date) {
        items.push(card);
      }
    }
  }

  // dispatch(actions.filterByMonths(items , position , index));

  //  navigation.navigate("list");

  return items;
};