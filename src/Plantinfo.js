import React from 'react';
import './Plantinfo.css'; 
import logo from './image/logo.pic';
import dangerousImage from './image/dangerous.jpg'
import safeImage from './image/safe.jpg'

function Plantinfo() {

        // Define the test function that returns a string.
        const test1 = () => {
            // For demonstration, returning a static string.
            // Replace with your actual logic if needed.
            return "No";
        };
        // Define the test function that returns a string.
        const test2 = () => {
            // For demonstration, returning a static string.
            // Replace with your actual logic if needed.
            return "Plant name is Lavender";
        };
        // Define the test function that returns a string.
        const test3 = () => {
            // For demonstration, returning a static string.
            // Replace with your actual logic if needed.
            return "Lavender is a perennial shrub native to the Mediterranean region, known for its fragrant purple flowers and silvery-green foliage. It's a popular choice in gardens and landscapes due to its aromatic scent and aesthetic appeal. Beyond its beauty, lavender is also prized for its essential oil, which is used in aromatherapy for relaxation and stress relief. The plant thrives in sunny locations with well-draining soil and has been historically used for medicinal purposes, culinary dishes, and cosmetics.";
        };
        // Define the test function that returns a string.
        const test4 = () => {
            // For demonstration, returning a static string.
            // Replace with your actual logic if needed.
            return "110";
        };
    return (
        <div className="container">
            

            <div className="drawing">
                {/* Your drawing or image goes here. Placeholder below: */}
                <img src={logo} alt="InvaScan Logo" />
                    <path d="M10 10 Q90 10 90 90 T10 90" fill="none" stroke="black"/>
            </div>

            <div className="header-box">
            <div className="detail-box">
                <strong>Invasive (or not)</strong>

                {test1() === "Yes" ? (
    <>
        <p>The plant is dangerous</p>
        <img src={dangerousImage} alt="Dangerous Plant" className="smallImage" />
    </>
) : test1() === "No" ? (
    <>
        <p>The plant is safe</p>
        <img src={safeImage} alt="Safe Plant" className="smallImage" />
    </>
) : null}
            </div>
                <div className="detail-box">
                    
                    <strong>NameOfPlant</strong> {/* Making it bold as a title */}
                    <p>{test2()}</p> {/* Display the result from the test function */}
                </div>
            </div>

            <div className="detail-box">
                Information
                <strong>Information</strong> {/* Making it bold as a title */}
                <p>{test3()}</p> {/* Display the result from the test function */}
            </div>

            <div className="detail-box">
                <strong> Contact Relevent Dpt.</strong> {/* Making it bold as a title */}
                <p>{test4()}</p> {/* Display the result from the test function */}
            </div>
        </div>

    );
}

export default Plantinfo;
