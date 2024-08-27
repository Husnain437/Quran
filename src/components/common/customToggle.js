import { useAccordionButton } from "react-bootstrap";

export function CustomToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      callback && callback(eventKey)
    );
    return (
      <button
        type="button"
        style={{ backgroundColor: 'transparent', border: 'none' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  