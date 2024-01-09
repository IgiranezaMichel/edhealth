import { gql } from "@apollo/client";

export const SAVE_TRAINING=gql`
mutation saveTraining($input:inputTraining){
    saveTraining(input:$input){
        id
        title
        deadline
    }
}
`;
export const SAVE_USER=gql`
mutation($input:inputUser){
    saveUser(input:$input){
        name
        email
        phoneNumber
        profilePicture
    }
}
`;
export const DELETE_USER_BY_ID=gql`
mutation($input:Long){
    deleteUser(id:$input)
}
`;
export const SAVE_LOCATION=gql`
mutation($input:inputLocation){
    saveLocation(input:$input){
        id
        name
        type
    }
}
`;
// hospital
export const SAVE_HOSPITAL=gql`
mutation($input:inputHospital){
    saveHospital(input:$input){
        id
        name
    }
}
`;
// hospital
export const SAVE_SCHOOL=gql`
mutation($input:inputSchool){
    saveSchool(input:$input){
        id
        name
    }
}
`;
