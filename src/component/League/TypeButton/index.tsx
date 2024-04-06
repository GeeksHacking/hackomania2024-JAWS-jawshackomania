import { FC } from "react";
import { Button } from 'antd';


interface CustomButtonProps {
    label: string;
    description: string;
    onClick?: () => void;
  }
  
const TypeButton: FC<CustomButtonProps> = ({ label, description, onClick }) => {
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(!isActive);
    //     onClick && onClick();
    // };
    
    return (
    <div 
        style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '10px', 
            overflow: 'hidden', 
            position: 'relative',
        }}
    >
      <Button style={{ width: '100%', height: '100%' }} onClick={onClick}>
        <div style={{ textAlign: 'left', position: 'absolute', overflow: 'hidden', top: 0, left: 0, padding: '10px' }}>
          <h2 style={{ margin: 0 }}>{label}</h2>
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      </Button>
    </div>
);
}
  
export default TypeButton;