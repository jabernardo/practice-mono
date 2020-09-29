import MessageGenerator from "@practice-mono/messages";

class HomeController {
    index(req, res, next) {
        res.send({
            'message': MessageGenerator()
        })
    }
}

export default HomeController;
