
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
	///Данный справочник содержит обработки обслуживания торгового оборудования.
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОбработкиОбслуживанияТО:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("05c02b8c-8ef4-47d6-897c-c5d7c6aee567");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191737.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///Реквизит содержит описание обработки обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public string/*(0)*/ Описание {get;set;}//Описание обработки обслуживания
		///<summary>
		///Вид торгового оборудования, обслуживаемый настоящей обработкой обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования Вид {get;set;}//Вид торгового оборудования
		///<summary>
		///Имя файла обработки обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(256)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Обработка обслуживания торгового оборудования.
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public ХранилищеЗначения Обработка {get;set;}//Обработка обслуживания
		///<summary>
		///Уникальный идентификатор обработки обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(36)*/ Идентификатор {get;set;}
		///<summary>
		///Версия API механизма торгового, поддерживаемого обработкой обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(10.2)*/ ВерсияAPI {get;set;}//Версия API

		public V82.СправочникиОбъект.ОбработкиОбслуживанияТО  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ОбработкиОбслуживанияТО();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Описание = Описание;
			Объект.Вид = Вид;
			Объект.ИмяФайла = ИмяФайла;
			Объект.Обработка = Обработка;
			Объект.Идентификатор = Идентификатор;
			Объект.ВерсияAPI = ВерсияAPI;
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
