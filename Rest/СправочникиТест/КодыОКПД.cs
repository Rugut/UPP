
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class КодыОКПД:V82.Rest.СправочникиТест.СправочникТест
	{
		public static КодыОКПДЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/КодыОКПД/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КодыОКПДЗапрос КодыОКПДЗапрос = null;
			try
			{
				КодыОКПДЗапрос = Клиент.Get(new КодыОКПДЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КодыОКПДЗапрос;
		}
		public static КодыОКПДЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/КодыОКПД/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			КодыОКПДЗапрос КодыОКПДЗапрос = null;
			try
			{
				КодыОКПДЗапрос = Клиент.Get(new КодыОКПДЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return КодыОКПДЗапрос;
		}
		public static void ЗаписатьНовый(КодыОКПДЗапрос КодыОКПДЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/КодыОКПД?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КодыОКПДОтвет = Клиент.Post(КодыОКПДЗапрос);
		}
		public static void Записать(КодыОКПДЗапрос КодыОКПДЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/КодыОКПД?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КодыОКПДОтвет = Клиент.Put(КодыОКПДЗапрос);
		}
		public static void Удалить(КодыОКПДЗапрос КодыОКПДЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/КодыОКПД?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var КодыОКПДОтвет = Клиент.Delete(КодыОКПДЗапрос);
		}
	}
}