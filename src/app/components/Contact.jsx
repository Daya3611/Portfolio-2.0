// components/OrderForm.jsx
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"


const Contact = () => {
  // State variables to hold form input values
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Message, setMessage] = useState('');
  const { toast } = useToast()

  const allFieldsFilled = () => {
    return name !== '' && Email !== '' && Mobile !== '' && Message !== '';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const order = `Name: ${name} \n Email: ${Email} \n Mobile: ${Mobile} \n Message: ${Message}`;

    const token = "6983851386:AAEoTLHFsLY3n2D8328BloIgvBiwXzo1lsI";
    const chat_id = 2061106716;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(order)}`;

    try {
      // Use fetch API to send the request
      const response = await fetch(url, {
        method: 'GET'
      });

      if (response.ok) {
        toast({
          title: "Send",
          description: "Form Submited And sent to Dayanand Gawade",
        })
      } else {
        toast({
          title: "Error",
          description: "Error in sending form",
        })
      }
    } catch (error) {
      alert('An error occurred.');
      console.error('Error:', error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="mb-4 ">
        <label htmlFor="name" className="block text-gray-700 dark:text-white ">Name:</label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input mt-1 block w-full bg-white dark:bg-black rounded-2xl"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Email" className="block text-gray-700 dark:text-white">Email:</label>
        <Input
          id="Email"
          type="text"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-Input mt-1 block w-full bg-white dark:bg-black rounded-2xl"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Mobile" className="block text-gray-700 dark:text-white">Mobile:</label>
        <Input
          id="Mobile"
          type="text"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="form-Input mt-1 block w-full bg-white dark:bg-black rounded-2xl"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Message" className="block text-gray-700 dark:text-white">Message:</label>
        <Textarea
          id="Message"
          type="text"
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="form-Input mt-1 block w-full h-[100px] bg-white dark:bg-black rounded-2xl"
        />
      </div>
      
      <button
        type="submit"
        className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl ${allFieldsFilled() ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!allFieldsFilled()}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
