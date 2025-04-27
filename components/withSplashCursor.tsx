import React from "react";
import SplashCursor from "./splashcursor";

const withSplashCursor = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <>
      <SplashCursor />
      <WrappedComponent {...props} />
    </>
  );
};

export default withSplashCursor;
