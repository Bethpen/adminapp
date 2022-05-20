export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "user",
    headerName: "Name",
    width: 300,
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
    width: 200,
  },

  {
    field: "phone",
    headerName: "Phone Number",
    width: 200,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.gender}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow White",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    gender: "Male",
    email: "1snow@gmail.com",
    phone: "07066863194"
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    gender: "Female",
    phone: "07066863194"
  },
  {
    id: 3,
    username: "Lannister Phikls",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    gender: "Female",
    phone: "07066863194"
  },
  {
    id: 4,
    username: "Stark Philip",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    gender: "Male",
    phone: "07066863194"
  },
  {
    id: 5,
    username: "Targaryen Green",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    gender: "Female",
    phone: "07066863194"
  },
  {
    id: 6,
    username: "Melisandre Bells",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    gender: "Male",
    phone: "07066863194"
  },
  {
    id: 7,
    username: "Clifford James",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    gender: "Male",
    phone: "07066863194"
  },
  {
    id: 8,
    username: "Frances Bill",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    gender: "Female",
    phone: "07066863194"
  },
  {
    id: 9,
    username: "Roxie Gates",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    gender: "Female",
    phone: "07066863194"
  },
  {
    id: 10,
    username: "Elon Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    gender: "Female",
    phone: "07066863194"
  },
];
