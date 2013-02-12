
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
	public partial class ПодключаемоеОборудование:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("cdc02669-133d-4b5c-92f3-4740f19682e7");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191736.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///Версия компоненты
		///</summary>
		[DataMember]
		[ProtoMember(6)]
		public string/*(16)*/ ВерсияКомпоненты {get;set;}//Версия компоненты
		///<summary>
		///Уникальный идентификатор устройства стандарта оборудования
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public string/*(36)*/ ИдентификаторУстройства {get;set;}//Идентификатор устройства
		[DataMember]
		[ProtoMember(8)]
		public bool УстройствоОтключено {get;set;}//Устройство отключено
		[DataMember]
		[ProtoMember(9)]
		public bool УстройствоИспользуется {get;set;}//Устройство используется
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ОбработчикиДрайверовПодключаемогоОборудования ОбработчикДрайвера {get;set;}//Обработчик драйвера
		[DataMember]
		[ProtoMember(11)]
		public ХранилищеЗначения Параметры {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.РабочиеМеста РабочееМесто {get;set;}//Рабочее место
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.ТипыПодключаемогоОборудования ТипОборудования {get;set;}//Тип оборудования
		[DataMember]
		[ProtoMember(14)]
		public bool ТребуетсяПереустановка {get;set;}//Требуется переустановка

		public V82.СправочникиОбъект.ПодключаемоеОборудование  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПодключаемоеОборудование();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ВерсияКомпоненты = ВерсияКомпоненты;
			Объект.ИдентификаторУстройства = ИдентификаторУстройства;
			Объект.УстройствоОтключено = УстройствоОтключено;
			Объект.УстройствоИспользуется = УстройствоИспользуется;
			Объект.ОбработчикДрайвера = ОбработчикДрайвера;
			Объект.Параметры = Параметры;
			Объект.РабочееМесто = РабочееМесто;
			Объект.ТипОборудования = ТипОборудования;
			Объект.ТребуетсяПереустановка = ТребуетсяПереустановка;
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