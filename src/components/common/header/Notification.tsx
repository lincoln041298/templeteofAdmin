import bell from "public/svg/bell.svg";
export interface NotificationProps {}

export function Notification() {
  const showdate = new Date();
  const prepend = showdate.getHours() >= 12 ? "PM" : "AM";
  const displaytime =
    showdate.getHours() + ":" + showdate.getMinutes() + " " + prepend;
  return (
    <div className="relative">
      <p className="dot-red">
        <img className="mx-5 pt-1 w-5" src={bell} alt="notification" />
      </p>
      <div className="absolute w-[350px] right-4 top-8 rounded-lg bg-white shadow-xl p-5">
        <ul className="text-sm font-normal">
          <li className="mb-5">
            <p>Notification</p>
          </li>
          <li>
            <p>
              <img src="" alt="" />
            </p>
            <div className="flex items-center justify-between">
              <p className="mr-5">Christian Bale</p>
              <p>
                <input
                  type="text"
                  className="text-end"
                  value={displaytime}
                  readOnly={true}
                />
              </p>
            </div>
          </li>
          <li>
            <p>
              <img src="" alt="" />
            </p>
            <div className="flex items-center justify-between">
              <p>Jonny Depp</p>
              <p>06:05AM</p>
            </div>
          </li>
          <li>
            <p>
              <img src="" alt="" />
            </p>
            <div className="flex items-center justify-between">
              <p>Robert DeNiro</p>
              <p>06:05AM</p>
            </div>
          </li>
          <li>
            <p>
              <img src="" alt="" />
            </p>
            <div className="flex items-center justify-between">
              <p>Morgan Freeman</p>
              <p>05:09AM</p>
            </div>
          </li>
          <li>
            <p>
              <img src="" alt="" />
            </p>
            <div className="flex items-center justify-between">
              <p>Russell Crowe</p>
              <p>1:15PM</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
