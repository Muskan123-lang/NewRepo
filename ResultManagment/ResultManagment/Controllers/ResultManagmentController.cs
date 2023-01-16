using Interfaces;
using Microsoft.AspNetCore.Mvc;
using ResultManagment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ResultManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultManagmentController : ControllerBase
    {

        private readonly IRecordsServices _recordsServices;


        // lets do some changes

        public ResultManagmentController(IRecordsServices recordsServices)
        {
            _recordsServices = recordsServices;
        }

        [HttpGet]
        public ActionResult<IEnumerable<StudentRecord>> GetAllStudent()
        {
            return _recordsServices.GetAllStudent().Select(x => new StudentRecord {  Name = x.Name, RollNo = x.RollNo, DateOfBirth = x.DateOfBirth, Score = x.Score }).ToList();//new string[] { "value1", "value2" };
        }

        // GET api/<ResultController>/5
        [HttpGet("{RollNo}")]
        public ActionResult<StudentRecord> GetStudent(int RollNo)
        {
            var student = _recordsServices.GetStudent(RollNo);
            if (student == null)
                return NotFound();
            var studentDetails = new StudentRecord { RollNo = student.RollNo, Name = student.Name, DateOfBirth = student.DateOfBirth, Score = student.Score };
            return studentDetails;
           
        }



        // POST api/<ResultController>
        [HttpPost]
        public ActionResult CreateStudent([FromBody] StudentRecord studentRecord)
        {
            var student = new Interfaces.Records();
            student.RollNo = studentRecord.RollNo;
            student.Name = studentRecord.Name;
            student.DateOfBirth = studentRecord.DateOfBirth;
            student.Score = studentRecord.Score;

            _recordsServices.CreateStudent(student);
            return Ok();
        }



        // PUT api/<ResultController>/5
        [HttpPut("{RollNo}")]
        public ActionResult UpdateStudent(int RollNo, [FromBody] StudentRecord studentRecord)
        {
            var student = _recordsServices.GetStudent(RollNo);
            if (student == null)
                return NotFound();
            student.RollNo = studentRecord.RollNo;
            student.Name = studentRecord.Name;
            student.DateOfBirth = studentRecord.DateOfBirth;
            student.Score = studentRecord.Score;
            _recordsServices.UpdateStudent(RollNo, student);
            return Ok();
        }



        // DELETE api/<ResultController>/5
        [HttpDelete("{RollNo}")]
        public ActionResult DeleteStudent(int RollNo)
        {
            var student = _recordsServices.GetStudent(RollNo);
            if (student == null)
                return NotFound();
            _recordsServices.DeleteStudent(RollNo);
            return Ok();
        }
    }
}
