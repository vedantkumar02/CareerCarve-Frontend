import { useEffect, useState } from "react";
import { componentStyles } from "../styles";
import { IoCheckmarkCircle, IoCloseCircleSharp } from "react-icons/io5";
import { MdOutlineEdit, MdOutlineInfo, MdOutlineMenu } from "react-icons/md";

/* ----- Style Classes ----- */
const {
    actionBtns,
    currentDraggable,
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

export const ResumeSections = ({
    id,
    section,
    setRenderSectionList,
    dragItemRef,
    dragOverItemRef,
}) => {
    const { name, active } = section;

    const [contentEditable, setContentEditable] = useState(false);
    const [editedContent, setEditedContent] = useState(name);
    const [toggleInfo, setToggleInfo] = useState(false);
    const [sectionActive, setSectionActive] = useState(active);
    const [draggableItem, setDraggableItem] = useState(false);

    const onDragStart = () => (dragItemRef.current = id);

    const onDragEnter = () => {
        if (id !== dragItemRef.current) {
            dragOverItemRef.current = id;
        }
    };

    const onDragEnd = () => {
        setRenderSectionList((currentList) => {
            let modifiedList = [...currentList];

            const draggedItemContent = modifiedList.splice(
                dragItemRef.current,
                1
            )[0];

            modifiedList.splice(dragOverItemRef.current, 0, draggedItemContent);

            dragItemRef.current = null;
            dragOverItemRef.current = null;
            setDraggableItem(false);

            return modifiedList;
        });
    };

    const onDragOver = (event) => event.preventDefault();

    useEffect(() => {
        setEditedContent(name);
        setSectionActive(active);
    }, [name, active]);

    useEffect(() => {
        setRenderSectionList((currentList) => {
            let newList = [...currentList];
            newList[id].name = editedContent;
            newList[id].active = sectionActive;

            return newList;
        });
    }, [id, editedContent, sectionActive, setRenderSectionList]);

    return (
        <div
            className={`${resumeSections} ${
                draggableItem ? currentDraggable : ""
            }`}
            draggable={draggableItem}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
        >
            <button
                className={actionBtns}
                onClick={() => setDraggableItem(!draggableItem)}
            >
                <MdOutlineMenu className={menuIcon} />
            </button>
            <button
                tabIndex={0}
                className={actionBtns}
                onClick={() => setToggleInfo(!toggleInfo)}
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
                {name}
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
                    id={`toggleSection_${id}`}
                    checked={sectionActive}
                    className={`${toggleInput} ${
                        sectionActive ? toggleInputActive : ""
                    }`}
                    onChange={(event) => {
                        setSectionActive(event.target.checked);
                    }}
                />
                <label htmlFor={`toggleSection_${id}`} className={toggleLabel}>
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
