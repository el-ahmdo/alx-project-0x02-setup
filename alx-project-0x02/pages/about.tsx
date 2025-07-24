import React from "react";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <Button label="Small Button" size="small" shape="rounded-sm" />
      <Button label="Medium Button" size="medium" shape="rounded-md" />
      <Button label="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default About;
