
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ЯзыкиНародовМира:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ЯзыкиНародовМираЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЯзыкиНародовМира/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЯзыкиНародовМираЗапрос ЯзыкиНародовМираЗапрос = null;
			try
			{
				ЯзыкиНародовМираЗапрос = Клиент.Get(new ЯзыкиНародовМираЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЯзыкиНародовМираЗапрос;
		}
		public static ЯзыкиНародовМираЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ЯзыкиНародовМира/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЯзыкиНародовМираЗапрос ЯзыкиНародовМираЗапрос = null;
			try
			{
				ЯзыкиНародовМираЗапрос = Клиент.Get(new ЯзыкиНародовМираЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЯзыкиНародовМираЗапрос;
		}
		public static ЯзыкиНародовМираЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ЯзыкиНародовМира/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ЯзыкиНародовМираЗапрос ЯзыкиНародовМираЗапрос = null;
			try
			{
				ЯзыкиНародовМираЗапрос = Клиент.Get(new ЯзыкиНародовМираЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ЯзыкиНародовМираЗапрос;
		}
		public static void ЗаписатьНовый(ЯзыкиНародовМираЗапрос ЯзыкиНародовМираЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ЯзыкиНародовМира?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЯзыкиНародовМираОтвет = Клиент.Post(ЯзыкиНародовМираЗапрос);
		}
		public static void Записать(ЯзыкиНародовМираЗапрос ЯзыкиНародовМираЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ЯзыкиНародовМира?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЯзыкиНародовМираОтвет = Клиент.Put(ЯзыкиНародовМираЗапрос);
		}
		public static void Удалить(ЯзыкиНародовМираЗапрос ЯзыкиНародовМираЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ЯзыкиНародовМира?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ЯзыкиНародовМираОтвет = Клиент.Delete(ЯзыкиНародовМираЗапрос);
		}
	}
}