
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
	public partial class СпособыОтраженияЗарплатыВРеглУчете:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("96d81af6-9a15-4c01-98e9-f1f64ad5031b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191301.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		[DataMember]
		[ProtoMember(8)]
		public object СчетДт {get;set;}//Счет Дт
		[DataMember]
		[ProtoMember(9)]
		public object СубконтоДт1 {get;set;}//Субконто Дт номер 1
		[DataMember]
		[ProtoMember(10)]
		public object СубконтоДт2 {get;set;}//Субконто Дт номер 2
		[DataMember]
		[ProtoMember(11)]
		public object СубконтоДт3 {get;set;}//Субконто Дт номер 3
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск СпособРаспределенияЗатрат {get;set;}//Способ распределения затрат
		[DataMember]
		[ProtoMember(13)]
		public object СчетКт {get;set;}//Счет Кт
		[DataMember]
		[ProtoMember(14)]
		public object СубконтоКт1 {get;set;}//Субконто Кт номер 1
		[DataMember]
		[ProtoMember(15)]
		public object СубконтоКт2 {get;set;}//Субконто Кт номер 2
		[DataMember]
		[ProtoMember(16)]
		public object СубконтоКт3 {get;set;}//Субконто Кт номер 3
		[DataMember]
		[ProtoMember(17)]
		public object СчетДтНУ {get;set;}//Счет дебета налогового учета
		[DataMember]
		[ProtoMember(18)]
		public object СубконтоДтНУ1 {get;set;}//Субконто Дт нал. учета номер 1
		[DataMember]
		[ProtoMember(19)]
		public object СубконтоДтНУ2 {get;set;}//Субконто Дт нал. учета номер 2
		[DataMember]
		[ProtoMember(20)]
		public object СубконтоДтНУ3 {get;set;}//Субконто Дт нал. учета номер 3
		[DataMember]
		[ProtoMember(21)]
		public object СчетКтНУ {get;set;}//Счет кредита налогового учета
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоКтНУ1 {get;set;}//Субконто Кт нал. учета номер 1
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоКтНУ2 {get;set;}//Субконто Кт нал. учета номер 2
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоКтНУ3 {get;set;}//Субконто Кт нал. учета номер 3
		[DataMember]
		[ProtoMember(25)]
		public V82.Перечисления/*Ссылка*/.ОтражениеВУСН ОтражениеВУСН {get;set;}//Отражение ВУСН
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеДт {get;set;}//Подразделение Дт
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеКт {get;set;}//Подразделение Кт
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.ВидыНачисленийОплатыТрудаПоСт255НК ВидНачисленийОплатыТрудаПоСтатье255НК {get;set;}//Вид начислений оплаты труда по статье255 НК

		public V82.СправочникиОбъект.СпособыОтраженияЗарплатыВРеглУчете  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СпособыОтраженияЗарплатыВРеглУчете();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.СчетДт = СчетДт;
			Объект.СубконтоДт1 = СубконтоДт1;
			Объект.СубконтоДт2 = СубконтоДт2;
			Объект.СубконтоДт3 = СубконтоДт3;
			Объект.СпособРаспределенияЗатрат = СпособРаспределенияЗатрат;
			Объект.СчетКт = СчетКт;
			Объект.СубконтоКт1 = СубконтоКт1;
			Объект.СубконтоКт2 = СубконтоКт2;
			Объект.СубконтоКт3 = СубконтоКт3;
			Объект.СчетДтНУ = СчетДтНУ;
			Объект.СубконтоДтНУ1 = СубконтоДтНУ1;
			Объект.СубконтоДтНУ2 = СубконтоДтНУ2;
			Объект.СубконтоДтНУ3 = СубконтоДтНУ3;
			Объект.СчетКтНУ = СчетКтНУ;
			Объект.СубконтоКтНУ1 = СубконтоКтНУ1;
			Объект.СубконтоКтНУ2 = СубконтоКтНУ2;
			Объект.СубконтоКтНУ3 = СубконтоКтНУ3;
			Объект.ОтражениеВУСН = ОтражениеВУСН;
			Объект.ПодразделениеДт = ПодразделениеДт;
			Объект.ПодразделениеКт = ПодразделениеКт;
			Объект.ВидНачисленийОплатыТрудаПоСтатье255НК = ВидНачисленийОплатыТрудаПоСтатье255НК;
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
