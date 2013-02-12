
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КлассификаторИспользованияРабочегоВремени:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("789cf997-385d-45fc-8e83-80b6fb4feef0");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191406.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*50*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*(2)*/ БуквенныйКод {get;set;}//Буквенный код
		[DataMember]
		[ProtoMember(7)]
		public string/*(2)*/ ЦифровойКод {get;set;}//Цифровой код
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ ПолноеНаименование {get;set;}//Полное наименование
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыВремени УдалитьВидВремени {get;set;}//Удалить вид времени
		[DataMember]
		[ProtoMember(10)]
		public bool РабочееВремя {get;set;}//Рабочее время

		public V82.СправочникиОбъект.КлассификаторИспользованияРабочегоВремени  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КлассификаторИспользованияРабочегоВремени();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.БуквенныйКод = БуквенныйКод;
			Объект.ЦифровойКод = ЦифровойКод;
			Объект.ПолноеНаименование = ПолноеНаименование;
			Объект.УдалитьВидВремени = УдалитьВидВремени;
			Объект.РабочееВремя = РабочееВремя;
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