
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
		public bool Закрыта {get;set;}//Вакансия закрыта
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Пользователи Заявитель {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Обязанности {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}//Ответственный за вакансию
		[DataMember]
		[ProtoMember(13)]
		public DateTime ПлановаяДатаЗакрытия {get;set;}//Плановая дата закрытия
		[DataMember]
		[ProtoMember(14)]
		public object Подразделение {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Требования {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Условия {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаОткрытия {get;set;}//Дата открытия
		[DataMember]
		[ProtoMember(18)]
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