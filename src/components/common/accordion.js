
import { useState } from 'react';
export default function Accordion({ head, para, count, isOpen, onToggle }) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleClick = () => {
    onToggle(count);
    setIsExpanded(!isExpanded);
    let parent_box = document.getElementById(`parent_box_${count}`);
    if (parent_box) {
      if (isExpanded) {
        parent_box.classList.remove('bg_primary');
      } else {
        parent_box.classList.add('bg_primary');
      }
    }
  };
  return (
    <div className={`rounded-xl  ${isExpanded ? 'bg_primary  ' : ' '}`} id={`parent_box_${count}`} style={{border:"1px solid #AC8B49"}}>
      <h2 className={`rounded-xl py-2 px-2 ${!isExpanded ? 'bg_primary' : ''}`}>
        <button
          className="flex items-center px-3 justify-between w-full text-left font-semibold py-2"
          onClick={handleClick}
          aria-expanded={isExpanded}
          aria-controls={`accordion-text-${count}`}
        >
          <div className="flex flex-row gap-8 items-center">
            <span className="plusJakara_bold text-white text-sm">{head}</span>
          </div>
          <svg className="fill-white shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isExpanded && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isExpanded && '!rotate-180'}`} />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${count}`}
        role="region"
        aria-labelledby={`accordion-title-${count}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className={`px-4 ${!isExpanded ? 'hidden visibility-none' : ''}"`}>
          <p className=" text-white" style={{ lineHeight: '25px' }}>
            {para}
          </p>
        </div>
      </div>
    </div>
  );
}
