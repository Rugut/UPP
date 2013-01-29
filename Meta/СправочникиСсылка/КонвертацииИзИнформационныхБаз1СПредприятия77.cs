
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
	///<summary>
	///Конвертации из информационных баз 1С:Предприятия
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КонвертацииИзИнформационныхБаз1СПредприятия77:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("79589a37-9879-48a2-a789-c94c3cd18325");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191824.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*(50)*/ ИдентификаторКонфигурации {get;set;}//Идентификатор конфигурации
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ Конфигурация {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(8)*/ НомерРелиза {get;set;}//Номер релиза
		[DataMember]
		[ProtoMember(10)]
		public string/*(10)*/ КонвертацияПомощник {get;set;}//Помощник выгрузки
		[DataMember]
		[ProtoMember(11)]
		public string/*(10)*/ КонвертацияОбработка {get;set;}//Обработка выгрузки
		[DataMember]
		[ProtoMember(12)]
		public string/*(10)*/ КонвертацияПравила {get;set;}//Правила выгрузки
		[DataMember]
		[ProtoMember(13)]
		public ХранилищеЗначения ХранилищеПомощник {get;set;}//Хранилище помощника
		[DataMember]
		[ProtoMember(14)]
		public ХранилищеЗначения ХранилищеОписаниеПомощника {get;set;}//Хранилище описания помощника
		[DataMember]
		[ProtoMember(15)]
		public ХранилищеЗначения ХранилищеОбработка {get;set;}//Хранилище обработки выгрузки
		[DataMember]
		[ProtoMember(16)]
		public ХранилищеЗначения ХранилищеПравила {get;set;}//Хранилище правил выгрузки
		[DataMember]
		[ProtoMember(17)]
		public string/*(256)*/ ИдентификаторЭлемента {get;set;}//Идентификатор элемента

		public V82.СправочникиОбъект.КонвертацииИзИнформационныхБаз1СПредприятия77  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КонвертацииИзИнформационныхБаз1СПредприятия77();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ИдентификаторКонфигурации = ИдентификаторКонфигурации;
			Объект.Конфигурация = Конфигурация;
			Объект.НомерРелиза = НомерРелиза;
			Объект.КонвертацияПомощник = КонвертацияПомощник;
			Объект.КонвертацияОбработка = КонвертацияОбработка;
			Объект.КонвертацияПравила = КонвертацияПравила;
			Объект.ХранилищеПомощник = ХранилищеПомощник;
			Объект.ХранилищеОписаниеПомощника = ХранилищеОписаниеПомощника;
			Объект.ХранилищеОбработка = ХранилищеОбработка;
			Объект.ХранилищеПравила = ХранилищеПравила;
			Объект.ИдентификаторЭлемента = ИдентификаторЭлемента;
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
