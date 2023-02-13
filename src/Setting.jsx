import { Upload } from 'antd';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './Setting.css'
const Setting = () => {
  const history = useNavigate();
    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }
  const [data, setData]=useState({
    username:"Muhammad Ubaid",
  })
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div className='set' style={{backgroundColor: "white", margin: "auto"}}>
      <br/>
      <div className="setting-main">
      <h3 style={{color:"#61B846",fontSize:'37px',padding:"21px 41px"}}>Setting</h3>

      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>

      {data.username}

     
        <h4 style={{color:'blue'}}>order</h4>
        <h4>Muhammad Ubaid</h4>
        <p>One kg beef <br/><span>10,00 PKR</span></p>                    
        <div className='span-total-div'>
          <span>total <span style={{color:'#61B846',marginLeft:'20px'}}>PKR:185</span></span>
        </div>
       
        <h4>Muhammad Uzaif</h4>
        <p>One kg beef <br/><span>10,00 PKR</span></p>                    
        <div className='span-total-div'>
          <span>total <span style={{color:'#61B846',marginLeft:'20px'}}>PKR:385</span></span>
        </div>                    
       
       <br/>
       
       <Button id='butons' onClick={userlogout} style={{float:"left", backgroundColor: "green"}}>LogOut</Button>
       </div>

    </div>
     

  );
};
export default Setting;