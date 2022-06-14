/** @type {Required<ResumeSchemaLegacy>} */
export const resumeJsonTemplateLegacy = {
    basics: {
        name: '',
        label: '',
        picture: '',
        email: '',
        phone: '',
        website: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: []
};

/** @type {Required<ResumeSchemaStable>} */
export const resumeJsonTemplateStable = {
    basics: {
        name: '',
        label: '',
        image: '',
        email: '',
        phone: '',
        url: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: []
};

/**
 * Beta can be combined with latest, so this is a partial (diff)
 * Currently even with 1.0
 * @type {Partial<ResumeSchemaBeyondSpec>}
 */
export const resumeJsonTemplateBetaPartial = {};
