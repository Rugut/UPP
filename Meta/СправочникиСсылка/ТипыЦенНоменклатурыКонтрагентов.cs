
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТипыЦенНоменклатурыКонтрагентов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("68a517dd-73ea-4b18-b0ef-67c2f4716904");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191153.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Валюты ВалютаЦены {get;set;}//Валюта цены по умолчанию
		///<summary>
		///Истина - цена включает НДС, ложь - не включает
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public bool ЦенаВключаетНДС {get;set;}//Цена включает НДС
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦеныНоменклатуры {get;set;}//Тип цены номенклатуры
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ ОписаниеТипаЦеныНоменклатурыКонтрагента {get;set;}//Описание типа цены номенклатуры контрагента
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}

		public V82.СправочникиОбъект.ТипыЦенНоменклатурыКонтрагентов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТипыЦенНоменклатурыКонтрагентов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВалютаЦены = ВалютаЦены;
			Объект.ЦенаВключаетНДС = ЦенаВключаетНДС;
			Объект.ТипЦеныНоменклатуры = ТипЦеныНоменклатуры;
			Объект.ОписаниеТипаЦеныНоменклатурыКонтрагента = ОписаниеТипаЦеныНоменклатурыКонтрагента;
			Объект.Комментарий = Комментарий;
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
