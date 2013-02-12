
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВычетыНДФЛ:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("66162784-3d30-4c15-8f2b-953a823b945c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191417.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*7*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*(3)*/ КодДляОтчетности2007 {get;set;}//Код для отчетности 2007 г.
		[DataMember]
		[ProtoMember(8)]
		public string/*(3)*/ КодДляОтчетности2008 {get;set;}//Код для отчетности 2008 г.
		[DataMember]
		[ProtoMember(9)]
		public string/*(3)*/ КодДляОтчетности2009 {get;set;}//Код для отчетности 2009 г.
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Наименование2007 {get;set;}//Наименование 2007 г.
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Наименование2008 {get;set;}//Наименование 2008 г.
		[DataMember]
		[ProtoMember(12)]
		public string/*(3)*/ КодДляОтчетности2010 {get;set;}//Код для отчетности 2010 г.
		[DataMember]
		[ProtoMember(13)]
		public bool НеПредоставляетсяНерезидентам {get;set;}//Не предоставляется нерезидентам
		[DataMember]
		[ProtoMember(14)]
		public bool НеОтражаетсяВОтчетности2010 {get;set;}//Не отражается в отчетности-2010
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.ГруппыВычетовПоНДФЛ ГруппаВычета {get;set;}//Группа вычета
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Наименование2010 {get;set;}//Наименование 2010 г.
		[DataMember]
		[ProtoMember(17)]
		public string/*(3)*/ КодДляОтчетности2011 {get;set;}//Код для отчетности 2011 г.

		public V82.СправочникиОбъект.ВычетыНДФЛ  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВычетыНДФЛ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.КодДляОтчетности2007 = КодДляОтчетности2007;
			Объект.КодДляОтчетности2008 = КодДляОтчетности2008;
			Объект.КодДляОтчетности2009 = КодДляОтчетности2009;
			Объект.Наименование2007 = Наименование2007;
			Объект.Наименование2008 = Наименование2008;
			Объект.КодДляОтчетности2010 = КодДляОтчетности2010;
			Объект.НеПредоставляетсяНерезидентам = НеПредоставляетсяНерезидентам;
			Объект.НеОтражаетсяВОтчетности2010 = НеОтражаетсяВОтчетности2010;
			Объект.ГруппаВычета = ГруппаВычета;
			Объект.Наименование2010 = Наименование2010;
			Объект.КодДляОтчетности2011 = КодДляОтчетности2011;
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