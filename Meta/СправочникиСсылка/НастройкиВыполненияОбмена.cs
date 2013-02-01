
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
	public partial class НастройкиВыполненияОбмена:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("374d1800-8261-4660-a34c-eda2ba21a1cf");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191137.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*6*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ВыполнятьДействияПодПолнымиПравами {get;set;}//Выполнять действия под полными правами
		[DataMember]
		[ProtoMember(8)]
		public bool ИспользоватьРегламентныеЗадания {get;set;}//Использовать регламентные задания
		[DataMember]
		[ProtoMember(9)]
		public bool ДинамическиИзменятьИнтервалМеждуОбменами {get;set;}//Динамически изменять интервал между обменами
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}//Пользователь
		[DataMember]
		[ProtoMember(11)]
		public bool КаждыйЗапускПрограммы {get;set;}//Каждый запуск программы
		[DataMember]
		[ProtoMember(12)]
		public bool КаждоеЗавершениеРаботыСПрограммой {get;set;}//Каждое завершение работы с программой
		[DataMember]
		[ProtoMember(13)]
		public string/*(255)*/ КаталогПроверкиДоступности {get;set;}//Каталог проверки доступности
		[DataMember]
		[ProtoMember(14)]
		public string/*(255)*/ ВыполнятьОбменПриПоявленииФайла {get;set;}//Выполнять обмен при появлении файла
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(10)*/ КоличествоЭлементовВТранзакцииНаВыгрузкуДанных {get;set;}//Количество элементов в транзакции на выгрузку данных
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10)*/ КоличествоЭлементовВТранзакцииНаЗагрузкуДанных {get;set;}//Количество элементов в транзакции на загрузку данных
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.УчетныеЗаписиЭлектроннойПочты УчетнаяЗаписьОтправкиСообщенияОбОшибке {get;set;}//Учетная запись отправки сообщения об ошибке
		[DataMember]
		[ProtoMember(18)]
		public string/*(100)*/ АдресДляОтправкиСообщенийОбОшибке {get;set;}//Адрес для отправки сообщений об ошибке
		[DataMember]
		[ProtoMember(19)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public string/*(40)*/ РегламентноеЗадание {get;set;}//Регламентное задание

		public V82.СправочникиОбъект.НастройкиВыполненияОбмена  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиВыполненияОбмена();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВыполнятьДействияПодПолнымиПравами = ВыполнятьДействияПодПолнымиПравами;
			Объект.ИспользоватьРегламентныеЗадания = ИспользоватьРегламентныеЗадания;
			Объект.ДинамическиИзменятьИнтервалМеждуОбменами = ДинамическиИзменятьИнтервалМеждуОбменами;
			Объект.Ответственный = Ответственный;
			Объект.КаждыйЗапускПрограммы = КаждыйЗапускПрограммы;
			Объект.КаждоеЗавершениеРаботыСПрограммой = КаждоеЗавершениеРаботыСПрограммой;
			Объект.КаталогПроверкиДоступности = КаталогПроверкиДоступности;
			Объект.ВыполнятьОбменПриПоявленииФайла = ВыполнятьОбменПриПоявленииФайла;
			Объект.КоличествоЭлементовВТранзакцииНаВыгрузкуДанных = КоличествоЭлементовВТранзакцииНаВыгрузкуДанных;
			Объект.КоличествоЭлементовВТранзакцииНаЗагрузкуДанных = КоличествоЭлементовВТранзакцииНаЗагрузкуДанных;
			Объект.УчетнаяЗаписьОтправкиСообщенияОбОшибке = УчетнаяЗаписьОтправкиСообщенияОбОшибке;
			Объект.АдресДляОтправкиСообщенийОбОшибке = АдресДляОтправкиСообщенийОбОшибке;
			Объект.Комментарий = Комментарий;
			Объект.РегламентноеЗадание = РегламентноеЗадание;
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
