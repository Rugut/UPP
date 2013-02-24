
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
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*100*/ Наименование {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		public V82.СправочникиСсылка.СостоянияЗаявокКандидатов Состояние {get;set;}//Текущее состояние
		public V82.Перечисления/*Ссылка*/.Важность Важность {get;set;}
		public string/*(0)*/ Комментарий {get;set;}//Описание кандидата
		public bool Закрыта {get;set;}//Работа по кандидату завершена
		public string/*(0)*/ РезультатЗакрытия {get;set;}//Результат работы по кандидату
		public V82.СправочникиСсылка.ГруппыЗаявокКандидатов ГруппаЗаявок {get;set;}//Группа кандидатов
		public DateTime ДатаОткрытия {get;set;}//Дата поступления кандидата
		public V82.СправочникиСсылка.ИсточникиИнформации ИсточникИнформации {get;set;}//Источник информации
		public V82.СправочникиСсылка.Вакансии Вакансия {get;set;}
		public object Подразделение {get;set;}
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
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