interface LogoInterface {
    LogoPath: string;
    LogoWidth: string;
    LogoHeight: string;
    AltText: string;
}

export const Logo = ({LogoPath, LogoWidth, LogoHeight, AltText}:LogoInterface) => {
    return (
        <div className="logo">
            <img src={LogoPath} width={LogoWidth} height={LogoHeight} alt={AltText} />
        </div>
    );
}