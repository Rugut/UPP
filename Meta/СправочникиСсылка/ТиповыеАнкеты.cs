
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
	public partial class ТиповыеАнкеты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("92ef7e72-e19a-40ab-8194-21b5a7bb1005");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191231.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*50*/ Наименование {get;set;}
		public bool ЗагружатьОбъекты {get;set;}//Загружать объекты
		public ХранилищеЗначения МакетАнкеты {get;set;}//Макет анкеты
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовЗагружаемыхИзОпроса ВидСправочникаДляЗагрузки {get;set;}//Вид справочника для загрузки
		///<summary>
		///Установка данного флажка говорит о том, что анкета будет предназначена конкретным людям
		///</summary>
		public bool Адресная {get;set;}
		public string/*(200)*/ НаименованиеАнкеты {get;set;}//Наименование анкеты
		public string/*(0)*/ Вступление {get;set;}
		public bool ЗаполнятьАнкетуДанными {get;set;}//Заполнять анкету данными
		public V82.Перечисления/*Ссылка*/.ВидыАнкет ВидАнкеты {get;set;}//Вид анкеты
		public decimal/*(5)*/ СекундОтвета {get;set;}//Секунд ответа

		public V82.СправочникиОбъект.ТиповыеАнкеты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТиповыеАнкеты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ЗагружатьОбъекты = ЗагружатьОбъекты;
			Объект.МакетАнкеты = МакетАнкеты;
			Объект.ВидСправочникаДляЗагрузки = ВидСправочникаДляЗагрузки;
			Объект.Адресная = Адресная;
			Объект.НаименованиеАнкеты = НаименованиеАнкеты;
			Объект.Вступление = Вступление;
			Объект.ЗаполнятьАнкетуДанными = ЗаполнятьАнкетуДанными;
			Объект.ВидАнкеты = ВидАнкеты;
			Объект.СекундОтвета = СекундОтвета;
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