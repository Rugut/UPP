
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
	public partial class СохраненныеНастройки:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f9f2b5a1-8050-4cb5-bdaa-d5e15d3f3ca1");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191256.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.ТипыНастроек ТипНастройки {get;set;}//Тип настройки
		[DataMember]
		[ProtoMember(7)]
		public object НастраиваемыйОбъект {get;set;}//Настраиваемый объект
		[DataMember]
		[ProtoMember(8)]
		public bool СохранятьАвтоматически {get;set;}//Сохранять автоматически
		[DataMember]
		[ProtoMember(9)]
		public bool ИспользоватьПриОткрытии {get;set;}//Использовать при открытии
		[DataMember]
		[ProtoMember(10)]
		public bool СохранятьПериод {get;set;}//Сохранять период
		[DataMember]
		[ProtoMember(11)]
		public bool ОткрыватьПриЗапуске {get;set;}//Открывать при запуске
		[DataMember]
		[ProtoMember(12)]
		public ХранилищеЗначения ХранилищеНастроек {get;set;}//Хранилище настроек
		[DataMember]
		[ProtoMember(13)]
		public string/*(1000)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public string/*(100)*/ КраткийСоставНастройки {get;set;}//Краткий состав настройки

		public V82.СправочникиОбъект.СохраненныеНастройки  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СохраненныеНастройки();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ТипНастройки = ТипНастройки;
			Объект.НастраиваемыйОбъект = НастраиваемыйОбъект;
			Объект.СохранятьАвтоматически = СохранятьАвтоматически;
			Объект.ИспользоватьПриОткрытии = ИспользоватьПриОткрытии;
			Объект.СохранятьПериод = СохранятьПериод;
			Объект.ОткрыватьПриЗапуске = ОткрыватьПриЗапуске;
			Объект.ХранилищеНастроек = ХранилищеНастроек;
			Объект.Описание = Описание;
			Объект.КраткийСоставНастройки = КраткийСоставНастройки;
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
