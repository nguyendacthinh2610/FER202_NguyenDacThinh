//LightSwitch component using useState to toggle light on and off
import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
function LightSwitch() {
    // Sử dụng useReducer để quản lý trạng thái đèn
    // state: { isLightOn: boolean }
    // action: { type: 'TOGGLE' }
    const initialState = { isLightOn: false };
    function reducer(state, action) {
        switch (action.type) {
            case 'TOGGLE':
                return { ...state, isLightOn: !state.isLightOn };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isLightOn } = state;
    // Hàm để chuyển đổi trạng thái đèn (gửi action tới reducer)
    const toggleLight = () => dispatch({ type: 'TOGGLE' });
    // Style chung cho các button
    const buttonStyle = {  
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
    };
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>     
            <h2>Công Tắc Đèn</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Đèn hiện đang: {isLightOn ? 'Bật' : 'Tắt'}  
            </p>
            <Button
                onClick={toggleLight}   
                style={{ 
                    ...buttonStyle,
                    background: isLightOn ? 'red' : 'green',
                    color: 'white'
                }}  
            >
                {isLightOn ? 'Tắt Đèn' : 'Bật Đèn'}  
            </Button>   
        </div>
    );
}
export default LightSwitch;
