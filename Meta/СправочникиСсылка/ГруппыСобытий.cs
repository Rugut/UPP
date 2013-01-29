
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
	public partial class ГруппыСобытий:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("7cf975c0-2d22-41ad-882e-b8b2283662fe");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191641.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*(200)*/ ОписаниеСобытия {get;set;}//Описание события
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовСобытия ВидОбъекта {get;set;}//Вид объекта

		public V82.СправочникиОбъект.ГруппыСобытий  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ГруппыСобытий();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ОписаниеСобытия = ОписаниеСобытия;
			Объект.ВидОбъекта = ВидОбъекта;
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
