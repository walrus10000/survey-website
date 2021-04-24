using System;

namespace survey_backend.Models
{
    public class Survey
    {
        public long SurveyId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }

    }
}
