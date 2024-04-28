import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const handleDelete =_id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            fetch (`http://localhost:5000/location/${_id}`,{
                method: 'DELETE',

            })
            .then (res => res.json())
            .then (data =>{
                console.log(data);
                if(data.deletedCount > 0){
                       Swal.fire({
                title: "Deleted!",
                text: "Your location has been deleted.",
                icon: "success"
              });
                }
            })
            }
          });
    }


  const { _id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/details/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, [_id]);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex md:items-center">
        <div className="md:flex-shrink-0">
          <img className="h-auto w-full object-cover md:w-64" src={details.image} alt={details.tourists_spot_name} />
        </div>
        <div className="p-8">
          <div className="text-3xl font-semibold text-gray-800">{details.tourists_spot_name}</div>
          <p className="mt-2 text-gray-600">{details.short_description}</p>
          <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Country:</span> {details.country_name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Total Visitors:</span> {details.total_visitors_per_year}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Average Cost:</span> {details.average_cost}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Seasonality:</span> {details.seasonality}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Travel Time:</span> {details.travel_time}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">User Email:</span> {details.user_email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">User Name:</span> {details.user_name}
            </p>
          </div>
        </div>
<div>
<div className="join join-horizontal lg:join-vertical gap-6 mr-6">

  <button className="btn join-item">update</button>
  <button onClick={()=>handleDelete(_id)} className="btn join-item">Delete</button>
</div>
</div>
      </div>
    </div>
  );
};

export default Details;
