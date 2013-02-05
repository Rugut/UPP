
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
	public partial class Работодатели:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b7dc3eaf-8733-49d6-8feb-5065132b502f");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191646.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(12)*/ ИНН {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(9)*/ КПП {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС

		public V82.СправочникиОбъект.Работодатели  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Работодатели();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НаименованиеПолное = НаименованиеПолное;
			Объект.ИНН = ИНН;
			Объект.КПП = КПП;
			Объект.НаименованиеТерриториальногоОрганаФСС = НаименованиеТерриториальногоОрганаФСС;
			Объект.РегистрационныйНомерФСС = РегистрационныйНомерФСС;
			Объект.ДополнительныйКодФСС = ДополнительныйКодФСС;
			Объект.КодПодчиненностиФСС = КодПодчиненностиФСС;
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
