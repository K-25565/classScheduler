import { 
    FETCH_COURSES,
    TOGGLE_ENROLLED,
} from "../actions/types";

let currentAmount = 0;
const maxAmount = 5;

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COURSES:
            return [
                ...state,
                ...action.payload
            ]

        case TOGGLE_ENROLLED:
            //console.log(action.payload);
            const newCourses = state.map(course => {
                if (course.id == action.payload) {
                    if (course.enrolled === true) {
                        course.enrolled = false;
                        currentAmount--;
                    } else {
                        if (currentAmount < maxAmount) {
                            course.enrolled = true;
                            currentAmount++;
                        } else {
                            document.getElementById(`action-${course.id}`).classList.remove("action-remove");
                        }
                    }
                }
                return course;
            });
            return [
              ...newCourses  
            ];

        default:
            return state;
    }
}