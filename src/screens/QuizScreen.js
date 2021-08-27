export default function QuizScreen({})
{
    return (
        <div class="maindiv">
        <div>
            <div class = "container">
                <div class = "col-md-12">
                    <div class = "row">
                        <br/><br/><br/>
                        <p class = "questioncount">Question _ of _</p>
                        <br/><br/><br/><br/>
                        <p id= "quizquestion">Who is the president of India?</p>
                        <br/><br/><br/>
                        <div class = "radio">
                            <input class="form-check-input" type="radio" name="option1" id = "radiobutton"/>
                            <label id="options" for="option1">
                                Ramnath Govind
                            </label>
                            <br/><br/>
                            <input class="form-check-input" type="radio" name="option2" id = "radiobutton"/>
                            <label id="options" for="option2">
                                Narendra Modi
                            </label>
                            <br/><br/>
                            <input class="form-check-input" type="radio" name="option3" id = "radiobutton"/>
                            <label id="options" for="option3">
                                Rahul Gandhi
                            </label>
                            <br/><br/><br/><br/>
                            <button class="btn btn-primary" id="buttonstyle"> Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ) ;
}