import { Pipe } from '@angular/core';
export class DurationPipe {
    // transform ms into duration
    transform(value) {
        let string = "";
        value /= 1000; //ms to seconds
        value = Math.floor(value);
        let minutes = Math.floor(value / 60);
        if (value < 3600) { // less than 1h
            const seconds = value - (minutes * 60);
            if (seconds < 10) {
                string = `${minutes}:0${seconds}`;
            }
            else {
                string = `${minutes}:${seconds}`;
            }
        }
        else {
            const hours = Math.floor(minutes / 60);
            minutes = minutes - (hours * 60);
            string = `${hours}h ${minutes}m`;
        }
        return string;
    }
}
DurationPipe.decorators = [
    { type: Pipe, args: [{
                name: 'duration'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmFuY2VzY28vUHJvamVjdHMvYW5ndWxhci1jYXJvdXNlbC9wcm9qZWN0cy9zaW1wbGUtY2Fyb3VzZWwvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2R1cmF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLFlBQVk7SUFFdkIsNkJBQTZCO0lBQzdCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksSUFBSSxDQUFBLENBQUMsZUFBZTtRQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVyQyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRyxlQUFlO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QyxJQUFJLE9BQU8sR0FBRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxHQUFHLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxNQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7YUFDbEM7U0FDRjthQUFNO1lBQ0wsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkMsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqQyxNQUFNLEdBQUcsR0FBRyxLQUFLLEtBQUssT0FBTyxHQUFHLENBQUM7U0FDbEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUExQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdkdXJhdGlvbidcbn0pXG5leHBvcnQgY2xhc3MgRHVyYXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgLy8gdHJhbnNmb3JtIG1zIGludG8gZHVyYXRpb25cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBzdHJpbmcgPSBcIlwiO1xuICAgIHZhbHVlIC89IDEwMDAgLy9tcyB0byBzZWNvbmRzXG4gICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcblxuICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih2YWx1ZSAvIDYwKTtcblxuICAgIGlmICh2YWx1ZSA8IDM2MDApIHsgIC8vIGxlc3MgdGhhbiAxaFxuICAgICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlIC0gKG1pbnV0ZXMgKiA2MCk7XG4gICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHN0cmluZyA9IGAke21pbnV0ZXN9OjAke3NlY29uZHN9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZyA9IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIC0gKGhvdXJzICogNjApO1xuICAgICAgc3RyaW5nID0gYCR7aG91cnN9aCAke21pbnV0ZXN9bWA7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxufVxuIl19