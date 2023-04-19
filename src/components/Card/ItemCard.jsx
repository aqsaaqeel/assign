export const ItemCard = (props) => {
  return (
    <div key={props.id} className="m-4 w-1/4">
      <img
        src={props.avatar}
        alt={props.name}
        className="w-full h-48 w-48 object-cover rounded-lg shadow-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium">{props.name}</h3>
        <p className="mt-2 text-gray-500">{props.email}</p>
      </div>
    </div>
  );
};
