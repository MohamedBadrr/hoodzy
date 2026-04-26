import casual from "../../../assets/images/casual.png";
import formal from "../../../assets/images/formal.png";
import gym from "../../../assets/images/gym.png";
import party from "../../../assets/images/party.png";

export type DressStyle = {
  title: string;
  image: string;
  className: string;
};

export const dressStyles: DressStyle[] = [
  {
    title: "Casual",
    image: casual,
    className: "lg:col-span-1",
  },
  {
    title: "Formal",
    image: formal,
    className: "lg:col-span-2",
  },
  {
    title: "Party",
    image: party,
    className: "lg:col-span-2",
  },
  {
    title: "Gym",
    image: gym,
    className: "lg:col-span-1",
  },
];
