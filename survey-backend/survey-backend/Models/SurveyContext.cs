using Microsoft.EntityFrameworkCore;

namespace survey_backend.Models
{
    public class SurveyContext : DbContext
    {
        public DbSet<Survey> Surveys { get; set; }

        public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
        {
        }
    }
}
