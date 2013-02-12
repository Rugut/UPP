
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВидыОплатЧекаККМ:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВидыОплатЧекаККМЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыОплатЧекаККМ/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыОплатЧекаККМЗапрос ВидыОплатЧекаККМЗапрос = null;
			try
			{
				ВидыОплатЧекаККМЗапрос = Клиент.Get(new ВидыОплатЧекаККМЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыОплатЧекаККМЗапрос;
		}
		public static ВидыОплатЧекаККМЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВидыОплатЧекаККМ/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыОплатЧекаККМЗапрос ВидыОплатЧекаККМЗапрос = null;
			try
			{
				ВидыОплатЧекаККМЗапрос = Клиент.Get(new ВидыОплатЧекаККМЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыОплатЧекаККМЗапрос;
		}
		public static ВидыОплатЧекаККМЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВидыОплатЧекаККМ/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВидыОплатЧекаККМЗапрос ВидыОплатЧекаККМЗапрос = null;
			try
			{
				ВидыОплатЧекаККМЗапрос = Клиент.Get(new ВидыОплатЧекаККМЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВидыОплатЧекаККМЗапрос;
		}
		public static void ЗаписатьНовый(ВидыОплатЧекаККМЗапрос ВидыОплатЧекаККМЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыОплатЧекаККМ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыОплатЧекаККМОтвет = Клиент.Post(ВидыОплатЧекаККМЗапрос);
		}
		public static void Записать(ВидыОплатЧекаККМЗапрос ВидыОплатЧекаККМЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВидыОплатЧекаККМ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыОплатЧекаККМОтвет = Клиент.Put(ВидыОплатЧекаККМЗапрос);
		}
		public static void Удалить(ВидыОплатЧекаККМЗапрос ВидыОплатЧекаККМЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВидыОплатЧекаККМ?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВидыОплатЧекаККМОтвет = Клиент.Delete(ВидыОплатЧекаККМЗапрос);
		}
	}
}