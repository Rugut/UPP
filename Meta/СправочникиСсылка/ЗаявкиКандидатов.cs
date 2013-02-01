
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
	public partial class ЗаявкиКандидатов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("3ff0363c-a951-40b3-be59-e96e616dc47a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191227.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.СостоянияЗаявокКандидатов Состояние {get;set;}//Текущее состояние
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.Важность Важность {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}//Описание кандидата
		[DataMember]
		[ProtoMember(11)]
		public bool Закрыта {get;set;}//Работа по кандидату завершена
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ РезультатЗакрытия {get;set;}//Результат работы по кандидату
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ГруппыЗаявокКандидатов ГруппаЗаявок {get;set;}//Группа кандидатов
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОткрытия {get;set;}//Дата поступления кандидата
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ИсточникиИнформации ИсточникИнформации {get;set;}//Источник информации
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Вакансии Вакансия {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public object Подразделение {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}

		public V82.СправочникиОбъект.ЗаявкиКандидатов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЗаявкиКандидатов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ФизЛицо = ФизЛицо;
			Объект.Состояние = Состояние;
			Объект.Важность = Важность;
			Объект.Комментарий = Комментарий;
			Объект.Закрыта = Закрыта;
			Объект.РезультатЗакрытия = РезультатЗакрытия;
			Объект.ГруппаЗаявок = ГруппаЗаявок;
			Объект.ДатаОткрытия = ДатаОткрытия;
			Объект.ИсточникИнформации = ИсточникИнформации;
			Объект.Вакансия = Вакансия;
			Объект.Подразделение = Подразделение;
			Объект.Должность = Должность;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
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
