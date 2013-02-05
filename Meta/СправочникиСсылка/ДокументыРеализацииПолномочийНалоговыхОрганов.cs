
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
	public partial class ДокументыРеализацииПолномочийНалоговыхОрганов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("9deb49bc-6178-4b38-82e0-db3917dda901");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191412.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public V82.СправочникиСсылка.НалоговыеОрганы НалоговыйОрган {get;set;}//Налоговый орган
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(150)*/ Идентификатор {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(150)*/ ИдентификаторОснования {get;set;}//Идентификатор основания
		///<summary>
		///Вид налогового документа
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public object ВидДокумента {get;set;}//Вид документа
		[DataMember]
		[ProtoMember(12)]
		public string/*(150)*/ НомерДокумента {get;set;}//Номер документа
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаДокумента {get;set;}//Дата документа
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаСообщения {get;set;}//Дата сообщения
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаОтправки {get;set;}//Дата отправки

		public V82.СправочникиОбъект.ДокументыРеализацииПолномочийНалоговыхОрганов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДокументыРеализацииПолномочийНалоговыхОрганов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НалоговыйОрган = НалоговыйОрган;
			Объект.Организация = Организация;
			Объект.Идентификатор = Идентификатор;
			Объект.ИдентификаторОснования = ИдентификаторОснования;
			Объект.ВидДокумента = ВидДокумента;
			Объект.НомерДокумента = НомерДокумента;
			Объект.ДатаДокумента = ДатаДокумента;
			Объект.ДатаСообщения = ДатаСообщения;
			Объект.ДатаОтправки = ДатаОтправки;
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
