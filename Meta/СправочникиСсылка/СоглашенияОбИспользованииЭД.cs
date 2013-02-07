
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
	public partial class СоглашенияОбИспользованииЭД:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("c000410b-b593-4ef1-8c9c-d464abe8dd86");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191415.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*(9)*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.СпособыОбменаЭД СпособОбменаЭД {get;set;}//Способ обмена
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.СтатусыСоглашенийЭД СтатусСоглашения {get;set;}//Статус соглашения
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public string/*(10)*/ Партнер {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public string/*(50)*/ ИдентификаторОрганизации {get;set;}//Идентификатор
		[DataMember]
		[ProtoMember(14)]
		public string/*(50)*/ ИдентификаторКонтрагента {get;set;}//Идентификатор контрагента
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.СертификатыЭЦП СертификатОрганизацииДляРасшифровки {get;set;}//Сертификат расшифровки
		[DataMember]
		[ProtoMember(16)]
		public ХранилищеЗначения СертификатКонтрагентаДляШифрования {get;set;}//Сертификат для шифрования
		[DataMember]
		[ProtoMember(17)]
		public object АдресРесурсаОрганизации {get;set;}//Адрес ресурса организации
		[DataMember]
		[ProtoMember(18)]
		public string/*(255)*/ АдресРесурсаКонтрагента {get;set;}//Адрес ресурса контрагента
		[DataMember]
		[ProtoMember(19)]
		public DateTime СрокДействия {get;set;}//Срок действия
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}//Ответственный за обмен
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.СоглашенияОбИспользованииЭД ТиповоеСоглашение {get;set;}//Типовое соглашение
		[DataMember]
		[ProtoMember(23)]
		public bool ПроверятьСертификатыПодписей {get;set;}//Проверять сертификаты подписей
		[DataMember]
		[ProtoMember(24)]
		public bool ЭтоТиповое {get;set;}//Это типовое
		[DataMember]
		[ProtoMember(25)]
		public bool ЭтоИнтеркампани {get;set;}//Это обмен между организациями
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.СертификатыЭЦП СертификатАбонента {get;set;}//Сертификат
		[DataMember]
		[ProtoMember(27)]
		public string/*(100)*/ ЛогинАбонента {get;set;}//Логин абонента

		public V82.СправочникиОбъект.СоглашенияОбИспользованииЭД  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СоглашенияОбИспользованииЭД();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.Номер = Номер;
			Объект.Дата = Дата;
			Объект.СпособОбменаЭД = СпособОбменаЭД;
			Объект.СтатусСоглашения = СтатусСоглашения;
			Объект.Организация = Организация;
			Объект.Контрагент = Контрагент;
			Объект.Партнер = Партнер;
			Объект.ИдентификаторОрганизации = ИдентификаторОрганизации;
			Объект.ИдентификаторКонтрагента = ИдентификаторКонтрагента;
			Объект.СертификатОрганизацииДляРасшифровки = СертификатОрганизацииДляРасшифровки;
			Объект.СертификатКонтрагентаДляШифрования = СертификатКонтрагентаДляШифрования;
			Объект.АдресРесурсаОрганизации = АдресРесурсаОрганизации;
			Объект.АдресРесурсаКонтрагента = АдресРесурсаКонтрагента;
			Объект.СрокДействия = СрокДействия;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.ТиповоеСоглашение = ТиповоеСоглашение;
			Объект.ПроверятьСертификатыПодписей = ПроверятьСертификатыПодписей;
			Объект.ЭтоТиповое = ЭтоТиповое;
			Объект.ЭтоИнтеркампани = ЭтоИнтеркампани;
			Объект.СертификатАбонента = СертификатАбонента;
			Объект.ЛогинАбонента = ЛогинАбонента;
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