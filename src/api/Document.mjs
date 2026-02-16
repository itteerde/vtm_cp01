import { LegalEntity, LegalEntityData } from "./LegalEntity.mjs";

class DocumentData {

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
    }
}

class Document {

    /**
     * 
     * @param {DocumentData} data 
     */
    constructor(data) {

    }
}

export { Document, DocumentData };