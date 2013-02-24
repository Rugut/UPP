
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
	public partial class ЛичныеКонтакты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("ca556363-c5ed-410e-b7ab-870ff6ba498e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191601.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*(50)*/ Фамилия {get;set;}
		public string/*(50)*/ Имя {get;set;}
		public string/*(50)*/ Отчество {get;set;}
		public DateTime ДатаРождения {get;set;}//Дата рождения
		public string/*(0)*/ Описание {get;set;}
		public bool НапоминатьОДнеРождения {get;set;}//Напоминать о дне рождения
		public decimal/*(2)*/ КоличествоДнейДоНапоминания {get;set;}//Количество дней до напоминания
		public V82.СправочникиСсылка.Пользователи ПользовательДляОграниченияПравДоступа {get;set;}//Пользователь для ограничения прав доступа

		public V82.СправочникиОбъект.ЛичныеКонтакты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЛичныеКонтакты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Фамилия = Фамилия;
			Объект.Имя = Имя;
			Объект.Отчество = Отчество;
			Объект.ДатаРождения = ДатаРождения;
			Объект.Описание = Описание;
			Объект.НапоминатьОДнеРождения = НапоминатьОДнеРождения;
			Объект.КоличествоДнейДоНапоминания = КоличествоДнейДоНапоминания;
			Объект.ПользовательДляОграниченияПравДоступа = ПользовательДляОграниченияПравДоступа;
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