

export default function Button({children, mode, Icon, ...props}) {
    return(
        <>
       <button className={mode ? Icon ? `icon-button button ${mode}-button` : `${mode}-button button` : Icon ? "icon-button filled-button button" : "filled-button button"} {...props}>{
               Icon ? <span className="button-icon"><Icon /></span> : undefined
           }<span>{children}</span></button>
        </>
        );
   }
   