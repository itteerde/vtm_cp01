import { Document, DocumentData } from "./Document.mjs";

VERSION = '0.0.0.1';

class CourtCaseData {

    #version = VERSION;

}

class CaseFiling extends Document {

    #version = VERSION;

    constructor(data, options = {}) {
        super(data);

        // TODO: apply options

        this.received = new Date();
    }
}

class CourtCase {

    #documents;
    #decision;
    #version = VERSION;

    DECISSIONS = {
        'dismissed': {
            label: 'dismissed',
            desciption: ``
        },
        'sumbitted': {
            label: 'submitted',
            description: ``
        },
        'concluded': {
            label: 'concluded',
            desciption: ``
        }
    };

    constructor(data) {
        this.documents = new Map();
        this.decission = undefined;
    }

    isActive() {
        return !this.decission;
    }

    addDocument(document) {
    }

    getDocument(id) {
    }

    filterDocuments(f) {
    }
}