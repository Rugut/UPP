
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
	public partial class НастройкиФормированияДокументовПоОрдерам:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("a0880213-3adc-43d3-8a9a-415e2766ce31");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191525.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Формировать документы автоматически (регламентным заданием)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public bool ФормироватьДокументыАвтоматически {get;set;}//Формировать документы автоматически
		///<summary>
		///Уникальный идентификатор регламентного задания
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(36)*/ РегламентноеЗадание {get;set;}//Регламентное задание
		[DataMember]
		[ProtoMember(10)]
		public ХранилищеЗначения НастройкиКомпоновщика {get;set;}//Настройки компоновщика
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодДетализации {get;set;}//Период детализации
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		[DataMember]
		[ProtoMember(14)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		[DataMember]
		[ProtoMember(15)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///Дата, по которую учтены данные в сформированных документах
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime ГраницаОбработки {get;set;}//Граница обработки
		[DataMember]
		[ProtoMember(17)]
		public object ШаблонРегулярногоДокумента {get;set;}//Шаблон регулярного документа
		[DataMember]
		[ProtoMember(18)]
		public string/*(50)*/ ВидРегулярногоДокумента {get;set;}//Вид регулярного документа
		[DataMember]
		[ProtoMember(19)]
		public bool НеОбрабатыватьВсеДокументы {get;set;}//Не обрабатывать все документы
		///<summary>
		///Количество дней после окончания периода, по истечении которых формируются документы
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(2)*/ Задержка {get;set;}

		public V82.СправочникиОбъект.НастройкиФормированияДокументовПоОрдерам  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиФормированияДокументовПоОрдерам();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.ФормироватьДокументыАвтоматически = ФормироватьДокументыАвтоматически;
			Объект.РегламентноеЗадание = РегламентноеЗадание;
			Объект.НастройкиКомпоновщика = НастройкиКомпоновщика;
			Объект.Комментарий = Комментарий;
			Объект.ПериодДетализации = ПериодДетализации;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ГраницаОбработки = ГраницаОбработки;
			Объект.ШаблонРегулярногоДокумента = ШаблонРегулярногоДокумента;
			Объект.ВидРегулярногоДокумента = ВидРегулярногоДокумента;
			Объект.НеОбрабатыватьВсеДокументы = НеОбрабатыватьВсеДокументы;
			Объект.Задержка = Задержка;
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