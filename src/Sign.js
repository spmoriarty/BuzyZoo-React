export default function Sign(props) {
  return (
  
    <>
      <div> {props.isOpen
        ? 'Get it On' : 'Show time later'}
      </div>
      <div>
        {props.isOpen && 'this shows only is props.isOpen is truthy'}
        {props.isOpen || 'this shows only is props.isOpen is falsey'}
      </div>
    </>
  );
}