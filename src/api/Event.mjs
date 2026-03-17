class EventData {

}

/**
 * Basis for in world events, historical, or just the meeting tomorrow.
 */
class Event {

    /**
     * 
     * @param {EventData} data 
     */
    constructor(data) {
        this.date = data.date;
    }
}