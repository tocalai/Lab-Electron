using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NetNative;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace TestNetNative
{
    [TestClass]
    public class InvokeTest
    {
        private Startup _startup;

        [TestMethod]
        public void Test_Invoke_Input_SearchName_RY_StartAge_10_EndAge_100()
        {
            _startup = new Startup();
            Filter filter = new Filter()
            {
                SearchName = "ry",
                StartAge = 10,
                EndAge = 100
            };

            var jsonCondition = JsonConvert.SerializeObject(filter);

            var expect = 3;
            var actual = _startup.Invoke(jsonCondition);
            
            var retResult = JsonConvert.DeserializeObject<List<Person>>(actual.Result.ToString());

            Assert.AreEqual(retResult.Count, expect);
        }
    }
}
