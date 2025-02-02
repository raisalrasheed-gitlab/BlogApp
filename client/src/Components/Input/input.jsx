import { Input } from 'antd';

const CustomInput = ({ label, type, onChange, value, onKey }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="font-semibold jost ">{label}</label>
        <Input
          className="custom-input h-10 "
          type={type}
          onChange={onChange}
          value={value}
          onKeyDown={onKey}
        ></Input>
      </div>
    </>
  );
};
export default CustomInput;
