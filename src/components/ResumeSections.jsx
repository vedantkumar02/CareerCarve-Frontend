import { useState } from "react";
import { componentStyles } from "../styles";
import { IoCheckmarkCircle, IoCloseCircleSharp } from "react-icons/io5";
// import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineEdit, MdOutlineInfo, MdOutlineMenu } from "react-icons/md";

/* ----- Style Classes ----- */
const {
    actionBtns,
    editBtns,
    editIcon,
    infoIcon,
    menuIcon,
    resumeSections,
    sectionInfo,
    sectionName,
    toggleLabel,
    toggleInput,
    toggleInputActive,
    toggleInputWrap,
} = componentStyles.resumeSectionStyles;

export const ResumeSections = (props) => {
    const [contentEditable, setContentEditable] = useState(false);
    const [editedContent, setEditedContent] = useState(props.sectionName);
    const [toggleInfo, setToggleInfo] = useState(false);
    const [sectionActive, setSectionActive] = useState(props.active);

    return (
        <div className={resumeSections} draggable={true}>
            <button className={actionBtns}>
                <MdOutlineMenu className={menuIcon} />
            </button>
            <button
                tabIndex={0}
                className={actionBtns}
                onFocus={() => setToggleInfo(true)}
                onBlur={() => setToggleInfo(false)}
            >
                <MdOutlineInfo className={infoIcon} />
                {toggleInfo ? (
                    <span className={sectionInfo}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In omnis non fugit a cupiditate! Ipsa perspiciatis
                        accusantium omnis porro aspernatur quaerat unde facilis
                        voluptate officia!
                    </span>
                ) : null}
            </button>
            <p
                className={sectionName}
                contentEditable={contentEditable}
                suppressContentEditableWarning={true}
                onBlur={(event) => setEditedContent(event.target.textContent)}
            >
                {props.sectionName}
            </p>
            {!contentEditable ? (
                <button
                    className={editBtns}
                    onClick={() => setContentEditable(true)}
                >
                    <MdOutlineEdit className={editIcon} />
                </button>
            ) : (
                <button
                    className={editBtns}
                    onClick={() => setContentEditable(false)}
                >
                    Save
                </button>
            )}
            <div className={toggleInputWrap}>
                <input
                    type="checkbox"
                    name="toggleSection"
                    id={`toggleSection_${props.id}`}
                    checked={sectionActive}
                    className={`${toggleInput} ${
                        sectionActive ? toggleInputActive : ""
                    }`}
                    onChange={(event) => {
                        setSectionActive(event.target.checked);
                    }}
                />
                <label
                    htmlFor={`toggleSection_${props.id}`}
                    className={toggleLabel}
                >
                    {sectionActive ? (
                        <IoCheckmarkCircle />
                    ) : (
                        <IoCloseCircleSharp />
                    )}
                </label>
            </div>
        </div>
    );
};
