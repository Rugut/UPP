
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
	public partial class НормативыОбслуживанияОС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("04151f13-c635-439e-8800-4e49bed66283");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221192000.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаУтверждения {get;set;}//Дата утверждения
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Номенклатура Услуга {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодичностьОбслуживания {get;set;}//Периодичность обслуживания
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(10.2)*/ КоличествоПериодов {get;set;}//Количество периодов
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ПараметрыВыработкиОС ПараметрВыработки {get;set;}//Параметр выработки
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.3)*/ ЗначениеПараметраВыработки {get;set;}//Значение параметра выработки
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(15.3)*/ Количество {get;set;}

		public V82.СправочникиОбъект.НормативыОбслуживанияОС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НормативыОбслуживанияОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Комментарий = Комментарий;
			Объект.Состояние = Состояние;
			Объект.ДатаУтверждения = ДатаУтверждения;
			Объект.Услуга = Услуга;
			Объект.ПериодичностьОбслуживания = ПериодичностьОбслуживания;
			Объект.КоличествоПериодов = КоличествоПериодов;
			Объект.ПараметрВыработки = ПараметрВыработки;
			Объект.ЗначениеПараметраВыработки = ЗначениеПараметраВыработки;
			Объект.Количество = Количество;
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
