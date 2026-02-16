class CourtCaseData {

}

class CourtCase {

    DECISSIONS = {
        'dismissed': {
            label: 'Dismissed',
            desciption: ``
        }
    };

    constructor(data) {
        this.documents = [];
        this.decission = undefined;
    }

    isActive() {
        return !this.decission;
    }
}