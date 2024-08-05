export const Todo = function (name, description, day, month, urgency, checked) {
    this.name = name;
    this.description = description; 
    this.day = day;
    this.month = month;
    this.urgency = urgency;
    this.checked = checked;

    this.getName = () => this.name;
    this.getDescription = () => this.description;
    this.getDay = () => this.day;
    this.getMonth = () => this.month;
    this.getUrgency = () => this.urgency;
    this.checked = () => this.checked;

    this.setName = (newName) => this.name = newName;
    this.setDescription = (newDescription) => this.description = newDescription;
    this.setDay = (newDay) => this.day = newDay;
    this.setMonth = (newMonth) => this.month = newMonth;
    this.setUrgency = (newUrgency) => this.urgency = newUrgency;
    this.setChecked = (newChecked) => this.checked = newChecked;
}