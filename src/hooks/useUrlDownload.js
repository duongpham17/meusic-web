import axios from 'axios';

const useUrlDownload = () => {
    /**
     * @param {string} url - mp3 url
     * @param {string} fileName - fileName of the downloaded content
     * @param {string} ext - file extension E.g jpeg, txt, csv, mp3, wav...
    */
    const download = async (url, fileName, ext) => {

        const blob = await axios.get(url, {responseType: 'blob'});

        const data = new Blob([blob.data]);

        const href = URL.createObjectURL(data);

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