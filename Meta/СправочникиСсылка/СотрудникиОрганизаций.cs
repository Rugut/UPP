
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
	public partial class СотрудникиОрганизаций:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d8e39b2c-77c1-4485-aa1b-81256eb94277");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191350.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*10*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public bool Актуальность {get;set;}//Не находится в архиве
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации ОбособленноеПодразделение {get;set;}//Трудовой договор: Обособленное подразделение
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.ВидыДоговоровСФизЛицами ВидДоговора {get;set;}//Вид договора
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ВидыЗанятостиВОрганизации ВидЗанятости {get;set;}//Вид занятости
		[DataMember]
		[ProtoMember(15)]
		public string/*(11)*/ НомерДоговора {get;set;}//Трудовой договор: Номер договора
		[DataMember]
		[ProtoMember(16)]
		public DateTime ДатаДоговора {get;set;}//Трудовой договор: Дата договора
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ГрафикиРаботы ГрафикРаботы {get;set;}//Трудовой договор: График работы
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Трудовой договор: Подразделение организации
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций Должность {get;set;}//Трудовой договор: Должность
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(4.2)*/ ЗанимаемыхСтавок {get;set;}//Трудовой договор: Занимаемых ставок
		[DataMember]
		[ProtoMember(21)]
		public DateTime ДатаНачала {get;set;}//Трудовой договор: Дата начала
		[DataMember]
		[ProtoMember(22)]
		public DateTime ДатаОкончания {get;set;}//Трудовой договор: Дата окончания
		[DataMember]
		[ProtoMember(23)]
		public decimal/*(4.1)*/ ИспытательныйСрок {get;set;}//Трудовой договор: Испытательный срок
		[DataMember]
		[ProtoMember(24)]
		public object ВидРасчета {get;set;}//Трудовой договор: Вид расчета
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(15.3)*/ ТарифнаяСтавка {get;set;}//Трудовой договор: Тарифная ставка
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Валюты ВалютаТарифнойСтавки {get;set;}//Трудовой договор: Валюта тарифной ставки
		[DataMember]
		[ProtoMember(27)]
		public string/*(15)*/ ПостфиксНаименования {get;set;}//Постфикс наименования
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.ТарифныеРазряды ТарифныйРазряд {get;set;}//Трудовой договор: Тарифный разряд
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.Организации ТекущееОбособленноеПодразделение {get;set;}//Текущее обособленное подразделение
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ТекущееПодразделениеОрганизации {get;set;}//Текущее подразделение организации
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ТекущаяДолжностьОрганизации {get;set;}//Текущая должность организации
		[DataMember]
		[ProtoMember(32)]
		public DateTime ДатаПриемаНаРаботу {get;set;}//Дата приема на работу
		[DataMember]
		[ProtoMember(33)]
		public DateTime ДатаУвольнения {get;set;}//Дата увольнения
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.Подразделения ТекущееПодразделениеКомпании {get;set;}//Подразделение компании
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ТекущаяДолжностьКомпании {get;set;}//Должность компании
		[DataMember]
		[ProtoMember(36)]
		public DateTime ДатаПриемаНаРаботуВКомпанию {get;set;}//Принят в компанию
		[DataMember]
		[ProtoMember(37)]
		public DateTime ДатаУвольненияИзКомпании {get;set;}//Уволен из компании
		[DataMember]
		[ProtoMember(38)]
		public bool ЯвляетсяСтудентомРаботающимВСтудотряде {get;set;}//Является студентом работающим в студотряде

		public V82.СправочникиОбъект.СотрудникиОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СотрудникиОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Физлицо = Физлицо;
			Объект.Актуальность = Актуальность;
			Объект.Организация = Организация;
			Объект.ОбособленноеПодразделение = ОбособленноеПодразделение;
			Объект.ВидДоговора = ВидДоговора;
			Объект.ВидЗанятости = ВидЗанятости;
			Объект.НомерДоговора = НомерДоговора;
			Объект.ДатаДоговора = ДатаДоговора;
			Объект.ГрафикРаботы = ГрафикРаботы;
			Объект.ПодразделениеОрганизации = ПодразделениеОрганизации;
			Объект.Должность = Должность;
			Объект.ЗанимаемыхСтавок = ЗанимаемыхСтавок;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.ИспытательныйСрок = ИспытательныйСрок;
			Объект.ВидРасчета = ВидРасчета;
			Объект.ТарифнаяСтавка = ТарифнаяСтавка;
			Объект.ВалютаТарифнойСтавки = ВалютаТарифнойСтавки;
			Объект.ПостфиксНаименования = ПостфиксНаименования;
			Объект.ТарифныйРазряд = ТарифныйРазряд;
			Объект.ТекущееОбособленноеПодразделение = ТекущееОбособленноеПодразделение;
			Объект.ТекущееПодразделениеОрганизации = ТекущееПодразделениеОрганизации;
			Объект.ТекущаяДолжностьОрганизации = ТекущаяДолжностьОрганизации;
			Объект.ДатаПриемаНаРаботу = ДатаПриемаНаРаботу;
			Объект.ДатаУвольнения = ДатаУвольнения;
			Объект.ТекущееПодразделениеКомпании = ТекущееПодразделениеКомпании;
			Объект.ТекущаяДолжностьКомпании = ТекущаяДолжностьКомпании;
			Объект.ДатаПриемаНаРаботуВКомпанию = ДатаПриемаНаРаботуВКомпанию;
			Объект.ДатаУвольненияИзКомпании = ДатаУвольненияИзКомпании;
			Объект.ЯвляетсяСтудентомРаботающимВСтудотряде = ЯвляетсяСтудентомРаботающимВСтудотряде;
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
