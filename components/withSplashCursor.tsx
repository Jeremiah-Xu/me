import React from "react";
import SplashCursor from "./SplashCursor";

const withSplashCursor = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <>
      <SplashCursor />
      <WrappedComponent {...props} />
    </>
  );
};

export default withSplashCursor;
