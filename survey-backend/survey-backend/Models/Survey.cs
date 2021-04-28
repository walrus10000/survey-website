using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace survey_backend.Models
{
    public class Survey
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long SurveyId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreationDate { get; set; }
    }
}
