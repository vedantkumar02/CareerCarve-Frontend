import { pageStyles } from "../styles";
import { PrimaryButton } from "../components";
import { ResumeSections } from "../components";

/* ----- Style Classes ----- */
const { homepage, pageTitle, sectionContainer, btnContainer } =
    pageStyles.homepageStyles;

/* ----- Resume Section Names List ----- */
const resumeSectionList = [
    { name: "Profile Summary", active: true },
    { name: "Academic and Co-curricular Achievements", active: true },
    { name: "Summer Internship Experience", active: true },
    { name: "Work Experience", active: true },
    { name: "Projects", active: false },
    { name: "Certifications", active: false },
    { name: "Leadership Positions", active: true },
    { name: "Extracurricular", active: true },
    { name: "Education", active: true },
];

export const Homepage = () => {
    return (
        <>
            <div className={homepage}>
                <h1 className={pageTitle}>Select Your Sections</h1>
                <main className={sectionContainer}>
                    {resumeSectionList.map((section, idx) => (
                        <ResumeSections
                            key={idx}
                            id={idx}
                            sectionName={section.name}
                            active={section.active}
                        />
                    ))}
                    <div className={btnContainer}>
                        <PrimaryButton
                            type="button"
                            disabled={false}
                            onClick={() => true}
                        >
                            Save and Next
                        </PrimaryButton>
                    </div>
                </main>
            </div>
        </>
    );
};
