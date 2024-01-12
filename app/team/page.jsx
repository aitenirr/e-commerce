const { Avatar } = require("@mui/material");
import axios from "axios";
const TeamPage = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  const { users } = response.data;
  console.log("users: ", users);

  return (
    <div
      className="tw-flex tw-flex-col tw-items-center tw-gap-y-12
    tw-gap-x-12"
    >
      <div className="tw-flex tw-flex-col tw-text-center tw-pb-[45px]  ">
        <h1 className=" tw-text-[40px] tw-font-bold">
          Meet Our <br /> Team
        </h1>

        <p className="tw-text-[#737373] ">
          Problems trying to resolve <br /> the conflict between the two major
          <br /> realms of Classical physics: <br /> Newtonian mechanics.
        </p>
      </div>
      {/*TEXT*/}
      <div className="tw-flex tw-flex-col tw-gap-y-12 md:tw-flex-row md:tw-flex-wrap s">
        {users.map((item) => (
          <div key={item.id} className="tw-flex tw-flex-row ">
            <Avatar
              src={item.image}
              className="tw-w-[80px] tw-h-[80px] tw-pr-[30px] "
            />
            <div className="tw-flex tw-flex-col  ">
              <p className="tw-text-[25px] tw-font-semibold">{`${item.firstName} ${item.lastName}`}</p>
              <p className="tw-text-[15px] tw-font-medium">
                {item.company.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamPage;
