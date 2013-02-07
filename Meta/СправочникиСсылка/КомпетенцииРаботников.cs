
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
	public partial class КомпетенцииРаботников:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("bef30854-312a-4ad5-bfb3-f233575a4e8f");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191430.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ ОписаниеКомпетенции {get;set;}//Описание компетенции
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.ШкалыОценокКомпетенций ШкалаОценок {get;set;}//Шкала оценок
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.ТиповыеАнкеты ТиповаяАнкета {get;set;}//Типовая анкета

		public V82.СправочникиОбъект.КомпетенцииРаботников  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КомпетенцииРаботников();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Наименование = Наименование;
			Объект.ОписаниеКомпетенции = ОписаниеКомпетенции;
			Объект.ШкалаОценок = ШкалаОценок;
			Объект.ТиповаяАнкета = ТиповаяАнкета;
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