import "./style.css";
import StepperComponent from "../../Components/Stepper/StepperComponent";
import StepperItemComponent from "../../Components/Stepper/StepperItemComponent";

export const Checkout = () => {
    return (
        <>
            <div className="title-container">
                <h1>Checkout</h1>
            </div>
            <div className="checkout-container">
                <StepperComponent 
                    stepNumberBackgroundColour="var(--primary-bg-colour)" 
                    stepNumberTextColour="var(--white-colour)" 
                    stepNumberWidth="24px"
                    stepNumberHeigth="24px"
                    buttonStyles={{padding: "var(--medium-spacing) var(--large-spacing)", border: 0, backgroundColor: "var(--primary-bg-colour)", color: "var(--white-colour)"}}
                    contentWrapperStyles={{padding: "var(--medium-spacing)"}}
                    stepTitleDirectionMobile="column"
                    stepTitleDirectionDesktop="row"
                    mobileBreakpoint={768}
                >

                    <StepperItemComponent header="Welcome">
                        <div className="step-content">
                            <h2>Welcome</h2>
                            <p>
                            Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                            </p>
                        </div>
                    </StepperItemComponent>

                    <StepperItemComponent header="Delivery">
                        <div className="step-content">
                            <h2>Delivery</h2>
                            <p>
                            Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                            </p>
                        </div>
                    </StepperItemComponent>

                    <StepperItemComponent header="Payment">
                        <div className="step-content">
                            <h2>Payment</h2>
                            <p>
                            Cras vel dui molestie, condimentum urna ac, lacinia ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum, sapien ut rhoncus aliquam, ante metus auctor ante, ut pharetra purus dolor vitae ante. Aenean rhoncus eu leo non fermentum.
                            </p>
                        </div>
                    </StepperItemComponent>
                </StepperComponent>   
            </div>
  
        </>
    )
}