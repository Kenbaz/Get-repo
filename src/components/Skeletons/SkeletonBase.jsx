import clsx from "clsx";
import Shimmer from "./Shimmer";

function SkeletonBaseElement({ type, className }) {
    const baseClasses = `skeleton ${type}`;
    const combinedClasses = clsx(baseClasses, className);
    return (
      <div className={combinedClasses}>
        <Shimmer/>
      </div>
    );
}

export default SkeletonBaseElement;