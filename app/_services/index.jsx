import request, { gql } from "graphql-request"

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export const getCourseList=async()=>{
    const query=gql`
    query courseList {
        courseLists(orderBy: publishedAt_DESC) {
          name
          banner {
            url
          }
          free
          id
          tag
        }
      }
    `
    const result=await request(MASTER_URL,query);
    return result;
}

export const getCourseById=async(id,userEmail)=>{
  const query=gql`
  query course {
    courseList(where: {id: "`+id+`"}) {
       {
          id
          name
        }
      }
      description
      name
      id
      free
      banner {
        url
      }
    userEnrollCourses(where: {courseId: "`+id+`",
    userEmail: "`+userEmail+`"}) {
    courseId
    userEmail
    id
  }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;
}

export const EnrollCourse=async(courseId,userEmail)=>{
  const mutationQuery=gql`
  mutation EnrollCourse {
    createUserEnrollCourse(data: {
      courseList: 
      {connect: {id: "`+courseId+`"}}
      userEmail: "`+userEmail+`",
      courseId: "`+courseId+`"}) {
      id
    }
  }
  `
  const result=await request(MASTER_URL,mutationQuery);
  return result;
}
export const GetUserCourseList=async(userEmail)=>{
  const query=gql`
  query UserCourseList {
    userEnrollCourses(where: {userEmail: "`+userEmail+`"}) {
      courseList {
        banner {
          url
        }
        description
        name
        id
        free
        tag
      }
    }
  }
  `
  const result=await request(MASTER_URL,query);
  return result;

}


