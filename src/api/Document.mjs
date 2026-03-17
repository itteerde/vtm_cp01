import { LegalEntity, LegalEntityData } from "./LegalEntity.mjs";

class DocumentData {

    #version = '0.0.0.1';

    /**
     * 
     * @param {LegalEntity} plaintiff 
     * @param {LegalEntity} defendant 
     * @param {Date} dateEntered 
     */
    constructor(plaintiff, defendant, dateEntered) {
        this.plaintiff = plaintiff;
        this.defendant = defendant;
        this.dateEntered = dateEntered;
        this.internalContent = undefined; // TODO: how?
        this.externalContent = undefined; // TODO: how, URL?
    }
}

class Document {

    #version = '0.0.0.1';

    /**
     * 
     * @param {DocumentData} data 
     */
    constructor(data) {

    }
}

export { Document, DocumentData };