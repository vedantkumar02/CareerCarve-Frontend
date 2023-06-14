const originalList = [
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

export const compareArrays = (_arr) => {
    if (!_arr) return false;
    if (_arr.length !== originalList.length) return false;

    return JSON.stringify(_arr) === JSON.stringify(originalList);
};
