
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВидыОплатЧекаККМ:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("ca370a34-3b49-45b9-8031-26befef1684d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191323.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.ТипыОплатЧекаККМ ТипОплаты {get;set;}//Тип оплаты
		public V82.СправочникиСсылка.Контрагенты БанкКредитор {get;set;}//Банк-кредитор
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорВзаиморасчетовБанкаКредитора {get;set;}//Договор взаиморасчетов банка-кредитора
		public decimal/*(5.2)*/ ПроцентБанковскойКомиссии {get;set;}//Процент банковской комиссии

		public V82.СправочникиОбъект.ВидыОплатЧекаККМ  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВидыОплатЧекаККМ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ТипОплаты = ТипОплаты;
			Объект.БанкКредитор = БанкКредитор;
			Объект.ДоговорВзаиморасчетовБанкаКредитора = ДоговорВзаиморасчетовБанкаКредитора;
			Объект.ПроцентБанковскойКомиссии = ПроцентБанковскойКомиссии;
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