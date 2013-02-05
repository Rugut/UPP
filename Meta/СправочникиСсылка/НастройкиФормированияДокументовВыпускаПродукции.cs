
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
	///Настройки формирования документов выпуска продукции по данным подсистемы "Оперативный учет производства"
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НастройкиФормированияДокументовВыпускаПродукции:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("2fdcecb7-ce58-4214-8de4-96723168ac5d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191903.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*70*/ Наименование {get;set;}
		///<summary>
		///Дата, по которую учтены данные в сформированных документах
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public DateTime ГраницаОбработки {get;set;}//Граница обработки
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодДетализации {get;set;}//Период детализации
		[DataMember]
		[ProtoMember(11)]
		public string/*(50)*/ ВидРегулярногоДокумента {get;set;}//Вид регулярного документа
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		[DataMember]
		[ProtoMember(16)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		[DataMember]
		[ProtoMember(17)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		[DataMember]
		[ProtoMember(18)]
		public bool ОтразитьВыпуск {get;set;}//Отразить выпуск
		[DataMember]
		[ProtoMember(19)]
		public bool ОтразитьМатериалы {get;set;}//Отразить материалы
		[DataMember]
		[ProtoMember(20)]
		public bool НеОбрабатыватьПериодДоЗавершенияСмен {get;set;}//Не формировать документы за период, в котором есть незавершенные смены
		///<summary>
		///Формировать документы автоматически (регламентным заданием)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ФормироватьДокументыАвтоматически {get;set;}//Формировать документы автоматически
		///<summary>
		///Уникальный идентификатор регламентного задания
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(36)*/ РегламентноеЗадание {get;set;}//Регламентное задание
		///<summary>
		///Количество дней после окончания периода, по истечении которых формируются документы
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public decimal/*(2)*/ Задержка {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public bool НеОбрабатыватьВсеДокументы {get;set;}//Не обрабатывать все документы

		public V82.СправочникиОбъект.НастройкиФормированияДокументовВыпускаПродукции  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиФормированияДокументовВыпускаПродукции();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.ГраницаОбработки = ГраницаОбработки;
			Объект.Подразделение = Подразделение;
			Объект.ПериодДетализации = ПериодДетализации;
			Объект.ВидРегулярногоДокумента = ВидРегулярногоДокумента;
			Объект.Организация = Организация;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.Склад = Склад;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ОтразитьВыпуск = ОтразитьВыпуск;
			Объект.ОтразитьМатериалы = ОтразитьМатериалы;
			Объект.НеОбрабатыватьПериодДоЗавершенияСмен = НеОбрабатыватьПериодДоЗавершенияСмен;
			Объект.ФормироватьДокументыАвтоматически = ФормироватьДокументыАвтоматически;
			Объект.РегламентноеЗадание = РегламентноеЗадание;
			Объект.Задержка = Задержка;
			Объект.Комментарий = Комментарий;
			Объект.НеОбрабатыватьВсеДокументы = НеОбрабатыватьВсеДокументы;
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
