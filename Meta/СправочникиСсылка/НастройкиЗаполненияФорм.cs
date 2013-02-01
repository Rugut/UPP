
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
	public partial class НастройкиЗаполненияФорм:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d906ddbb-e22d-45aa-831b-088f20ea9338");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191630.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*70*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*(300)*/ Объект {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public ХранилищеЗначения Данные {get;set;}

		public V82.СправочникиОбъект.НастройкиЗаполненияФорм  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиЗаполненияФорм();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.Данные = Данные;
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
