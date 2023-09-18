export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Soumya_124",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "biswassoumya@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Soham_456",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "haldersoham@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Subham_444",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "subham@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Amit_332",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "amit@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Ankit_901",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "amit12@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Rupankar_555",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "rupankar@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Santunu_912",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "santunu@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Asish_001",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "asish2@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Alit_911",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "alit5@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Suman_881",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "suman11@gmail.com",
      status: "active",
      age: 65,
    },
  ];