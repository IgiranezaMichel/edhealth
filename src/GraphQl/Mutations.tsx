import { gql } from "@apollo/client";

export const SAVE_TRAINING=gql`
mutation saveTraining($input:inputTraining!){
    saveTraining(input:$input){
        id
        name
    }
}
`