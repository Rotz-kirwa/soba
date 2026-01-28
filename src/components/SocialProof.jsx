import { useState, useEffect } from 'react';
import './SocialProof.css';

const names = ["James", "Brian", "Kevin", "Daniel", "Joseph", "Samuel", "Michael", "Dennis", "Eric", "George", "Peter", "Alex", "Collins", "Victor", "Steve", "Moses", "Allan", "Paul", "John", "Isaac", "Mark", "Kelvin", "Nicholas", "Fred", "Ronald", "Patrick", "Antony", "Timothy", "Julius", "Benson", "Hillary", "Andrew", "Martin", "Philip", "Amos", "Simon", "Geoffrey", "Eliud", "Kennedy", "Raphael", "Wilfred", "Mary", "Jane", "Grace", "Faith", "Lucy", "Ann", "Rose", "Joyce", "Catherine", "Margaret", "Elizabeth", "Sarah", "Rebecca", "Ruth", "Esther", "Rachel", "Hannah", "Lydia", "Martha", "Deborah", "Nancy", "Betty", "Alice", "Susan", "Carol", "Linda", "Patricia", "Barbara", "Jennifer", "Maria", "Helen", "Dorothy", "Lisa", "Karen", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle", "Laura", "Angela", "Brenda", "Amy", "Anna", "Jacqueline", "Pamela", "Nicole", "Emma", "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Virginia", "Kathleen", "Pamela", "Cynthia", "Shirley", "Diane", "Jessica", "Martha", "Judith", "Frances", "Evelyn", "Jean", "Cheryl", "Mildred", "Katherine", "Joan", "Ashley", "Judy", "Marie", "Teresa", "Doris", "Sara", "Janice", "Julia", "Heather", "Diane"];

const companies = ["Greenfield Supplies Ltd", "Lakeview Traders", "Sunrise Academy", "Bluewave Logistics", "Prime Builders Kenya", "Horizon High School", "Valley Fresh Distributors", "UrbanTech Solutions", "Crestwood College", "MetroMart Wholesale", "Savannah Agrovet", "Hilltop Preparatory", "Riftline Hardware", "Coastline Exporters", "NextGen Engineering", "Umoja Community School", "Skyline Ventures", "Eastlands Secondary", "Riverside Academy", "Pinnacle Traders", "Golden Gate Supplies", "Westside Distributors", "Maplewood School", "Summit Logistics", "Evergreen Enterprises", "Lakeside High", "Mountain View Academy", "Starlight Traders", "Oceanview Exporters", "Parklands School", "Silverline Hardware", "Brookside College", "Redwood Supplies", "Clearwater Traders", "Fairview Academy", "Springdale School", "Meadowbrook Distributors", "Oakwood High", "Pinecrest Logistics", "Willowbrook Supplies", "Cedarwood Academy", "Mapleleaf Traders", "Birchwood School", "Elmwood Distributors", "Ashwood High", "Rosewood College", "Thornwood Supplies", "Ivywood Traders", "Laurelwood Academy", "Hazelwood School", "Cherrywood Distributors", "Walnut High", "Hickory Logistics", "Magnolia Supplies", "Cypress Traders", "Juniper Academy", "Sequoia School", "Redwood Distributors", "Spruce High", "Fir College", "Pine Supplies", "Cedar Traders", "Oak Academy", "Maple School", "Birch Distributors", "Elm High", "Ash Logistics", "Rose Supplies", "Thorn Traders", "Ivy Academy", "Laurel School", "Hazel Distributors", "Cherry High", "Walnut College", "Hickory Supplies", "Magnolia Traders", "Cypress Academy", "Juniper School", "Sequoia Distributors", "Redwood High", "Spruce Logistics", "Fir Supplies", "Pine Traders", "Cedar Academy", "Oak School", "Maple Distributors", "Birch High", "Elm College", "Ash Supplies", "Rose Traders", "Thorn Academy", "Ivy School", "Laurel Distributors", "Hazel High", "Cherry Logistics", "Walnut Supplies", "Hickory Traders", "Magnolia Academy", "Cypress School", "Juniper Distributors", "Sequoia High", "Redwood College", "Spruce Supplies", "Fir Traders", "Pine Academy", "Cedar School", "Oak Distributors", "Maple High", "Birch Logistics", "Elm Supplies", "Ash Traders", "Rose Academy", "Thorn School", "Ivy Distributors", "Laurel High", "Hazel College"];

const locations = ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Thika", "Machakos", "Meru", "Nyeri", "Embu", "Kericho", "Kitale", "Bungoma", "Kakamega", "Busia", "Voi", "Malindi", "Kilifi", "Garissa", "Isiolo", "Narok", "Nanyuki", "Lodwar", "Kapenguria", "Marsabit", "Lamu", "Wajir", "Kisii", "Homa Bay", "Migori", "Siaya", "Vihiga", "Bomet", "Naivasha", "Nyahururu", "Karatina", "Murang'a", "Kiambu", "Ruiru", "Limuru", "Ngong", "Athi River", "Kitui", "Makueni", "Taveta", "Kwale", "Taita", "Tana River", "Mandera", "Moyale"];

const templates = [
  (name, loc) => `${name} just booked transportation to ${loc}`,
  (name, loc) => `${name} received their parcel in ${loc}`,
  (name, loc) => `${name}'s cargo departed for ${loc}`,
  (name, loc) => `${name} scheduled a pickup in ${loc}`,
  (name, loc) => `${name} booked a delivery to ${loc}`,
  (name, loc) => `${name}'s package was picked up in ${loc}`,
  (name, loc) => `${name} received their cargo safely in ${loc}`,
  (name, loc) => `${name}'s shipment departed to ${loc}`,
  (name, loc) => `${name} booked transportation from ${loc}`,
  (name, loc) => `${name}'s parcel arrived in ${loc}`
];

const SocialProof = () => {
  const [notification, setNotification] = useState(null);
  const [visible, setVisible] = useState(false);
  const [timeText, setTimeText] = useState('just now');

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const getRandomTime = () => {
    const times = ['just now', '5 mins ago', '12 mins ago', '23 mins ago', '35 mins ago', '48 mins ago', '52 mins ago'];
    return getRandom(times);
  };

  const generateNotification = () => {
    const isCompany = Math.random() > 0.4;
    const name = isCompany ? getRandom(companies) : getRandom(names);
    const location = getRandom(locations);
    const template = getRandom(templates);
    return template(name, location);
  };

  useEffect(() => {
    const showNotification = () => {
      setNotification(generateNotification());
      setTimeText(getRandomTime());
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 2500);
    };

    showNotification();
    const interval = setInterval(showNotification, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!notification) return null;

  return (
    <div className={`social-proof ${visible ? 'visible' : ''}`}>
      <div className="social-proof-icon">✓</div>
      <div className="social-proof-content">
        <div className="social-proof-text">{notification}</div>
        <div className="social-proof-time">{timeText}</div>
      </div>
    </div>
  );
};

export default SocialProof;
