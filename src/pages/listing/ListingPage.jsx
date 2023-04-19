import { getData } from "../../services/userServices";
import { useEffect, useState} from "react";
import { ItemCard } from "../../components";

export const ListingPage = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setUserData(data.data);
      console.log(userData);
    };
    fetchData();
  }, [userData]);

  // avatar: "https://reqres.in/img/faces/1-image.jpg";
  // email: "george.bluth@reqres.in";
  // first_name: "George";
  // id: 1;
  // last_name: "Bluth";

  return (
    <div className="main-container flex flex-col md:flex-row">
      <div className="flex flex-col min-h-screen items-center w-auto p-5 md:flex-grow">
        <main className="flex-grow w-full">
          <div className="flex flex-wrap justify-center">
            {userData.map((item) => (
              <ItemCard
                key={item.id}
                avatar={item.avatar}
                email={item.email}
                name={`${item.first_name} ${item.last_name}`}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
