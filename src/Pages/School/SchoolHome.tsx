import { SchoolNavigation } from "../../Component/School/SchoolNavigation"
import { useState, useEffect } from 'react'
import { RegisterStudent } from "./RegisterStudent";
import { useQuery } from "@apollo/client";
import { SEARCH_STUDENT } from "../../GraphQl/Queries";
export const SchoolHome = () => {
  const [toDay, setToDay] = useState(new Date());
  const [search, setSearch] = useState('');
  const [schoolId, setSchoolId] = useState(2);
  const [studentList, addStudentList] = useState([]);
  const { data, loading, error } = useQuery(SEARCH_STUDENT, {
    variables: { schoolId: schoolId, search: search }
  });
  useEffect(() => {
    const searchStudent = async () => {
      if (data) {
        addStudentList(data.searchStudent);
      }
    }
    if (search.length != 0) {
      searchStudent();
    }
    const interval = setInterval(() => {
      setToDay(new Date());
    }, 1000);
    return () => clearInterval(interval);

  }, [toDay]);
  const days = ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
  return (
    <SchoolNavigation>
      <div className="mb-5 fw-bold">
        <span className="float-end d-block">
          {toDay.getHours() < 12 ? <span>Good Morning <b>,</b></span> : toDay.getHours() == 12 ? <span>It's Lunch time, Enjoy the meal </span> : toDay.getHours() < 16 ?
          <span>Good Afternoon <b>,</b></span> : <span>Good Evening  <b>,</b></span>}{days[toDay.getDay()]} {toDay.getHours() + ':' + toDay.getMinutes() + ':' + toDay.getSeconds()}
        </span>
      </div>
      <section className="rounded-5 bg-body-tertiary border p-2 row col-12 m-auto d-flex align-content-center justify-content-center">
        <section className="">
          <div>
            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search ..." className="float-end form-control w-25 border border-primary-subtle mt-2" />
          </div>
          {search.length == 0 ? <RegisterStudent /> :
            <main>
              {loading && <div><div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div></div>}
              {
                (studentList.length != 0) ? <main>
                  <div
                    className="table-responsive"
                  >
                    <table
                      className="table table-primary mt-4"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Contact Detail</th>
                          <th>Gender</th>
                          <th>Date of Birth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          studentList.map((data:any, index) => {
                            return (
                              <tr className="">
                                <td scope="row">{index+1}</td>
                                <td>{data.name}</td>
                                <td>
                                  <div><i className="bi bi-telephone"></i> {data.phoneNumber}</div>
                                  <div><i className="bi bi-envelope"></i> {data.email}</div>
                                </td>
                                <td>{data.gender}</td>
                                <td>
                                <div><i className="bi bi-calendar"></i> {String(data.dob).split('T')[0]}</div>
                                </td>
                               
                              </tr>
                            )
                          })
                        }

                      </tbody>
                    </table>
                  </div>

                </main> : <div className="mt-5 p-3 text-center">Data not found</div>
              }
            </main>}
        </section>
      </section>

    </SchoolNavigation>
  )
}