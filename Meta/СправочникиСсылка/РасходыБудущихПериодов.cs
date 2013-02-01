
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РасходыБудущихПериодов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("9abae386-a9bc-4f8c-82fd-1a97a39f239f");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191944.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*11*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыРБП ВидРБП {get;set;}//Вид РБП
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаНачалаСписания {get;set;}//Дата начала списания
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаОкончанияСписания {get;set;}//Дата окончания списания
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ОбъектыСтроительства ОбъектСтроительства {get;set;}//Объект строительства
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Номенклатура Продукция {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияПродукции {get;set;}//Серия продукции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public object СчетБУ {get;set;}//Счет БУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object СубконтоБУ1 {get;set;}//Субконто БУ 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object СубконтоБУ2 {get;set;}//Субконто БУ 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоБУ3 {get;set;}//Субконто БУ 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СчетНУ {get;set;}//Счет НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоНУ1 {get;set;}//Субконто НУ 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоНУ2 {get;set;}//Субконто НУ 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоНУ3 {get;set;}//Субконто НУ 3
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ Сумма {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.ХарактеристикиНоменклатуры ХарактеристикаПродукции {get;set;}//Характеристика продукции
		[DataMember]
		[ProtoMember(29)]
		public V82.Перечисления/*Ссылка*/.СпособыПризнанияРасходов СпособПризнанияРасходов {get;set;}//Способ признания расходов
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск СпособРаспределенияЗатратНаВыпуск {get;set;}//Способ распределения затрат на выпуск
		[DataMember]
		[ProtoMember(31)]
		public V82.Перечисления/*Ссылка*/.СпособыСтроительства СпособСтроительства {get;set;}//Способ строительства
		[DataMember]
		[ProtoMember(32)]
		public V82.Перечисления/*Ссылка*/.ВидыАктивовДляРБП ВидАктива {get;set;}//Вид актива

		public V82.СправочникиОбъект.РасходыБудущихПериодов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.РасходыБудущихПериодов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВидРБП = ВидРБП;
			Объект.ДатаНачалаСписания = ДатаНачалаСписания;
			Объект.ДатаОкончанияСписания = ДатаОкончанияСписания;
			Объект.НоменклатурнаяГруппа = НоменклатурнаяГруппа;
			Объект.ОбъектСтроительства = ОбъектСтроительства;
			Объект.Подразделение = Подразделение;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.Продукция = Продукция;
			Объект.СерияПродукции = СерияПродукции;
			Объект.СтатьяЗатрат = СтатьяЗатрат;
			Объект.СчетБУ = СчетБУ;
			Объект.СубконтоБУ1 = СубконтоБУ1;
			Объект.СубконтоБУ2 = СубконтоБУ2;
			Объект.СубконтоБУ3 = СубконтоБУ3;
			Объект.СчетНУ = СчетНУ;
			Объект.СубконтоНУ1 = СубконтоНУ1;
			Объект.СубконтоНУ2 = СубконтоНУ2;
			Объект.СубконтоНУ3 = СубконтоНУ3;
			Объект.Сумма = Сумма;
			Объект.ХарактеристикаПродукции = ХарактеристикаПродукции;
			Объект.СпособПризнанияРасходов = СпособПризнанияРасходов;
			Объект.СпособРаспределенияЗатратНаВыпуск = СпособРаспределенияЗатратНаВыпуск;
			Объект.СпособСтроительства = СпособСтроительства;
			Объект.ВидАктива = ВидАктива;
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
