using Microsoft.EntityFrameworkCore;

namespace survey_backend.Models
{
    public class QuestionContext : DbContext
    {
        public DbSet<Question> Questions { get; set; }

        public QuestionContext(DbContextOptions<QuestionContext> options) : base(options)
        {
        }
    }
}
