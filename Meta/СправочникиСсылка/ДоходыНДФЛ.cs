
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
	public partial class ДоходыНДФЛ:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1b05873f-a6a2-4c1d-931b-5b33a7da7a2b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191217.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*20*/ Код {get;set;}
		public string/*150*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.НДФЛСтавкиНалогообложенияРезидента СтавкаНалогообложенияРезидента {get;set;}//Ставка налогообложения резидента
		public string/*(4)*/ КодДляОтчетности {get;set;}//Код для отчетности
		public bool НеОблагаетсяУНалоговогоАгента {get;set;}//Не облагается у налогового агента
		public bool НеОтражаетсяВОтчетности2010 {get;set;}//Не отражается в отчетности-2010
		public bool УчитыватьПоПериодуДействия {get;set;}//Учитывать по периоду действия

		public V82.СправочникиОбъект.ДоходыНДФЛ  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДоходыНДФЛ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СтавкаНалогообложенияРезидента = СтавкаНалогообложенияРезидента;
			Объект.КодДляОтчетности = КодДляОтчетности;
			Объект.НеОблагаетсяУНалоговогоАгента = НеОблагаетсяУНалоговогоАгента;
			Объект.НеОтражаетсяВОтчетности2010 = НеОтражаетсяВОтчетности2010;
			Объект.УчитыватьПоПериодуДействия = УчитыватьПоПериодуДействия;
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