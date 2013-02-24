
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
	public partial class Вакансии:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d0debbba-ea58-4d38-a33e-ccb725472a19");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191634.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool Закрыта {get;set;}//Вакансия закрыта
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		public V82.СправочникиСсылка.Пользователи Заявитель {get;set;}
		public string/*(0)*/ Обязанности {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}//Ответственный за вакансию
		public DateTime ПлановаяДатаЗакрытия {get;set;}//Плановая дата закрытия
		public object Подразделение {get;set;}
		public string/*(0)*/ Требования {get;set;}
		public string/*(0)*/ Условия {get;set;}
		public DateTime ДатаОткрытия {get;set;}//Дата открытия
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия

		public V82.СправочникиОбъект.Вакансии  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Вакансии();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Закрыта = Закрыта;
			Объект.Должность = Должность;
			Объект.Заявитель = Заявитель;
			Объект.Обязанности = Обязанности;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ПлановаяДатаЗакрытия = ПлановаяДатаЗакрытия;
			Объект.Подразделение = Подразделение;
			Объект.Требования = Требования;
			Объект.Условия = Условия;
			Объект.ДатаОткрытия = ДатаОткрытия;
			Объект.ДатаЗакрытия = ДатаЗакрытия;
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