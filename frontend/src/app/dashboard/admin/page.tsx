
"use client"
import Charts from "./_components/Chart";
import JobsCreated from "./_components/JobsCreated";
import Widget from "./_components/Widget";

export default function Home() {

  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 lg:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 family2">
            Top Staking Assets
          </h3>
          <span className="block text-base font-normal">
            Overview of your progress for the last 24 hours
          </span>
        </div>
        <div className="w-full flex flex-col gap-8">
          {/* widget data listings */}
          <Widget />
          <Charts />
          <JobsCreated />
        </div>

      </div>
    </div>
  );
}
