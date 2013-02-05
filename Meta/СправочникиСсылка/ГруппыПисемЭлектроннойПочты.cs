
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
	public partial class ГруппыПисемЭлектроннойПочты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("6c56ef69-9b05-45f2-bacf-f2041a848cad");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191312.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(6)*/ Порядок {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public bool ИспользоватьПредметыПисем {get;set;}//Использовать предметы писем

		public V82.СправочникиОбъект.ГруппыПисемЭлектроннойПочты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ГруппыПисемЭлектроннойПочты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Порядок = Порядок;
			Объект.ИспользоватьПредметыПисем = ИспользоватьПредметыПисем;
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
