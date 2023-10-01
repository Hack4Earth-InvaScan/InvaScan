const plantRecognitionAPIKey = process.env.REACT_APP_PLANT_RECOGNITION_APP_CODE || '';
const regex = /data:.*base64,/

async function recognize(img_base64_data) {
    const url = 'https://plant.market.alicloudapi.com/plant/recognize2';
    var base64_string = img_base64_data.replace(regex, '');
    const formdata = new URLSearchParams();
    formdata.append('img_base64', base64_string);

    if (plantRecognitionAPIKey === '') {
        throw new Error('No plant recognition API key provided');
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `APPCODE ${plantRecognitionAPIKey}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formdata,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default recognize;