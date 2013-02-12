
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВложенияЭлектронныхПисем:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВложенияЭлектронныхПисемЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВложенияЭлектронныхПисем/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВложенияЭлектронныхПисемЗапрос ВложенияЭлектронныхПисемЗапрос = null;
			try
			{
				ВложенияЭлектронныхПисемЗапрос = Клиент.Get(new ВложенияЭлектронныхПисемЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВложенияЭлектронныхПисемЗапрос;
		}
		public static ВложенияЭлектронныхПисемЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Catalogs/ВложенияЭлектронныхПисем/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВложенияЭлектронныхПисемЗапрос ВложенияЭлектронныхПисемЗапрос = null;
			try
			{
				ВложенияЭлектронныхПисемЗапрос = Клиент.Get(new ВложенияЭлектронныхПисемЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВложенияЭлектронныхПисемЗапрос;
		}
		public static void ЗаписатьНовый(ВложенияЭлектронныхПисемЗапрос ВложенияЭлектронныхПисемЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Catalogs/ВложенияЭлектронныхПисем?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВложенияЭлектронныхПисемОтвет = Клиент.Post(ВложенияЭлектронныхПисемЗапрос);
		}
		public static void Записать(ВложенияЭлектронныхПисемЗапрос ВложенияЭлектронныхПисемЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Catalogs/ВложенияЭлектронныхПисем?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВложенияЭлектронныхПисемОтвет = Клиент.Put(ВложенияЭлектронныхПисемЗапрос);
		}
		public static void Удалить(ВложенияЭлектронныхПисемЗапрос ВложенияЭлектронныхПисемЗапрос)//
		{
			var Урл = "http://localhost:1337/Catalogs/ВложенияЭлектронныхПисем?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВложенияЭлектронныхПисемОтвет = Клиент.Delete(ВложенияЭлектронныхПисемЗапрос);
		}
	}
}