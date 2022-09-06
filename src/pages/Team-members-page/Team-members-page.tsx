import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./team-members.scss";

import chatIcon from "../../assets/image/icon_chat.svg";
import {
  DIALOG_ROUTE,
  USER_PROFILE_PAGE,
} from "../../provider/constants-route";

const membersTestData = [
  {
    id: 0,
    name: "Усейн",
    lastname: "Bolt",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
  },
  {
    id: 1,
    name: "Oleg",
    lastname: "Bolt",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
  },
  {
    id: 2,
    name: "Alexey",
    lastname: "Bolt",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
  },
];

export const TeamMembersPage = () => {
  const params = useParams();
  return (
    <div className="team-members">
      <Header title="Участники команды" />
      {membersTestData.map((member) => {
        return (
          <div key={member.id}>
            <div className="team-members__member">
              <NavLink
                to={USER_PROFILE_PAGE + "/" + member.id}
                className="team-members__name"
              >
                <div>
                  <img src={member.image} alt="avatar" />
                </div>
                <div> {member.name + " " + member.lastname} </div>
              </NavLink>
              <NavLink
                className="team-members__dialog"
                to={DIALOG_ROUTE + "/" + member.id}
              >
                <img src={chatIcon} alt="" />
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};
