

interface ItemProps {
    data?: string;
    label: string;
  }
  
  const Item = ({ data, label }: ItemProps): JSX.Element => (
    <div>
      <label>{label}</label>
      <h1>{data}</h1>
    </div>
  );
  
  export default Item;