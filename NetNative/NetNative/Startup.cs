using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace NetNative
{
    public class Startup
    {
        public async Task<object> Invoke(string jsonCondition)
        {
            var persons = GenerateData(); //simulate got data from db
            var filter = JsonConvert.DeserializeObject<Filter>(jsonCondition);

            // filter the result back as json string
            var retResult = persons.Where(p => p.Name.Contains(filter.SearchName) && (p.Age > filter.StartAge || p.Age < filter.EndAge)).ToList();

            return JsonConvert.SerializeObject(retResult);
        }

        private List<Person> GenerateData()
        {
            List<Person> result = new List<Person>();
            result.Add(new Person() { Name = "code6421", Age = 15 });
            result.Add(new Person() { Name = "tom", Age = 16 });
            result.Add(new Person() { Name = "mary", Age = 17 });
            result.Add(new Person() { Name = "david", Age = 18 });
            result.Add(new Person() { Name = "baden", Age = 15 });
            result.Add(new Person() { Name = "rich", Age = 19 });
            result.Add(new Person() { Name = "jad", Age = 25 });
            result.Add(new Person() { Name = "peter", Age = 35 });
            result.Add(new Person() { Name = "mark", Age = 29 });
            result.Add(new Person() { Name = "moce", Age = 28 });
            result.Add(new Person() { Name = "terry", Age = 25 });
            result.Add(new Person() { Name = "winne", Age = 41 });
            result.Add(new Person() { Name = "larry", Age = 71 });
            result.Add(new Person() { Name = "John", Age = 61 });
            result.Add(new Person() { Name = "nyny", Age = 31 });
            result.Add(new Person() { Name = "fancy", Age = 51 });
            result.Add(new Person() { Name = "robbie", Age = 91 });
            return result;
        }
    }

    public  class Filter
    {
        public string SearchName { get; set; }

        public int StartAge { get; set; }

        public int EndAge { get; set; }
    }
}
