export default function QuizScreen({})
{
    return (
        <div class="background">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="maindiv"> 
                        <div class="quizstatus">
                            <h3 style={"color: black; text-align: center;"}>Quiz Status</h3>
                            <h5 style={"color: black; margin-top: 2em; text-align: center;"}>Current question __ of __</h5>
                            <h5 style={"color: black; text-align: center;"}>Total Questions - __</h5>
                            <h5 style={"color: black; text-align: center;"}>Questions answered - __</h5>
                            <h5 style={"color: black; text-align: center;"}>Questions remaining - __</h5>
                        
                        </div> 
                    
                    <div class="question">Q1. Howmuch marks will you award to us for this review ?</div>
                    {/* <!-- Radio buttons --> */}
                    
                
                    <div style={"display: inline-block; margin-top: 3.3em;"}>
                        <div class="options">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" class="optionlabel">
                                10
                                </label>
                                </input>
                            </div>
                        </div>
    
                        <div class="options">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" class="optionlabel">
                                10.00
                                </label>
                                </input>
                            </div>
                        </div>
                        
                        <div class="options">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                            <label class="form-check-label" class="optionlabel">
                            Ten
                            </label>
                            </input>
                        </div>
                        </div>

                        <div class="options">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                                <label class="form-check-label" class="optionlabel">
                                2x5 = 10
                                </label>
                            </input>
                        </div>
                    </div>
                    
                    <div>
                        <button class="btn btn-primary" class="buttons-prev">Previous</button>
                    
                        <button class="btn btn-primary" class="buttons-next">Next</button>
                    </div>
                    
                </div>
                </div>
        </div>
    </div>
            </div>
        </div>
    ) ;
}