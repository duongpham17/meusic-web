import axios from 'axios';

const useUrlDownload = () => {
    /**
     * @param {string} url - mp3 url
     * @param {string} fileName - fileName of the downloaded content
     * @param {string} ext - file extension E.g jpeg, txt, csv, mp3, wav...
     * @param {string} mimeType - e.g audio/mp3, audio/mp4, application/json
    */
    const download = async (url, fileName, ext, mimeType) => {

        const {data} = await axios.get(url, {responseType: 'blob'});

        const blob = new Blob([data], {type: mimeType || "octet-stream"});

        let href = URL.createObjectURL(blob);

        const a = Object.assign(document.createElement('a'), {
            href, 
            style:"display:none", 
            download: `${fileName}.${ext}`
        });

        document.body.appendChild(a);

        a.click();
        URL.revokeObjectURL(href);
        a.remove();
    };

    return {
        download
    }
}

export default useUrlDownload