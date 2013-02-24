
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class СертификатыЭЦП:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1a6ea539-001e-4d2d-a7d6-26fd48d0353c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191526.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public string/*100*/ Наименование {get;set;}
		public string/*(150)*/ ДолжностьПоСертификату {get;set;}//Должность по сертификату
		public bool ЗапомнитьПарольКСертификату {get;set;}//Запомнить пароль к сертификату
		public string/*(0)*/ Назначение {get;set;}
		public bool ОграничитьДоступКСертификату {get;set;}//Ограничить доступ к сертификату
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public bool Отозван {get;set;}
		public string/*(255)*/ Отпечаток {get;set;}
		public string/*(50)*/ ПарольПользователя {get;set;}//Пароль пользователя
		///<summary>
		///Пользователь, кому доступен сертификат подписи
		///</summary>
		public V82.СправочникиСсылка.Пользователи Пользователь {get;set;}
		public bool ПроверятьСоставИсполнителей {get;set;}//Проверять состав исполнителей
		///<summary>
		///Двоичные данные сертификата
		///</summary>
		public ХранилищеЗначения ФайлСертификата {get;set;}//Файл сертификата

		public V82.СправочникиОбъект.СертификатыЭЦП  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СертификатыЭЦП();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ДолжностьПоСертификату = ДолжностьПоСертификату;
			Объект.ЗапомнитьПарольКСертификату = ЗапомнитьПарольКСертификату;
			Объект.Назначение = Назначение;
			Объект.ОграничитьДоступКСертификату = ОграничитьДоступКСертификату;
			Объект.Организация = Организация;
			Объект.Отозван = Отозван;
			Объект.Отпечаток = Отпечаток;
			Объект.ПарольПользователя = ПарольПользователя;
			Объект.Пользователь = Пользователь;
			Объект.ПроверятьСоставИсполнителей = ПроверятьСоставИсполнителей;
			Объект.ФайлСертификата = ФайлСертификата;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}