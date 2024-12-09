"use client"
import OrderSummary from '@/components/OrderSummary';
import { useState } from 'react';

const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState('deliver');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    locality: '',
    country: 'India',
    saveAddress: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, country: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const isFormValid = Object.values(formData).every((value) => value !== '');

  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-lg flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 p-6">
          <h2 className="text-lg font-semibold mb-4">How would you like to get your order?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Customs regulation for India requires a copy of the recipient KYC. The address on
            the KYC needs to match the shipping address. Our courier will contact you via SMS/email
            to obtain a copy of your KYC. The KYC will be stored securely and used solely for the
            purpose of clearing customs (including sharing it with customs officials) for all
            orders and returns.
          </p>
          <div className="flex items-center mb-6">
            <button
              className={`border px-4 py-3 rounded-lg flex items-center gap-2 ${
                deliveryOption === 'deliver' ? 'border-pink-500' : 'border-gray-300'
              }`}
              onClick={() => setDeliveryOption('deliver')}
            >
              <i className="bx bx-package text-pink-500"></i>
              Deliver It
            </button>
          </div>

          <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
            </div>
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              value={formData.addressLine2}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                name="locality"
                placeholder="Locality"
                value={formData.locality}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="country"
                className="border border-gray-300 rounded-lg p-3 w-full"
                value={formData.country}
                onChange={handleSelectChange}
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="saveAddress"
                checked={formData.saveAddress}
                onChange={(e) => setFormData({ ...formData, saveAddress: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="saveAddress" className="text-sm text-gray-600">
                Save this address to my profile
              </label>
            </div>
            <button
              type="submit"
              className={`bg-black text-white py-3 rounded-lg w-full font-semibold ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isFormValid}
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Section */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
