
const InventoryItems = ({ items, selectedItem, onItemSelect }) => {
  return (
    <div className="inventory-items flex flex-wrap justify-center space-x-4 mb-6">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onItemSelect(item)}
          className={`inventory-item p-4 border rounded-lg ${
            item === selectedItem ? 'bg-primary-orange-50' : 'bg-gray-100'
          }`}
        >
          <h2 className="text-lg font-medium">{item}</h2>
        </button>
      ))}
    </div>
  );
};

export default InventoryItems;
