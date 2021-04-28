using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace survey_backend.Models
{
    public class SurveyDTO
    {
        public long SurveyId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
