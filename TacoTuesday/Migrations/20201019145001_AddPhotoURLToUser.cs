using Microsoft.EntityFrameworkCore.Migrations;

namespace TacoTuesday.Migrations
{
    public partial class AddPhotoURLToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Users");
        }
    }
}
