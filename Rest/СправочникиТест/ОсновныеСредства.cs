
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ОсновныеСредства:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ОсновныеСредстваЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОсновныеСредства/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсновныеСредстваЗапрос ОсновныеСредстваЗапрос = null;
			try
			{
				ОсновныеСредстваЗапрос = Клиент.Get(new ОсновныеСредстваЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсновныеСредстваЗапрос;
		}
		public static ОсновныеСредстваЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Catalogs/ОсновныеСредства/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсновныеСредстваЗапрос ОсновныеСредстваЗапрос = null;
			try
			{
				ОсновныеСредстваЗапрос = Клиент.Get(new ОсновныеСредстваЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсновныеСредстваЗапрос;
		}
		public static ОсновныеСредстваЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ОсновныеСредства/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ОсновныеСредстваЗапрос ОсновныеСредстваЗапрос = null;
			try
			{
				ОсновныеСредстваЗапрос = Клиент.Get(new ОсновныеСредстваЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ОсновныеСредстваЗапрос;
		}
		public static void ЗаписатьНовый(ОсновныеСредстваЗапрос ОсновныеСредстваЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ОсновныеСредства?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсновныеСредстваОтвет = Клиент.Post(ОсновныеСредстваЗапрос);
		}
		public static void Записать(ОсновныеСредстваЗапрос ОсновныеСредстваЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ОсновныеСредства?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсновныеСредстваОтвет = Клиент.Put(ОсновныеСредстваЗапрос);
		}
		public static void Удалить(ОсновныеСредстваЗапрос ОсновныеСредстваЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ОсновныеСредства?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ОсновныеСредстваОтвет = Клиент.Delete(ОсновныеСредстваЗапрос);
		}
	}
}