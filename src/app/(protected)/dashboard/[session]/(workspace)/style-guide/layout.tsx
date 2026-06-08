import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="mt-36 container  mx-auto px-4 sm:px-6 py-6 sm:py-8 ">
      <div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-left text-center font-bold text-foreground ">
              Style Guide
            </h1>
            <p className="text-muted-foreground mt-2 text-center lg:text-left">
              Manage your style guide for your project.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {children}
      </div>
    </div>
  );
};

export default layout;
