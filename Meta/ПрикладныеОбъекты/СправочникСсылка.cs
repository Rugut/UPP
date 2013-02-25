
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;
using System.IO;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using System.Runtime.Serialization;

namespace V82.СправочникиСсылка
{
	[DataContract]
	[Serializable]
	public partial class СправочникСсылка
	{
		public static string СтрокаСоединения = "server=10.2.66.29,59635;Database=UPP;Trusted_Connection=True;";//Чтение,ЧтениеКэш,Запись
	}
	public interface IСериализаторProtoBuf
	{
		void СериализацияProtoBuf(Stream Поток);
	}
	public interface IСериализаторJson
	{
		string СериализацияJson();
	}
}
