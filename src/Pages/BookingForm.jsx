

const BookingForm = () => {
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">Booking Form</h1>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" required />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" required />
                <input type="text" placeholder="Country" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" required />
                <input type="date" placeholder="Date of Travel" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" required />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
