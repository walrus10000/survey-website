using Microsoft.EntityFrameworkCore;

namespace survey_backend.Models
{
    public class ResponseContext : DbContext
    {
        public DbSet<Response> Responses { get; set; }

        public ResponseContext(DbContextOptions<ResponseContext> options) : base(options) 
        {
        }
    }
}
