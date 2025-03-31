export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}


// className="icon-button"
// mode ? Icon ? "icon-button button" : `${mode}-button button` : "filled-button button"