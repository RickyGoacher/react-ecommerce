import { ReactElement, useState, useMemo, useEffect, CSSProperties } from "react";
import "./style.css";

interface StepperComponentInterface {
    children: Array<ReactElement>;
    stepNumberBackgroundColour: string;
    stepNumberTextColour: string;
    stepNumberWidth: string;
    stepNumberHeigth: string;
    buttonStyles: CSSProperties;
    contentWrapperStyles: CSSProperties;
    stepTitleDirectionMobile: string;
    stepTitleDirectionDesktop: string;
    mobileBreakpoint: number;
    Proceed: boolean;
}

const StepperComponent = (props:StepperComponentInterface) => {

    const [getCurrentStep, setCurrentStep] = useState(0);
    const [isClient, setIsClient] = useState(false)

    const Styles = useMemo(() => {
        return (
            `
            .step-item-title:not(:first-child)::before {
                content: "";
                min-width: 100px;
                height: 2px;
                background-color: #e5e7eb;
            }

            .step-item-title.active:not(:first-child)::before {
                background-color: ${[props.stepNumberBackgroundColour]};
            }

            .step-item-title .number {
                min-width: ${props.stepNumberWidth};
                min-height: ${props.stepNumberHeigth};
            }

            .step-item-title:not(.active) .number {
                background-color: unset;
                border: solid 1px ${props.stepNumberBackgroundColour};
                color: ${props.stepNumberBackgroundColour};
            }

            .step-item-title.active .number {
                background-color: ${props.stepNumberBackgroundColour};
                color: ${props.stepNumberTextColour};
            }

            @media screen and (min-width: ${props.mobileBreakpoint}px) {
                .step-title-wrapper {
                    flex-direction: ${props.stepTitleDirectionDesktop};
                }
                ${props.stepTitleDirectionDesktop === "column" && `
                    .step-item-title:not(:first-child)::before {
                        content: unset;
                    }
                `}   
            }

            @media screen and (max-width: ${props.mobileBreakpoint}px) {
                .step-title-wrapper {
                    flex-direction: ${props.stepTitleDirectionMobile};
                }
                ${props.stepTitleDirectionMobile === "column" && `
                    .step-title-wrapper {
                        justify-content: center;
                        align-items: center;
                    }
                    .step-item-title:not(:first-child)::before {
                        content: unset;
                    }
                `}    
            }
                
            `
        );
    }, []);

    useEffect(() => {
        setIsClient(true);
    }, [Styles]);

    const GeneratedStepTitles = props.children.map((item, index) => {
        return (
            <div key={item.props.header + '-' + index} className={getCurrentStep == index ? "step-item-title active" : "step-item-title"} onClick={() => props.Proceed && setCurrentStep(index)}>
                <span className="number">{index + 1}</span><span className="title">{item.props.header}</span>
            </div> 
        );
    });

    const GeneratedStepContent = props.children.map((item, index) => {
        return (
            <div key={item.props.header + "" + index} className={getCurrentStep == index ? "step-item-content active" : "step-item-content"}>
                {item.props.children}
            </div>
        );
    });

    return (
        <>  
            {isClient &&
                <style>
                    {Styles}
                </style>
            }
            <div className="stepper-container">
                <div className="step-title-wrapper">
                    {GeneratedStepTitles}
                </div>
                <div className="step-content-wrapper" style={props.contentWrapperStyles}>
                    {GeneratedStepContent}
                    <div className="actions">
                        {getCurrentStep !== 0 ? <button className="prev" onClick={() => setCurrentStep(getCurrentStep - 1)} style={props.buttonStyles}>Prev</button> : <div></div>} 
                        {getCurrentStep !== (props.children.length - 1) && props.Proceed ? <button className="next" onClick={() => setCurrentStep(getCurrentStep + 1)} style={props.buttonStyles}>Proceed</button> : <button className="next inactive" style={props.buttonStyles}>Proceed</button>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StepperComponent;