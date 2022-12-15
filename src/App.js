import "./App.css";
import { useState } from "react";
import Course from "./components/Course";

function App() {
   const [Kategori, setKategori] = useState("semua");

   const dataCourses = [
      {
         kategori: "development",
         judul: "DevOps",
         caption: "DevOps Engineering",
      },
      {
         kategori: "development",
         judul: "Flutter",
         caption: "Flutter Mobile App Development",
      },
      {
         kategori: "design",
         judul: "3D Architecture",
         caption: "3D Architecture, Interior & Landscape with SketchUp",
      },
      {
         kategori: "design",
         judul: "3D Animation",
         caption: "Blender : 3D Animation Modeling",
      },
      {
         kategori: "marketing",
         judul: "Content Creator",
         caption: "Basic Fundamental Content Creator",
      },
      {
         kategori: "marketing",
         judul: "Digital Marketing",
         caption: "Digital Markering for instagram dan google ads",
      },
      {
         kategori: "datascience",
         judul: "Python",
         caption: "Python - Data Science",
      },
   ];

   let courseCategory = dataCourses.filter((value) => {
      if (Kategori == "semua") {
         return true;
      } else {
         return Kategori == value.kategori;
      }
   });

   return (
      <>
         <div className="mx-auto text-center p-4 font">
            <p className="btn btn-primary">Daftar Kelas</p>
            <h2 className="mb-3 fw-bolder">Kelas Bootcamp Yang Tersedia</h2>
            <button className={`mx-2 btn btn-outline-success ${Kategori === "semua" ? "btn-success active" : "btn-outline-success"}`} onClick={() => setKategori("semua")}>
               Semua
            </button>
            <button className={`mx-2 btn btn-outline-success ${Kategori === "development" ? "btn-success active " : "btn-outline-success"}`} onClick={() => setKategori("development")}>
               Development
            </button>
            <button className={`mx-2 btn btn-outline-success ${Kategori === "design" ? "btn-success active" : "btn-outline-success"}`} onClick={() => setKategori("design")}>
               Design
            </button>
            <button className={`mx-2 btn btn-outline-success ${Kategori === "marketing" ? "btn-success active" : "btn-outline-success"}`} onClick={() => setKategori("marketing")}>
               Marketing
            </button>
            <button className={`mx-2 btn btn-outline-success ${Kategori === "datascience" ? "btn-success active" : "btn-outline-success"}`} onClick={() => setKategori("datascience")}>
               Data Science
            </button>
         </div>
         <div className="container font">
            <div className="row">
               {courseCategory.map((course, index) => (
                  <div key={index} className="col-4 p-5 rounded shadow-sm my-2 text-center">
                     <Course kategori={course.kategori} judul={course.judul} caption={course.judul} />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}

export default App;
