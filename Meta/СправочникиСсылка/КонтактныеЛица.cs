
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
	public partial class КонтактныеЛица:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("3789a6e5-800c-4b85-9e16-379a617595c6");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191737.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*(50)*/ Фамилия {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(50)*/ Имя {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(2)*/ КоличествоДнейДоНапоминания {get;set;}//Количество дней до напоминания
		[DataMember]
		[ProtoMember(10)]
		public bool НапоминатьОДнеРождения {get;set;}//Напоминать о дне рождения
		[DataMember]
		[ProtoMember(11)]
		public string/*(50)*/ Отчество {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Описание {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол {get;set;}

		public V82.СправочникиОбъект.КонтактныеЛица  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КонтактныеЛица();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Фамилия = Фамилия;
			Объект.Имя = Имя;
			Объект.КоличествоДнейДоНапоминания = КоличествоДнейДоНапоминания;
			Объект.НапоминатьОДнеРождения = НапоминатьОДнеРождения;
			Объект.Отчество = Отчество;
			Объект.ДатаРождения = ДатаРождения;
			Объект.Описание = Описание;
			Объект.Пол = Пол;
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
