
import { useState } from 'react';
import { Button, Form, FormLabel } from 'react-bootstrap';

function QrCodeGenerator() {
    const [url, setUrl] = useState('');
    const [qrData, setQrData] = useState('');

    const setUrlMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQrData('');
        setUrl(e.target.value);
    }
    const generateQRCode = () => {
        // Create the QR code data
        setQrData("https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + encodeURIComponent(url));
    }
  return (
    <div className='p-5'>
      <FormLabel for="url-input">Enter URL:</FormLabel>
      <Form.Control type="text" placeholder="URL for creating QR code" className='mb-4' onChange={setUrlMethod}/>
      <Button onClick={generateQRCode}>Generate QR Code</Button>
      <div id="qrcode-container">
        {qrData && 
          <div className="qr-code">
            <img src={qrData} alt="QR Code" />
            <div className="qr-overlay"></div>
          </div>
        }
      </div>
    </div>
  )
}

export default QrCodeGenerator;
