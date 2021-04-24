namespace survey_backend.Models
{
    public class Question
    {
        public long QuestionId { get; set; }
        public long SurveyId { get; set; }
        public string TextContent { get; set; }
    }
}
