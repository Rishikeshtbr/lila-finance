import React, { ReactNode, useState } from "react";

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  console.log("activeTabactiveTabactiveTab", children);
  const [activeTab, setActiveTab] = useState((children as any)[0].props.label);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="min-w-[1120px]">
      <div className="inline-flex">
        {(children as React.ReactElement[]).map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-[1px] border-black"
                : ""
            } border-b-none  text-blackTextSecondary font-normal pt-3 pb-[7px] text-left px-5`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {(children as React.ReactElement[]).map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div aria-label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
