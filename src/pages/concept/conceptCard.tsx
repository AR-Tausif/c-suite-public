interface TProps {
    conceptData: {
        title: string;
        description:string;
        image:string;
    }
}
export const ConceptCard = ({conceptData:{image}}:TProps) => {

    return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={image}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <p className="text-md font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <span className="text-gray-500 mr-3 text-sm">
            Valor of Bangladesh is proud to bring to you. United Commercial Bank
            Presidents Meet the Mastero, a uniqe one-on-one...
          </span>
          <p className="text-blue-600">Learn more {">"}</p>
          {/* discussion among some of the leading minds in our nation in the niche that they specialize in. */}
        </div>
      </a>
    </div>
  );
};
