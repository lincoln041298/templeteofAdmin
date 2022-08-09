import { General } from "./General";

export interface DashboardProps {}

export function Dashboard() {
  return (
    <div className="py-[6.5rem] px-[22px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <General />
          </div>
        </div>
      </div>
    </div>
  );
}
