
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
	public partial class СценарииПланирования:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8920ee9d-4d8d-4949-a21a-99282c6c391d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191423.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ДетализацияПланирования ДетализацияПланирования {get;set;}//Детализация планирования
		[DataMember]
		[ProtoMember(11)]
		public bool УчетПоСуммам {get;set;}//Учет по суммам
		[DataMember]
		[ProtoMember(12)]
		public bool УчетПоКоличеству {get;set;}//Учет по количеству
		///<summary>
		///Валюта данных сценария
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.СпособыПланирования СпособПланирования {get;set;}//Способ планирования
		///<summary>
		///Продолжительность цикла планирования по сценарию (в периодах планирования)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(10)*/ ПродолжительностьЦикла {get;set;}//Продолжительность цикла
		///<summary>
		///Начало интервала планирования
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime НачалоПлана {get;set;}//Начало плана
		///<summary>
		///Конец интервала планирования
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public DateTime КонецПлана {get;set;}//Конец плана
		///<summary>
		///Годовая норма доходности для сценария
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(6.3)*/ НормаДоходности {get;set;}//Норма доходности, %
		///<summary>
		///Признак использования отдельной линейки курсов валют для сценария
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool ИспользоватьКурсыСценария {get;set;}//Использовать курсы сценария

		public V82.СправочникиОбъект.СценарииПланирования  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СценарииПланирования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Периодичность = Периодичность;
			Объект.ДетализацияПланирования = ДетализацияПланирования;
			Объект.УчетПоСуммам = УчетПоСуммам;
			Объект.УчетПоКоличеству = УчетПоКоличеству;
			Объект.Валюта = Валюта;
			Объект.СпособПланирования = СпособПланирования;
			Объект.ПродолжительностьЦикла = ПродолжительностьЦикла;
			Объект.НачалоПлана = НачалоПлана;
			Объект.КонецПлана = КонецПлана;
			Объект.НормаДоходности = НормаДоходности;
			Объект.ИспользоватьКурсыСценария = ИспользоватьКурсыСценария;
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