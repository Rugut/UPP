
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
	public partial class ЦиклыОбмена:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("96a1d76f-5dd2-49e0-9b68-523b824bab2e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191458.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*10*/ Код {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public V82.СправочникиСсылка.УчетныеЗаписиДокументооборота УчетнаяЗапись {get;set;}//Учетная запись
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.ТипыЦикловОбмена Тип {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(100)*/ Идентификатор {get;set;}//Идентификатор цикла обмена
		[DataMember]
		[ProtoMember(10)]
		public object Предмет {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public object ВнешняяОрганизация {get;set;}//Внешняя организация
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаСоздания {get;set;}//Дата создания
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаПоследнегоСообщения {get;set;}//Дата последнего сообщения
		[DataMember]
		[ProtoMember(16)]
		public object ВидОтчета {get;set;}//Вид отчета
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		[DataMember]
		[ProtoMember(18)]
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(3)*/ ВидДокумента {get;set;}//Вид документа
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.ВидыУслугПриИОН ВидУслуги {get;set;}//Вид услуги
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.ФорматОтветаНаЗапросИОН ФорматОтвета {get;set;}//Формат ответа
		[DataMember]
		[ProtoMember(22)]
		public string/*(16)*/ Период {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.ВидыЦикловОбмена Вид {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.ФорматыДокументооборотаСФНС ФорматДокументооборота {get;set;}//Формат документооборота

		public V82.СправочникиОбъект.ЦиклыОбмена  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЦиклыОбмена();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.УчетнаяЗапись = УчетнаяЗапись;
			Объект.Тип = Тип;
			Объект.Идентификатор = Идентификатор;
			Объект.Предмет = Предмет;
			Объект.Организация = Организация;
			Объект.ВнешняяОрганизация = ВнешняяОрганизация;
			Объект.ДатаСоздания = ДатаСоздания;
			Объект.ДатаЗакрытия = ДатаЗакрытия;
			Объект.ДатаПоследнегоСообщения = ДатаПоследнегоСообщения;
			Объект.ВидОтчета = ВидОтчета;
			Объект.ДатаНачалаПериода = ДатаНачалаПериода;
			Объект.ДатаОкончанияПериода = ДатаОкончанияПериода;
			Объект.ВидДокумента = ВидДокумента;
			Объект.ВидУслуги = ВидУслуги;
			Объект.ФорматОтвета = ФорматОтвета;
			Объект.Период = Период;
			Объект.Вид = Вид;
			Объект.ФорматДокументооборота = ФорматДокументооборота;
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
