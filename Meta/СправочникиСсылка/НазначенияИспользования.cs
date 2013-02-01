
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
	public partial class НазначенияИспользования:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("94ff4f23-5de0-48bc-a1d1-a8de257e2e52");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191643.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.СпособыПогашенияСтоимости СпособПогашенияСтоимости {get;set;}//Способ погашения стоимости
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(4)*/ СрокПолезногоИспользования {get;set;}//Срок полезного использования
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(15.3)*/ Количество {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ЕдиницыИзмерения ЕдиницаИзмерения {get;set;}//Единица измерения
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации СпособОтраженияРасходов {get;set;}//Способ отражения расходов

		public V82.СправочникиОбъект.НазначенияИспользования  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НазначенияИспользования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СпособПогашенияСтоимости = СпособПогашенияСтоимости;
			Объект.СрокПолезногоИспользования = СрокПолезногоИспользования;
			Объект.Количество = Количество;
			Объект.ЕдиницаИзмерения = ЕдиницаИзмерения;
			Объект.СпособОтраженияРасходов = СпособОтраженияРасходов;
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
