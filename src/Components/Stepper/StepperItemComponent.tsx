import { ReactNode } from "react";

interface StepperItemComponentInfterface {
    header: string;
    children: ReactNode
}

const StepperItemComponent = (props:StepperItemComponentInfterface) => {

    return (
        <>
            {props.children}
        </>
    );
}

export default StepperItemComponent;