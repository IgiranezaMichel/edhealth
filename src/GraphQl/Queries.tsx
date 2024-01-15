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
`;
export const GET_ALL_USER=gql`
query{
    getAllUsers{
        name
        email
        phoneNumber
        profilePicture
        dob
        gender
    }
}`;
export const USER_lIST_PAGINATION=gql`
query($pageNumber:Int,$pageSize:Int,$sortBy:String){
    useListPagination(pageNumber:$pageNumber,pageSize:$pageSize,sortBy:$sortBy){
        content{
            id
            name
            profilePicture
            email
            phoneNumber
            dob
            gender
            role
        }
        pageNumber
        pageSize
        size
    }
}
`;
// hospital
export const HOSPITAL_lIST_PAGINATION=gql`
query($pageNumber:Int,$pageSize:Int,$sortBy:String){
    hospitaListPagination(pageNumber:$pageNumber,pageSize:$pageSize,sortBy:$sortBy){
        content{
            id
            name
            logo
            createdOn
            location{
                name
                location{
                    name
                    location{
                        name
                    }
                }
            }
        }
        pageNumber
        pageSize
        size
    }
}
`;

export const SCHOOL_lIST_PAGINATION=gql`
query($pageNumber:Int,$pageSize:Int,$sortBy:String){
    schoolListPagination(pageNumber:$pageNumber,pageSize:$pageSize,sortBy:$sortBy){
        content{
            id
            name
            logo
            createdOn
            location{
                name
                location{
                    name 
                    location{
                    name  
                } 
                }
            }
        }
        pageNumber
        pageSize
        size
    }
}
`;
export const SCHOOL_SIZE=gql`
query{
    schoolSize
}
`;
// location
export const GET_ALL_LOCATION=gql`
query {
    getAllLocations{
        id
        name
        type
       locationList{
        id
        name
        type
        locationList{
         id
        name
        type
        }
      }
    }
}
`;
export const TRAINING_LIST_PAGINATION=gql`
query($pageNumber:Int,$pageSize:Int,$sortBy:String,$behaviour:String,$status:Boolean){
    trainingListPagination(pageNumber:$pageNumber,pageSize:$pageSize,sortBy:$sortBy,behaviour:$behaviour,status:$status){
        content{
      title
      hospital{
        name
        logo
        location{
          name
          location{
            name
            location{
              name
            }
          }
        }
      }
      postDate
    }
    }
}
`