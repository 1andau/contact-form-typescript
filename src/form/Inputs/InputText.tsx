 У меня есть селект "Продукт" - selectProductsState,  с выпадающим списком, его JSON c бэка выглядит так: 
{
  CODE: "975";
  ID: "1";
  NAME: "Ипотека - Кабинет риелтора";
  PREFERENTIAL_PROGRAM: ["1", "2"];
  TYPE_MARKET:["1", "2", "3"]
}
Так же, у меня есть еще два дополнительных селекта,
 PREFERENTIAL_PROGRAM - это preferential, TYPE_MARKET - это typeMarket. В чем суть, если в поле "Продукт" у меня выбрано значение с CODE "975", то 
 в полях preferential и typeMarket нужно отрисовывать только те варианты, которые находятся в массиве для CODE "975".
 Если в CODE: "975" находится TYPE_MARKET:["1"], то мы отрисовываем в селекте typeMarket только пункт с ID === 2
 Как это сделать? 

 
const CreditInfo = (props) => {
    const [selectProductsState, setSelectProductsState] = useState('975')  
    //Льготная программа
    const [preferential, setPreferential] = useState(""); 
    const preferentialList = useSelector((state) => state.preferential.data)
//Тип рынка
const [typeMarket, setTypeMarket] = useState(""); 
const marketTypeList = useSelector((state) => state.marketType.data)

    const changeProducts = (event) => {
        let selectedProductId = null;
        if(event.target) {
            selectedProductId = event.target.value; 
        } else {
            selectedProductId = event; 
        }
        setSelectProductsState(selectedProductId);
    
        const selectedProduct = productType.filter(product => product.UF_PRODUCTS.includes(selectedProductId));
        const requiredType = selectedProduct.filter(product => product.REQUIRED);
        setRequirdTypes(requiredType);
        setTypeDocuments(selectedProduct); 
    }

    const changeTypeMarket = (e) => {
        setTypeMarket(e.target.value);
      }
      const changePreferential = (e) => {
        setPreferential(e.target.value);
      }
  const productList = productsSelectList.map((el) => {
    return (
      <option
        className="parameter__option_all"
        key={el.ID}
        value={el.CODE}
      >
        {el.NAME}
      </option>
    );
  });

    
    return(
        <>
    <label className={"par"} htmlFor="target">Продукт</label>
      <select
     value={selectProductsState}
     onChange={changeProducts}>
{productList}
      </select>
        
        <select
        value={typeMarket}
        onChange={changeTypeMarket}>
        <option className="par">Выберите тип рынка</option>
        {marketTypeList.map((el) => (
  <option
  key={el.ID}
value={el.ID}>
  {el.NAME}
</option>
))} </select>

    <select
          value={preferential}
          onChange={changePreferential} > 
<option className="par"> Выберите льготную программу</option>
{preferentialList.map((el) => (
  <option
  key={el.ID}
  value={el.ID}>
  {el.NAME}
</option>
))}
</select> 
        </>

    )
}
