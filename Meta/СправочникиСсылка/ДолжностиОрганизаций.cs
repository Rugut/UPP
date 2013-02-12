
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
	public partial class ДолжностиОрганизаций:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("28f291da-0cd8-4243-828b-e5f78069363d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191709.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public V82.СправочникиСсылка.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения КодПозицииСписка {get;set;}//Код позиции списка
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.ОснованияВыслугиЛет ОснованиеВыслугиЛет {get;set;}//Основание выслуги лет
		[DataMember]
		[ProtoMember(9)]
		public bool АУП {get;set;}//Административно-управленческий персонал
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.КатегорииДолжностейДляВоинскогоУчета КатегорияВоинскогоУчета {get;set;}//Категория воинского учета
		[DataMember]
		[ProtoMember(11)]
		public string/*(6)*/ КодПоОКПДТР {get;set;}//Код по ОКПДТР
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Должности Должность {get;set;}//Должность кадрового плана
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.КатегорииДолжностейДляСтатистическогоУчета КатегорияСтатистическогоУчета {get;set;}//Категория статистического учета
		[DataMember]
		[ProtoMember(14)]
		public bool ЯвляетсяДолжностьюЛетногоЭкипажа {get;set;}//Является должностью летного экипажа
		[DataMember]
		[ProtoMember(15)]
		public bool ЯвляетсяШахтерскойДолжностью {get;set;}//Является шахтерской должностью
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.КатегорииДолжностейДляУчетаЗабронированныхС2011Года КатегорияУчетаЗабронированных {get;set;}//Категория учета забронированных
		[DataMember]
		[ProtoMember(17)]
		public bool ЯвляетсяФармацевтическойДолжностью {get;set;}//Является фармацевтической должностью

		public V82.СправочникиОбъект.ДолжностиОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДолжностиОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.КодПозицииСписка = КодПозицииСписка;
			Объект.ОснованиеВыслугиЛет = ОснованиеВыслугиЛет;
			Объект.АУП = АУП;
			Объект.КатегорияВоинскогоУчета = КатегорияВоинскогоУчета;
			Объект.КодПоОКПДТР = КодПоОКПДТР;
			Объект.Должность = Должность;
			Объект.КатегорияСтатистическогоУчета = КатегорияСтатистическогоУчета;
			Объект.ЯвляетсяДолжностьюЛетногоЭкипажа = ЯвляетсяДолжностьюЛетногоЭкипажа;
			Объект.ЯвляетсяШахтерскойДолжностью = ЯвляетсяШахтерскойДолжностью;
			Объект.КатегорияУчетаЗабронированных = КатегорияУчетаЗабронированных;
			Объект.ЯвляетсяФармацевтическойДолжностью = ЯвляетсяФармацевтическойДолжностью;
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