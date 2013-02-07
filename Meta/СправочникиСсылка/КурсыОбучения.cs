
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
	public partial class КурсыОбучения:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("0ba658fc-b975-4c48-b839-01203b472215");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191851.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ ОписаниеКурса {get;set;}//Описание курса
		///<summary>
		///Длительность курса в часах
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(8.2)*/ ДлительностьКурса {get;set;}//Длительность курса
		///<summary>
		///Средний размер затрат на обучение одного сотрудника на данном курсе
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(10.2)*/ ЗатратыНаОдногоОбучающегося {get;set;}//Затраты на одного обучающегося
		///<summary>
		///Вид выдаваемого документа после обучения
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ДокументыОбОбразовании ВидДокументаОбОбразовании {get;set;}//Вид документа об образовании
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВРегУчете {get;set;}//Отражать в рег учете

		public V82.СправочникиОбъект.КурсыОбучения  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КурсыОбучения();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.ОписаниеКурса = ОписаниеКурса;
			Объект.ДлительностьКурса = ДлительностьКурса;
			Объект.ЗатратыНаОдногоОбучающегося = ЗатратыНаОдногоОбучающегося;
			Объект.ВидДокументаОбОбразовании = ВидДокументаОбОбразовании;
			Объект.Валюта = Валюта;
			Объект.ОтражатьВРегУчете = ОтражатьВРегУчете;
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