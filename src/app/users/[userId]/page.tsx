import React from "react";

const User = ({ params }: { params: { slug: string } }) => {
  console.log(params);

  return (
    <div>
      <p style={{ color: "green", fontSize: 40 }}>USER ID 1</p>
    </div>
  );
};

export default User;
