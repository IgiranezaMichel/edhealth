import { gql } from "@apollo/client";

export const FIND_TRAINING_BY_ID=gql`
query findTrainingById($id:Long){
    findTrainingById(id:$id){
        id
        title
        deadline
        postDate
    }
}
`