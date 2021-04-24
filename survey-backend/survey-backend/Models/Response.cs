using System;

namespace survey_backend.Models
{
    public class Response
    {
        public long ResponseId { get; set; }
        public long QuestionId { get; set; }
        public string TextContent { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
