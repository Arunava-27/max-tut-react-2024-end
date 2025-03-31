export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer || "menu"; // default value is "menu"
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
