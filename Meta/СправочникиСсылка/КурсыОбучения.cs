
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
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*150*/ Наименование {get;set;}
		public string/*(0)*/ ОписаниеКурса {get;set;}//Описание курса
		///<summary>
		///Длительность курса в часах
		///</summary>
		public decimal/*(8.2)*/ ДлительностьКурса {get;set;}//Длительность курса
		///<summary>
		///Средний размер затрат на обучение одного сотрудника на данном курсе
		///</summary>
		public decimal/*(10.2)*/ ЗатратыНаОдногоОбучающегося {get;set;}//Затраты на одного обучающегося
		///<summary>
		///Вид выдаваемого документа после обучения
		///</summary>
		public V82.СправочникиСсылка.ДокументыОбОбразовании ВидДокументаОбОбразовании {get;set;}//Вид документа об образовании
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		public bool ОтражатьВРегУчете {get;set;}//Отражать в рег учете

		public V82.СправочникиОбъект.КурсыОбучения  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КурсыОбучения();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
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