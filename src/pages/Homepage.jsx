import { useEffect, useRef, useState } from "react";
import { pageStyles } from "../styles";
import { PrimaryButton } from "../components";
import { ResumeSections } from "../components";
import { LuLoader2 } from "react-icons/lu";

import { resumeSectionList } from "../constants";
import { compareArrays } from "../helpers";

/* ----- Style Classes ----- */
const { homepage, pageTitle, sectionContainer, btnContainer, spinner } =
    pageStyles.homepageStyles;

/* ----- Resume Section Names List ----- */

export const Homepage = () => {
    const [renderSectionList, setRenderSectionList] =
        useState(resumeSectionList);
    const [disableSave, setDisableSave] = useState(true);
    const [saving, setSaving] = useState(false);

    const dragItemRef = useRef(null);
    const dragOverItemRef = useRef(null);

    const handleSave = () => {
        setSaving(true);
        const timeoutId = setTimeout(() => {
            setSaving(false);
            setDisableSave(true);
            clearTimeout(timeoutId);
        }, 2000);
    };

    useEffect(() => {
        setDisableSave(compareArrays(renderSectionList));
    }, [renderSectionList]);

    return (
        <>
            <div className={homepage}>
                <h1 className={pageTitle}>Select Your Sections</h1>
                <main className={sectionContainer}>
                    {renderSectionList.map((section, idx) => (
                        <ResumeSections
                            key={idx}
                            id={idx}
                            section={section}
                            setRenderSectionList={setRenderSectionList}
                            dragItemRef={dragItemRef}
                            dragOverItemRef={dragOverItemRef}
                        />
                    ))}
                    <div className={btnContainer}>
                        <PrimaryButton
                            type="button"
                            disabled={disableSave}
                            action={handleSave}
                        >
                            {saving ? (
                                <span className={spinner}>
                                    <LuLoader2 />
                                </span>
                            ) : (
                                "Save and Next"
                            )}
                        </PrimaryButton>
                    </div>
                </main>
            </div>
        </>
    );
};
