// Importing male and female icons
import male_icon from "../Assets/icons8-male-48.png";
import female_icon from "../Assets/icons8-female-48.png";

export const UserItem = ({ firstName, lastName, email, image,gender }) => {
  return (
    <div className="col-sm-4 mb-3   d-inline-block my-2 mx px-2 py-2">
      <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
        <img  src={image} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
        <h5 className="mb-0">
          {firstName} {lastName}   <img src={ gender==="female"?female_icon:male_icon} alt="" className="ml-2"  
          style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
        </h5>
        <span className="small text-uppercase text-muted">{email}</span>
      </div>
    </div>
  );
};
