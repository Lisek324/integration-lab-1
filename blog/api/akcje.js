import {link} from '../db/baza.js' 

class Akcje { 
    findAllPosts = async (req, res) => {
        console.log("wszystkie posty"); 
        const sql = "SELECT * FROM blog_post;";

        try {
            const data = await link.all(sql); 
            console.log(`Query Result: ${data}`);

            res.status(200).json({
                success: true,
                data: data
            });
        } catch(err) {
            console.log('ERROR => ' + err);
            res.status(422).json({
                success: false,
                error: err.message
            });
        }
    }
} 

 
const akcje = new Akcje() ; 
 
export {akcje}; 

